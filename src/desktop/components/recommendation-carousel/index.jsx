import React, { useRef } from 'react';
import { Carousel } from '@dev-dep/ui-nucleons/carousel';
import { ProductInfo } from './product-info';
import { HoverCard } from './hover-card';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import { useAllowFlag, useMedia, useViewport } from './utils';
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
  onItemFavoriteClick,
  onItemQuickViewClick,
  onItemSubtract,
  onNeedRequest,
  title,
  titleTag: Header = 'h2',
}) => {
  const stubRef = useRef();
  const sectionRef = useRef();
  const needBigArrows = useMedia('(min-width: 1440px)');
  const cardShow = useAllowFlag();
  const cardControlRef = useRef();

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(stubRef, onNeedRequest);

  // отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useViewport(sectionRef, onInViewport, {
    rootMargin: '200px 0px 200px 0px',
  });

  return isNonEmptyArray(items)
    ? (
      <section
        className={cx('root', className)}
        ref={sectionRef}
      >
        <Header className={cx('title')}>{title}</Header>

        <Carousel
          step={3} // по гайдам
          draggable={false} // по гайдам
          items={items}
          controlProps={{
            size: needBigArrows ? 'l' : 's', // по гайдам
            style: { zIndex: 1 }, // чтобы были над HoverCard
          }}
          renderItem={(item, key) => (
            <div
              key={key}
              data-testid='reco-item'
              className={cx('item', getSizeClasses(itemSize))}
              onMouseEnter={e => {
                cardShow.allowed()
                  && cardControlRef.current
                  && cardControlRef.current.show(item, e.currentTarget);
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

        <HoverCard
          controlRef={cardControlRef}
          onQuickViewClick={onItemQuickViewClick}
          onFavoriteClick={onItemFavoriteClick}
          onAdd={onItemAdd}
          onSubtract={onItemSubtract}
          onChange={onItemChange}
        />
      </section>
    )
    : <div ref={stubRef} />;
};
