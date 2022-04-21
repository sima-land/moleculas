import React, { Children, isValidElement, cloneElement, useRef, useState, useMemo } from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { HoverCard } from './hover-card';
import { useAllowFlag, useChildWidth } from './utils';
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

export type ItemElement = React.ReactElement<ProductInfoProps, typeof ProductInfo>;

export interface ProductCarouselProps {
  /** CSS-класс для корневого элемента. */
  className?: string;

  /** Элементы карусели. */
  children?: ItemElement | ItemElement[];

  /** Настройки размера элемента карусели. */
  itemSize?: ItemSize;

  /** Сработает при попадании карусели во viewport. */
  onInViewport?: () => void;

  /** Сработает при попадании карусели в область достаточно близкую к viewport'у. */
  onNeedRequest?: () => void;

  /** Нужно ли показывать всплывающую карточку при наведении на элемент карусели. */
  withHoverCard?: boolean;
}

const cx = classnames.bind(styles);

const getSizeClasses = (size = {}) => [
  `size-xs-${(size as any).xs || 4}`,
  `size-s-${(size as any).s || 3}`,
  `size-m-${(size as any).m || 2}`,
  `size-l-${(size as any).l || 2}`,
  `size-xl-${(size as any).xl || 2}`,
];

/**
 * Карусель рекомендованных товаров.
 * @param props Свойства.
 * @return Элемент.
 */
export const ProductCarousel = ({
  className,
  itemSize,
  onInViewport,
  onNeedRequest,
  withHoverCard,
  children,
}: ProductCarouselProps) => {
  const layer = useLayer();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const cardShow = useAllowFlag();
  const needBigArrows = useMedia('(min-width: 1600px)');
  const rootRef = useRef<HTMLDivElement>(null);
  const targetItemRef = useRef<HTMLDivElement | null>(null);

  let items: ItemElement[];

  if (Array.isArray(children)) {
    items = children;
  } else {
    items = children ? [children] : [];
  }

  // вычисляем ширину элемента карусели для позиционирования стрелок
  const itemWidth = useChildWidth(rootRef, `.${cx('item')}`, [items.length]);

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
          renderItem={([item, index]: [ItemElement, number]) => (
            <div
              data-testid='product-carousel:item'
              className={cx('item', getSizeClasses(itemSize))}
              onMouseEnter={e => {
                if (cardShow.allowed()) {
                  targetItemRef.current = e.currentTarget;
                  setActiveItemIndex(index);
                }
              }}
            >
              {cloneElement(item, {
                children: Children.toArray(item.props.children).reduce<any[]>((list, child) => {
                  if (isValidElement(child)) {
                    child.type === Parts.Image &&
                      list.push(
                        withHoverCard ? cloneElement(child, { children: undefined }) : child,
                      );

                    child.type !== Parts.Footer && list.push(child);
                  }

                  return list;
                }, []),
              })}
            </div>
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
};
