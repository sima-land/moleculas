import React, { useEffect, useRef, useState } from 'react';
import { TouchSlider } from '@sima-land/ui-nucleons/touch-slider';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import RecommendedItem from './recommended-item';
import withInViewportObserver from '@sima-land/ui-nucleons/with-in-viewport-observer';
import classes from './recommendation-slider.module.scss';
import classnames from 'classnames/bind';
import isFunction from 'lodash/isFunction';
import { Text } from '@sima-land/ui-nucleons/text';

const cx = classnames.bind(classes);

/**
 * Компонент обертки мобильного слайдера рекомендованных товаров.
 * @param props Свойства компонента.
 * @param props.title Заголовок слайдера.
 * @param props.items Массив с рекомендованными товарами.
 * @param props.onItemClick Обработчик клика по товару.
 * @param props.onInViewport Функция, вызываемая при попадании компонента в поле видимости.
 * @param props.addObserve Функция подписки на Intersection Observer.
 * @param props.addObserveWithMargin Функция подписки на Intersection Observer.
 * @return Элемент.
 */
export const RecommendationWrapper = ({
  title,
  items,
  onItemClick,
  onInViewport,
  addObserve,
  addObserveWithMargin,
}: any) => {
  const rootRef = useRef(null);
  const [canLoadImages, setCanLoadImages] = useState(false);
  const [needLoadImages, setNeedLoadImages] = useState(false);

  // Устанавливаем возможность начала загрузки изображений, когда компонент почти попал в зону видимости
  useEffect(() => {
    isFunction(addObserveWithMargin)
      && rootRef.current
      && addObserveWithMargin(rootRef.current, () => setCanLoadImages(true));
  }, []);

  // Отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useEffect(() => {
    isFunction(addObserve)
      && isFunction(onInViewport)
      && rootRef.current
      && addObserve(rootRef.current, onInViewport);
  }, []);

  // разрешаем загружать картинки только после монтирования
  useEffect(() => {
    setNeedLoadImages(true);
  }, []);

  return (
    <div className={cx('wrapper')} ref={rootRef}>
      <MobileLayout>
        <Text
          size={20}
          weight={500}
          element='h4'
          children={title}
          lineHeight={28}
        />
      </MobileLayout>
      <TouchSlider>
        {Array.isArray(items) && items.length > 0 && items.map((item, index) => (
          <RecommendedItem
            key={index}
            onItemClick={() => isFunction(onItemClick) && onItemClick(item)}
            needLoadImage={needLoadImages}
            canLoadImage={canLoadImages}
            {...item}
          />
        ))}
      </TouchSlider>
    </div>
  );
};

export default withInViewportObserver(
  withInViewportObserver(RecommendationWrapper), {
    rootMargin: '200px 0px 200px 0px',
  }, 'addObserveWithMargin'
);
