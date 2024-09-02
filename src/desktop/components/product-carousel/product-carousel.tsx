import { Children, isValidElement, useRef, useMemo, Ref, ReactNode, CSSProperties } from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { useClientWidth } from '../../../common/hooks';
import { useIntersection, useMedia } from '@sima-land/ui-nucleons/hooks';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import { useLayer } from '@sima-land/ui-nucleons/helpers';
import { ProductCarouselProps } from './types';
import classnames from 'classnames/bind';
import styles from './product-carousel.m.scss';

const cx = classnames.bind(styles);

// eslint-disable-next-line require-jsdoc
const getSizeClasses = (size: ProductCarouselProps['itemSize']) =>
  size && size !== 'unset'
    ? [
        `size-xs-${size.xs || 4}`,
        `size-s-${size.s || 3}`,
        `size-m-${size.m || 2}`,
        `size-l-${size.l || 2}`,
        `size-xl-${size.xl || 2}`,
      ]
    : [];

const defaultNeedRequestOptions: IntersectionObserverInit = {
  rootMargin: '200px 0px 200px 0px',
};

/**
 * Карусель рекомендованных товаров.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductCarousel({
  infinite = true,
  className,
  itemSize = { xs: 4, s: 3, m: 2, l: 2, xl: 2 },
  itemProps,
  onInViewport,
  onNeedRequest,
  children,
  controlProps,
  itemImageRatio = 1,
  needRequestOptions = defaultNeedRequestOptions,
}: ProductCarouselProps) {
  const layer = useLayer();
  const needBigArrows = useMedia('(min-width: 1600px)');
  const rootRef = useRef<HTMLDivElement>(null);

  const items = Children.toArray(children).reduce<ReactNode[]>((acc, item) => {
    if (isValidElement<ProductInfoProps>(item) && item.type === ProductInfo) {
      acc.push(item);
    }
    return acc;
  }, []);

  // вычисляем ширину элемента карусели для позиционирования стрелок
  const firstItemRef = useRef<HTMLDivElement>(null);
  const itemWidth = useClientWidth(firstItemRef, [items.length]);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  const { root, rootMargin, threshold } = needRequestOptions;
  const options = useMemo<IntersectionObserverInit>(
    () => ({
      root,
      rootMargin,
      threshold,
    }),
    [root, rootMargin, threshold],
  );
  useIntersection(
    rootRef,
    entry => {
      entry.isIntersecting && onNeedRequest && onNeedRequest();
    },
    options,
  );

  // отправляем статистку, когда компонент попадает в зону видимости
  useIntersection(rootRef, entry => {
    entry.isIntersecting && onInViewport && onInViewport();
  });

  return (
    <div ref={rootRef} className={cx('root', className)} data-testid='product-carousel:root'>
      {items.length > 0 && (
        <Carousel
          infinite={infinite}
          step={3}
          draggable={false}
          items={items}
          // ВАЖНО: скрываем кнопки ТОЛЬКО пока itemWidth не вычислен
          withControls={itemWidth !== null ? undefined : false}
          controlProps={
            itemWidth !== null
              ? {
                  size: needBigArrows ? 'l' : 's',
                  style: {
                    zIndex: layer + 2, // чтобы кнопки были над HoverCard
                    top: `${(itemWidth * itemImageRatio) / 2}px`,
                    ...controlProps?.style,
                  },
                  ...controlProps,
                }
              : controlProps
          }
          renderItem={(item: ReactNode, realIndex) => (
            <CarouselItem
              rootRef={realIndex === 0 ? firstItemRef : undefined}
              className={cx(getSizeClasses(itemSize), itemProps?.className)}
              style={itemProps?.style}
            >
              {item}
            </CarouselItem>
          )}
        />
      )}
    </div>
  );
}

/**
 * Элемент карусели. Выведет базовый контент.
 * Полное содержимое будет выведено во всплывающей карточке.
 * @inheritdoc
 */
function CarouselItem({
  rootRef,
  className,
  children,
  style,
}: {
  rootRef?: Ref<HTMLDivElement>;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      ref={rootRef}
      data-testid='product-carousel:item'
      className={cx('item', className)}
      style={style}
    >
      {children}
    </div>
  );
}
