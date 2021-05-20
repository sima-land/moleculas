import React, { useEffect, useRef } from 'react';
import withInViewportObserver from '@dev-dep/ui-nucleons/with-in-viewport-observer';
import isFunction from 'lodash/isFunction';
import RecommendationWrapper from './recommendation-wrapper';

interface Item {
  name?: string
  imageSrc?: string
  imageAlt?: string
  url?: string
  price?: number
  currencyGrapheme?: string
  onQuickViewClick?: (...args: any[]) => any
  oldPrice?: number
}

export interface RecommendationSliderProps {
  title?: string;
  items?: Item[];
  onItemClick?: (item: Item) => any;
  onInViewport?: () => void;
  onRequest?: () => void;
  addObserve?: (...args: any[]) => any;
}

/**
 * Компонент мобильного слайдера рекомендованных товаров.
 * @param props Свойства компонента.
 * @param props.title Заголовок слайдера.
 * @param props.items Массив с рекомендованными товарами.
 * @param props.onItemClick Обработчик клика по товару.
 * @param props.onInViewport Функция, вызываемая при попадании компонента в поле видимости.
 * @param props.onRequest Функция, инициализирующая загрузку рекомендаций.
 * @param props.addObserve Функция подписки на Intersection Observer.
 * @return Компонент карусели рекомендаций.
 */
export const RecommendationSlider = ({
  title,
  items,
  onItemClick,
  onInViewport,
  onRequest,
  addObserve,
}: RecommendationSliderProps) => {
  const emptyRef = useRef<HTMLDivElement>(null);

  // Инициируем загрузку данных, когда компонент почти попал в зону видимости
  useEffect(() => {
    isFunction(addObserve)
    && isFunction(onRequest)
    && emptyRef.current
    && addObserve(emptyRef.current, onRequest);
  }, [emptyRef.current]);

  return Array.isArray(items) && items.length > 0 ? (
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
