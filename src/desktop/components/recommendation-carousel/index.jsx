import React, { useRef, useState } from 'react';
import { Carousel } from '@dev-dep/ui-nucleons/carousel';
import { ProductInfo } from './product-info';
import { HoverCard } from './hover-card';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import { useAllowFlag, useChildWidth, useViewport } from './utils';
import { useMedia } from '@dev-dep/ui-nucleons/hooks/media';
import classnames from 'classnames/bind';
import styles from './recommendation-carousel.scss';

const cx = classnames.bind(styles);

// eslint-disable-next-line require-jsdoc
const getSizeClasses = (size = {}) => [
  `size-xs-${size.xs || 4}`,
  `size-s-${size.s || 3}`,
  `size-m-${size.m || 2}`,
  `size-l-${size.l || 2}`,
  `size-xl-${size.xl || 2}`,
];

/**
 * Карусель рекомендованных товаров.
 * @param {Object} props Свойства.
 * @return {ReactElement} Элемент.
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
  title,
  titleTag: Header = 'h2',
}) => {
  const [activeItem, setActiveItem] = useState(null);
  const cardShow = useAllowFlag();
  const needBigArrows = useMedia('(min-width: 1440px)');
  const sectionRef = useRef();
  const stubRef = useRef();
  const targetItemRef = useRef();

  // вычисляем ширину элемента карусели для позиционирования стрелок
  const itemWidth = useChildWidth(sectionRef, `.${cx('item')}`, [items]);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(stubRef, onNeedRequest);

  // отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useViewport(sectionRef, onInViewport, {
    rootMargin: '200px 0px 200px 0px',
  });

  return isNonEmptyArray(items)
    ? (
      <section ref={sectionRef} className={cx('root', className)}>
        <Header className={cx('title')}>{title}</Header>

        <Carousel
          step={3}
          draggable={false}
          items={items}
          withControls={itemWidth !== null}
          controlProps={{
            size: needBigArrows ? 'l' : 's',
            style: {
              zIndex: 1, // чтобы были над HoverCard
              top: `${itemWidth / 2}px`,
            },
          }}
          renderItem={(item, key) => (
            <div
              key={key}
              data-testid='reco-item'
              className={cx('item', getSizeClasses(itemSize))}
              onMouseEnter={e => {
                if (cardShow.allowed()) {
                  targetItemRef.current = e.currentTarget;
                  setActiveItem(item);
                }
              }}
            >
              <ProductInfo {...item} />
            </div>
          )}

          // длительность прокрутки в Carousel - 320, делаем слегка с запасом
          // @todo после восстановления проверить позицию курсора чтобы показать карточку (если будет критично)
          onChangeTargetIndex={() => {
            cardShow.disallowFor(360);
          }}
        />

        {activeItem && (
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
    : <div ref={stubRef} />;
};
