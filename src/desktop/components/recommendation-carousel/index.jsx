import React, { useRef } from 'react';
import { Carousel } from '@dev-dep/ui-nucleons/carousel';
import { RecommendedItem } from './item';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import PropTypes from 'prop-types';
import { useTooltip, useMedia, useViewport } from './utils';
import classnames from 'classnames/bind';
import styles from './recommendation-carousel.scss';

const cx = classnames.bind(styles);

/**
 * Компонент карусели рекомендованных товаров.
 * @param {Object} props Свойства компонента.
 * @param {string} props.title Заголовок карусели.
 * @param {string} [props.titleContainer='h2'] Элемент заголовка.
 * @param {Array} props.items Массив с рекомендованными товарами.
 * @param {Function} props.onItemClick Обработчик клика по товару.
 * @param {Function} props.onQuickViewClick Обработчик клика по кнопки быстрого просмотра.
 * @param {Function} props.onInViewport Функция, вызываемая при попадании компонента в поле видимости.
 * @param {Function} props.onRequest Функция, инициализирующая загрузку рекомендаций.
 * @param {string} props.className Дополнительные классы обертки.
 * @return {ReactElement} Компонент карусели рекомендаций.
 */
export const RecommendationCarousel = ({
  className,
  items,
  itemSize,
  onInViewport,
  onItemClick,
  onNeedRequest,
  onQuickViewClick,
  title,
  titleContainer: Header = 'h2',
}) => {
  const stubRef = useRef();
  const sectionRef = useRef();
  const tooltipRef = useRef();
  const tooltipControl = useTooltip(tooltipRef);
  const needBigArrows = useMedia('(min-width: 1440px)');

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(stubRef, onNeedRequest);

  // отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useViewport(sectionRef, onInViewport, {
    rootMargin: '200px 0px 200px 0px',
  });

  return isNonEmptyArray(items)
    ? (
      <section
        className={cx('wrapper', className)}
        ref={sectionRef}
      >
        <Header className={cx('title')}>{title}</Header>
        <Carousel
          items={items}
          controlProps={{ size: needBigArrows ? 'l' : 's' }}
          renderItem={(item, key) => (
            <RecommendedItem
              {...item}
              key={key}
              size={itemSize}
              onClick={() => onItemClick && onItemClick(item)}
              quickViewButtonProps={{
                ...tooltipControl,
                onClick: () => onQuickViewClick && onQuickViewClick(item),
              }}
            />
          )}
        />
        <div ref={tooltipRef} className={cx('tooltip')}>
          Быстрый просмотр
        </div>
      </section>
    )
    : <div ref={stubRef} />;
};

RecommendationCarousel.propTypes = {
  /**
   * Заголовок карусели.
   */
  title: PropTypes.string,

  /**
   * Элемент заголовка.
   */
  titleContainer: PropTypes.string,

  /**
   * Массив элементов карусели.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.number,
    currencyGrapheme: PropTypes.string,
    oldPrice: PropTypes.number,
  })),

  /**
   * Обработчик клика на элементе карусели.
   */
  onItemClick: PropTypes.func,

  /**
   * Обработчик клика на кнопку быстрого просмотра.
   */
  onQuickViewClick: PropTypes.func,

  /**
   * Функция, будет вызвана при попадании карусели во вьюпорт.
   */
  onInViewport: PropTypes.func,

  /**
   * Функция для получения элементов карусели, будет вызвана при приближении карусели к вьюпорту.
   */
  onNeedRequest: PropTypes.func,

  /**
   * Дополнительные классы обертки.
   */
  className: PropTypes.string,
};
