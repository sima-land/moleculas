import React, { useRef, useEffect } from 'react';
import { Carousel } from '@dev-dep/ui-nucleons/carousel';
import RecommendedItem from './recommended-item';
import { ArrowButton } from '@dev-dep/ui-nucleons/arrow-button';
import withInViewportObserver from '@dev-dep/ui-nucleons/with-in-viewport-observer';
import isFunction from 'lodash/isFunction';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import classes from './recommendation-carousel.scss';
import classnames from 'classnames/bind';
import Types from 'prop-types';
import { useControlTooltip } from './helpers';

const cx = classnames.bind(classes);

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
 * @param {Function} props.addObserve Функция подписки на Intersection Observer.
 * @param {Function} props.addObserveWithMargin
 * Функция подписки на Intersection Observer с увеличенным пределом попадания в область видимости.
 * @param {string} props.wrapperClass Дополнительные классы обертки.
 * @return {ReactElement} Компонент карусели рекомендаций.
 */
export const RecommendationCarousel = ({
  title,
  titleContainer: Header = 'h2',
  items,
  onItemClick,
  onQuickViewClick,
  onInViewport,
  onRequest,
  addObserve,
  addObserveWithMargin,
  wrapperClass,
}) => {
  const sectionRef = useRef();
  const emptyRef = useRef();

  const { tooltipRef, onHoverQuickViewButton, onLeaveQuickViewButton } = useControlTooltip();

  // Отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useEffect(() => {
    isFunction(addObserve)
    && isFunction(onInViewport)
    && sectionRef.current
    && addObserve(sectionRef.current, onInViewport);
  }, [sectionRef.current]);

  // Инициируем загрузку данных, когда компонент почти попал в зону видимости
  useEffect(() => {
    isFunction(addObserveWithMargin)
    && isFunction(onRequest)
    && emptyRef.current
    && addObserveWithMargin(emptyRef.current, onRequest);
  }, [emptyRef.current]);

  return isNonEmptyArray(items)
    ? (
      <section
        className={cx('wrapper', wrapperClass)}
        ref={sectionRef}
      >
        <Header className={cx('title')}>{title}</Header>
        <Carousel
          items={items}
          renderItem={(item, key) => (
            <RecommendedItem
              {...item}
              onItemClick={() => isFunction(onItemClick) && onItemClick(item)}
              onQuickViewClick={() => isFunction(onQuickViewClick) && onQuickViewClick(item)}
              onHoverQuickViewButton={onHoverQuickViewButton}
              onLeaveQuickViewButton={onLeaveQuickViewButton}
              key={key}
            />
          )}
          renderControl={({ type, onUse }) => (
            <ArrowButton
              direction={type === 'backward' ? 'left' : 'right'}
              aria-label={type === 'backward' ? 'назад' : 'вперед'}
              className={cx(
                'control',
                (type === 'backward') && 'backward'
              )}
              onClick={onUse}
            />
          )}
        />
        <div className={cx('tooltip')} ref={tooltipRef}>
          Быстрый просмотр
        </div>
      </section>
    )
    : <div ref={emptyRef}></div>;
};

RecommendationCarousel.propTypes = {
  /**
   * Заголовок карусели.
   */
  title: Types.string,

  /**
   * Элемент заголовка.
   */
  titleContainer: Types.string,

  /**
   * Массив элементов карусели.
   */
  items: Types.arrayOf(Types.shape({
    name: Types.string,
    imageSrc: Types.string,
    imageAlt: Types.string,
    url: Types.string,
    price: Types.number,
    currencyGrapheme: Types.string,
    oldPrice: Types.number,
  })),

  /**
   * Обработчик клика на элементе карусели.
   */
  onItemClick: Types.func,

  /**
   * Обработчик клика на кнопку быстрого просмотра.
   */
  onQuickViewClick: Types.func,

  /**
   * Функция, будет вызвана при попадании карусели во вьюпорт.
   */
  onInViewport: Types.func,

  /**
   * Функция для получения элементов карусели, будет вызвана при приближении карусели к вьюпорту.
   */
  onRequest: Types.func,

  /**
   * Функция подписки на Intersection Observer, предоставляется HOC'ом.
   */
  addObserve: Types.func,

  /**
   * Функция подписки на Intersection Observer, предоставляется HOC'ом.
   */
  addObserveWithMargin: Types.func,

  /**
   * Дополнительные классы обертки.
   */
  wrapperClass: Types.string,
};

export default withInViewportObserver(
  withInViewportObserver(RecommendationCarousel), {
    rootMargin: '200px 0px 200px 0px',
  }, 'addObserveWithMargin'
);
