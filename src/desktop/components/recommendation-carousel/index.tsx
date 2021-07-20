import React, { useRef, useState } from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { ProductInfo } from './product-info';
import { HoverCard, HoverCardProps } from './hover-card';
import { useAllowFlag, useChildWidth, useViewport } from './utils';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { CarouselItem } from './types';
import classnames from 'classnames/bind';
import styles from './recommendation-carousel.module.scss';

interface ItemSize {
  xs?: 2 | 3 | 4
  s?: 2 | 3 | 4
  m?: 2 | 3 | 4
  l?: 2 | 3 | 4
  xl?: 2 | 3 | 4
}

export interface RecommendationCarouselProps {
  className?: string
  items: CarouselItem[]
  itemSize?: ItemSize
  onInViewport?: () => void
  onItemAdd?: HoverCardProps['onAdd']
  onItemChange?: HoverCardProps['onChange']
  onItemQuickViewClick?: HoverCardProps['onQuickViewClick']
  onItemSubtract?: HoverCardProps['onSubtract']
  onNeedRequest?: () => void
  withHoverCard?: boolean
  title?: string
  titleTag?: 'div' | 'header' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const cx = classnames.bind(styles);

// eslint-disable-next-line require-jsdoc
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
export const RecommendationCarousel = ({
  className,
  items,
  itemSize,
  onInViewport,
  onItemAdd,
  onItemChange,
  onItemQuickViewClick,
  onItemSubtract,
  onNeedRequest,
  withHoverCard,
  title,
  titleTag: Header = 'h2',
}: RecommendationCarouselProps) => {
  const [activeItem, setActiveItem] = useState<CarouselItem | null>(null);
  const cardShow = useAllowFlag();
  const needBigArrows = useMedia('(min-width: 1440px)');
  const sectionRef = useRef<HTMLElement | null>(null);
  const stubRef = useRef<HTMLDivElement | null>(null);
  const targetItemRef = useRef<HTMLDivElement | null>(null);

  // вычисляем ширину элемента карусели для позиционирования стрелок
  const itemWidth = useChildWidth(sectionRef, `.${cx('item')}`, [items]);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(stubRef, onNeedRequest);

  // отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useViewport(sectionRef, onInViewport, {
    rootMargin: '200px 0px 200px 0px',
  });

  return Array.isArray(items) && items.length > 0
    ? (
      <section ref={sectionRef} className={cx('root', className)}>
        <Header className={cx('title')}>{title}</Header>

        <Carousel step={3}
          draggable={false}
          items={items}
          withControls={itemWidth !== null}
          controlProps={{
            size: needBigArrows ? 'l' : 's',
            style: {
              zIndex: 1,

              // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
              top: `${itemWidth / 2}px`,
            },
          }}
          renderItem={(item: CarouselItem) => (
            <div
              data-testid='reco-item'
              className={cx('item', getSizeClasses(itemSize))}
              onMouseEnter={e => {
                if (cardShow.allowed()) {
                  targetItemRef.current = e.currentTarget;
                  setActiveItem(item);
                }
              }}
            >
              <ProductInfo {...item.product} withQuickView={false} />
            </div>
          )}

          // длительность прокрутки в Carousel - 320, делаем слегка с запасом
          // @todo после восстановления проверить позицию курсора чтобы показать карточку (если будет критично)
          onChangeTargetIndex={() => {
            cardShow.disallowFor(360);
          }}
        />

        {withHoverCard && activeItem && (
          <HoverCard
            info={activeItem}
            targetRef={targetItemRef}
            onQuickViewClick={onItemQuickViewClick}
            onAdd={onItemAdd}
            onSubtract={onItemSubtract}
            onChange={onItemChange}
            onMouseLeave={() => setActiveItem(null)}
          />
        )}
      </section>
    )
    : (
      <div ref={stubRef} />
    );
};
