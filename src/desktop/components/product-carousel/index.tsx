import React, { Children, isValidElement, useRef, useState } from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { HoverCard, HoverCardProps } from './hover-card';
import { useAllowFlag, useChildWidth, useViewport } from './utils';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import classnames from 'classnames/bind';
import styles from './product-carousel.module.scss';

interface ItemSize {
  xs?: 2 | 3 | 4;
  s?: 2 | 3 | 4;
  m?: 2 | 3 | 4;
  l?: 2 | 3 | 4;
  xl?: 2 | 3 | 4;
}

export interface ProductCarouselProps {

  /** CSS-класс для корневого элемента. */
  className?: string;

  /** Элементы карусели. */
  children?: React.ReactNode;

  /** Найстройки размера элемента карусели. */
  itemSize?: ItemSize;

  /** Сработает при попадании карусели во viewport. */
  onInViewport?: () => void;

  /** Сработает при попадании карусели в область достаточно близкую к viewport'у. */
  onNeedRequest?: () => void;

  /** Нужно ли показывать всплывающую карточку при наведении на элемент карусели. */
  withHoverCard?: boolean;
}

type CarouselItemProps = ProductInfoProps & Pick<HoverCardProps, 'renderCartControl' | 'onQuickViewClick'>;

const cx = classnames.bind(styles);

const getSizeClasses = (size = {}) => [
  `size-xs-${(size as any).xs || 4}`,
  `size-s-${(size as any).s || 3}`,
  `size-m-${(size as any).m || 2}`,
  `size-l-${(size as any).l || 2}`,
  `size-xl-${(size as any).xl || 2}`,
];

/**
 * Компонент для проброса данных элемента карусели в компонент карусели.
 * Экспериментальный вариант.
 * @return Null.
 */
const Item: (props: CarouselItemProps) => null = () => null;

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
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const cardShow = useAllowFlag();
  const needBigArrows = useMedia('(min-width: 1600px)');
  const sectionRef = useRef<HTMLDivElement>(null);
  const stubRef = useRef<HTMLDivElement>(null);
  const targetItemRef = useRef<HTMLDivElement | null>(null);

  const items = Children.toArray(children).reduce<CarouselItemProps[]>((acc, item) => {
    isValidElement(item) && item.type === Item && acc.push(item.props);
    return acc;
  }, []);

  // вычисляем ширину элемента карусели для позиционирования стрелок
  const itemWidth = useChildWidth(sectionRef, `.${cx('item')}`, []);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(stubRef, onNeedRequest, {
    rootMargin: '200px 0px 200px 0px',
  });

  // отправляем статистку, когда компонент попадает в зону видимости
  useViewport(sectionRef, onInViewport);

  return Array.isArray(items) && items.length > 0
    ? (
      <div ref={sectionRef} className={cx('root', className)}>
        <Carousel
          step={3}
          draggable={false}

          // докидываем индекс чтобы позже брать актуальные данные из списка по нему
          items={items.map((item, index) => [item, index])}

          {...(itemWidth !== null && {
            withControls: true,
            controlProps: {
              size: needBigArrows ? 'l' : 's',
              style: {
                zIndex: 1,
                top: `${itemWidth / 2}px`,
              },
            },
          })}

          renderItem={([item, index]: [CarouselItemProps, number]) => (
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
              <ProductInfo
                data={item.data}
                onLinkClick={item.onLinkClick}
              />
            </div>
          )}

          // длительность прокрутки в Carousel - 320, делаем слегка с запасом
          // @todo после восстановления проверить позицию курсора чтобы показать карточку (если будет критично)
          onChangeTargetIndex={() => cardShow.disallowFor(360)}
        />

        {/* ВАЖНО: чтобы размонтировать всплывающую карточку строго каждый раз используем массив и key */}
        {withHoverCard && activeItemIndex !== null && [items[activeItemIndex]].map(item => (
          <HoverCard
            key={activeItemIndex}
            targetRef={targetItemRef}
            onMouseLeave={() => setActiveItemIndex(null)}

            // данные элемента карусели
            data={item.data}
            onLinkClick={item.onLinkClick}
            onQuickViewClick={item.onQuickViewClick}
            renderCartControl={item.renderCartControl}
          />
        ))}
      </div>
    ) : (
      <div ref={stubRef} />
    );
};

ProductCarousel.Item = Item;
