import {
  Children,
  isValidElement,
  useRef,
  useState,
  useMemo,
  MouseEventHandler,
  Ref,
  ReactNode,
  CSSProperties,
} from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { HoverCard } from './hover-card';
import { useAllowFlag, useClientWidth } from './utils';
import { useIntersection } from '@sima-land/ui-nucleons/hooks/intersection';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import { useLayer } from '@sima-land/ui-nucleons/helpers/layer';
import { reduceBaseInfo, reduceHoverInfo } from '../product-card';
import { ProductCardChildren } from '../product-card/types';
import { ProductCarouselProps } from './types';
import classnames from 'classnames/bind';
import styles from './product-carousel.module.scss';

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

/**
 * Карусель рекомендованных товаров.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductCarousel({
  className,
  itemSize = { xs: 4, s: 3, m: 2, l: 2, xl: 2 },
  itemProps,
  onInViewport,
  onNeedRequest,
  withHoverCard,
  children,

  // @todo не совсем правильно заставлять работать с внутренностями реакта - надо придумать что-то более простое
  reduceBaseInfo: reduceBaseInfoProp = withHoverCard ? reduceBaseInfo : element => element,
  reduceHoverInfo: reduceHoverInfoProp = reduceHoverInfo,
}: ProductCarouselProps) {
  const layer = useLayer();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const cardShow = useAllowFlag();
  const needBigArrows = useMedia('(min-width: 1600px)');
  const rootRef = useRef<HTMLDivElement>(null);
  const targetItemRef = useRef<HTMLDivElement | null>(null);

  const items = Children.toArray(children).reduce<ProductCardChildren[]>((acc, item) => {
    if (isValidElement<ProductInfoProps>(item) && item.type === ProductInfo) {
      acc.push(item as any);
    }
    return acc;
  }, []);

  // вычисляем ширину элемента карусели для позиционирования стрелок
  const firstItemRef = useRef<HTMLDivElement>(null);
  const itemWidth = useClientWidth(firstItemRef, [items.length]);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  const options = useMemo(() => ({ rootMargin: '200px 0px 200px 0px' }), []);
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
    <div
      ref={rootRef}
      className={cx('root', className)}
      data-testid='product-carousel:root'
      onMouseLeave={() => setActiveItemIndex(null)}
    >
      {items.length > 0 && (
        <Carousel
          step={3}
          draggable={false}
          // докидываем индекс чтобы позже брать актуальные данные из списка по нему
          items={items.map((item, index) => [item, index])}
          // ВАЖНО: скрываем кнопки ТОЛЬКО пока itemWidth не вычислен
          withControls={itemWidth !== null ? undefined : false}
          controlProps={
            itemWidth !== null
              ? {
                  size: needBigArrows ? 'l' : 's',
                  style: {
                    zIndex: layer + 2, // чтобы кнопки были над HoverCard
                    top: `${itemWidth / 2}px`,
                  },
                }
              : undefined
          }
          renderItem={([item, index]: [ProductCardChildren, number], realIndex) => (
            <CarouselItem
              rootRef={realIndex === 0 ? firstItemRef : undefined}
              className={cx(getSizeClasses(itemSize), itemProps?.className)}
              style={itemProps?.style}
              onMouseEnter={e => {
                if (cardShow.allowed()) {
                  targetItemRef.current = e.currentTarget;
                  setActiveItemIndex(index);
                }
              }}
            >
              {reduceBaseInfoProp(item)}
            </CarouselItem>
          )}
          // длительность прокрутки в Carousel - 320, делаем слегка с запасом
          // @todo после восстановления проверить позицию курсора чтобы показать карточку (если будет критично)
          onChangeTargetIndex={() => cardShow.disallowFor(360)}
        />
      )}

      {/* ВАЖНО: выводим всплывающую карточку отдельно так как у карусели overflow:hidden */}
      {/* ВАЖНО: чтобы размонтировать всплывающую карточку строго каждый раз используем массив и key */}
      {withHoverCard &&
        activeItemIndex !== null &&
        items[activeItemIndex] &&
        [items[activeItemIndex]].map(item => (
          <HoverCard
            key={activeItemIndex}
            targetRef={targetItemRef}
            onMouseLeave={() => setActiveItemIndex(null)}
            {...item.props}
          >
            {reduceHoverInfoProp(item)}
          </HoverCard>
        ))}
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
  onMouseEnter,
  children,
  style,
}: {
  rootRef?: Ref<HTMLDivElement>;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      ref={rootRef}
      data-testid='product-carousel:item'
      className={cx('item', className)}
      onMouseEnter={onMouseEnter}
      style={style}
    >
      {children}
    </div>
  );
}
