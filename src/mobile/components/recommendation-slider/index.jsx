import React, { useEffect, useRef } from 'react';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import withInViewportObserver from '@dev-dep/ui-nucleons/with-in-viewport-observer';
import isFunction from 'lodash/isFunction';
import RecommendationWrapper from './recommendation-wrapper';
import Types from 'prop-types';

/**
 * Компонент мобильного слайдера рекомендованных товаров.
 * @param {Object} props Свойства компонента.
 * @param {string} props.title Заголовок слайдера.
 * @param {Array} props.items Массив с рекомендованными товарами.
 * @param {Function} props.onItemClick Обработчик клика по товару.
 * @param {Function} props.onInViewport Функция, вызываемая при попадании компонента в поле видимости.
 * @param {Function} props.onRequest Функция, инициализирующая загрузку рекомендаций.
 * @param {Function} props.addObserve Функция подписки на Intersection Observer.
 * Функция подписки на Intersection Observer с увеличенным пределом попадания в область видимости.
 * @return {ReactElement} Компонент карусели рекомендаций.
 */
export const RecommendationSlider = ({
  title,
  items,
  onItemClick,
  onInViewport,
  onRequest,
  addObserve,
}) => {
  const emptyRef = useRef(null);

  // Инициируем загрузку данных, когда компонент почти попал в зону видимости
  useEffect(() => {
    isFunction(addObserve)
    && isFunction(onRequest)
    && emptyRef.current
    && addObserve(emptyRef.current, onRequest);
  }, [emptyRef.current]);

  return isNonEmptyArray(items) ? (
    <RecommendationWrapper
      title={title}
      items={items}
      onInViewport={onInViewport}
      onItemClick={onItemClick}
    />
  ) : (
    <div ref={emptyRef} />
  );
};

export default withInViewportObserver(RecommendationSlider, {
  rootMargin: '200px 0px 200px 0px',
});

RecommendationSlider.propTypes = {
  /**
   * Заголовок слайдера.
   */
  title: Types.string,

  /**
   * Массив элементов слайдера.
   */
  items: Types.arrayOf(Types.shape({
    name: Types.string,
    imageSrc: Types.string,
    imageAlt: Types.string,
    url: Types.string,
    price: Types.number,
    currencyGrapheme: Types.string,
    onQuickViewClick: Types.func,
    oldPrice: Types.number,
  })),

  /**
   * Обработчик клика на элементе слайдера.
   */
  onItemClick: Types.func,

  /**
   * Функция, будет вызвана при попадании карусели во вьюпорт.
   */
  onInViewport: Types.func,

  /**
   * Функция для получения элементов слайдера, будет вызвана при приближении слайдера к вьюпорту.
   */
  onRequest: Types.func,

  /**
   * Функция подписки на Intersection Observer, предоставляется HOC'ом.
   */
  addObserve: Types.func,
};
