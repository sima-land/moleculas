import {
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
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
import { ProductInfo, ProductInfoProps, Parts } from '../../../common/components/product-info';
import classnames from 'classnames/bind';
import styles from './product-carousel.module.scss';
import { useLayer } from '@sima-land/ui-nucleons/helpers/layer';

interface ItemSize {
  xs?: 2 | 3 | 4;
  s?: 2 | 3 | 4;
  m?: 2 | 3 | 4;
  l?: 2 | 3 | 4;
  xl?: 2 | 3 | 4;
}

export type ItemElement = ReactElement<ProductInfoProps>;

export interface ProductCarouselProps {
  /** CSS-класс для корневого элемента. */
  className?: string;

  /** Элементы карусели. */
  children?: ReactNode;

  /** Настройки размера элемента карусели. */
  itemSize?: ItemSize | 'unset';

  /** Сработает при попадании карусели во viewport. */
  onInViewport?: () => void;

  /** Сработает при попадании карусели в область достаточно близкую к viewport'у. */
  onNeedRequest?: () => void;

  /** Нужно ли показывать всплывающую карточку при наведении на элемент карусели. */
  withHoverCard?: boolean;

  /** Предоставит свойства для элемента карусели. */
  itemProps?: { style?: CSSProperties; className?: string };
}

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
}: ProductCarouselProps) {
  const layer = useLayer();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const cardShow = useAllowFlag();
  const needBigArrows = useMedia('(min-width: 1600px)');
  const rootRef = useRef<HTMLDivElement>(null);
  const targetItemRef = useRef<HTMLDivElement | null>(null);

  const items = Children.toArray(children).reduce<ItemElement[]>((acc, item) => {
    if (isValidElement<ProductInfoProps>(item) && item.type === ProductInfo) {
      acc.push(item);
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
    <div ref={rootRef} className={cx('root', className)} data-testid='product-carousel:root'>
      {items.length > 0 && (
        <Carousel
          step={3}
          draggable={false}
          // докидываем индекс чтобы позже брать актуальные данные из списка по нему
          items={items.map((item, index) => [item, index])}
          {...(itemWidth !== null && {
            withControls: undefined, // автоматически скрываем стрелки если все товары влезли (по дизайн-гайдам)
            controlProps: {
              size: needBigArrows ? 'l' : 's',
              style: {
                zIndex: layer + 2, // чтобы кнопки были над HoverCard
                top: `${itemWidth / 2}px`,
              },
            },
          })}
          renderItem={([item, index]: [ItemElement, number], realIndex) => (
            <Item
              rootRef={realIndex === 0 ? firstItemRef : undefined}
              withHoverCard={withHoverCard}
              className={cx(getSizeClasses(itemSize), itemProps?.className)}
              style={itemProps?.style}
              onMouseEnter={e => {
                if (cardShow.allowed()) {
                  targetItemRef.current = e.currentTarget;
                  setActiveItemIndex(index);
                }
              }}
            >
              {item}
            </Item>
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
          />
        ))}
    </div>
  );
}

/**
 * Элемент карусели. Выведет базовый контент.
 * Полное содержимое будет выведено во всплывающей карточке.
 * @inheritdoc
 */
function Item({
  rootRef,
  className,
  onMouseEnter,
  withHoverCard,
  children,
  style,
}: {
  rootRef?: Ref<HTMLDivElement>;
  children: ItemElement;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  withHoverCard?: boolean;
}) {
  return (
    <div
      ref={rootRef}
      data-testid='product-carousel:item'
      className={cx('item', className)}
      onMouseEnter={onMouseEnter}
      style={style}
    >
      {cloneElement(children, {
        children: Children.toArray(children.props.children).reduce<any[]>((list, child) => {
          if (isValidElement<any>(child)) {
            switch (child.type) {
              case Parts.Image: {
                // иконки у картинки скрываем если есть HoverCard
                list.push(withHoverCard ? cloneElement(child, { children: undefined }) : child);
                break;
              }

              case Parts.Footer:
                // футер не выводим если есть HoverCard
                !withHoverCard && list.push(child);
                break;

              default: {
                // остальное выводим как есть
                list.push(child);
                break;
              }
            }
          }

          return list;
        }, []),
      })}
    </div>
  );
}
