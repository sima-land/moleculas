import React, { useEffect, useRef, useState } from 'react';
import TouchSlider from '@dev-dep/ui-nucleons/touch-slider';
import MobileLayout from '@dev-dep/ui-nucleons/layout/mobile-layout';
import RecommendedItem from './recommended-item';
import withInViewportObserver from '@dev-dep/ui-nucleons/with-in-viewport-observer';
import classes from './recommendation-slider.scss';
import classnames from 'classnames/bind';
import isFunction from 'lodash/isFunction';
import Text from '@dev-dep/ui-nucleons/text';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';

const cx = classnames.bind(classes);

/**
 * Компонент обертки мобильного слайдера рекомендованных товаров.
 * @param {Object} props Свойства компонента.
 * @param {string} props.title Заголовок слайдера.
 * @param {Array} props.items Массив с рекомендованными товарами.
 * @param {Function} props.onItemClick Обработчик клика по товару.
 * @param {Function} props.onInViewport Функция, вызываемая при попадании компонента в поле видимости.
 * @param {Function} props.addObserve Функция подписки на Intersection Observer.
 * @param {Function} props.addObserveWithMargin
 * Функция подписки на Intersection Observer с увеличенным пределом попадания в область видимости.
 * @return {ReactElement} Компонент обертки карусели рекомендаций.
 */
export const RecommendationWrapper = ({
  title,
  items,
  onItemClick,
  onInViewport,
  addObserve,
  addObserveWithMargin,
}) => {
  const sliderRef = useRef(null);
  const [canLoadImages, setCanLoadImages] = useState(false);
  const [needLoadImages, setNeedLoadImages] = useState(false);

  // Устанавливаем возможность начала загрузки изображений, когда компонент почти попал в зону видимости
  useEffect(() => {
    isFunction(addObserveWithMargin)
        && sliderRef.current
        && addObserveWithMargin(sliderRef.current, () => setCanLoadImages(true));
  }, [sliderRef.current]);

  // Отправляем статистку в ОКО, когда компонент попадает в зону видимости
  useEffect(() => {
    isFunction(addObserve)
        && isFunction(onInViewport)
        && sliderRef.current
        && addObserve(sliderRef.current, onInViewport);
  }, [sliderRef.current]);

  return (
    <div className={cx('wrapper')} ref={sliderRef}>
      <MobileLayout>
        <Text
          size={20}
          weight={500}
          element='h4'
          children={title}
          lineHeight={28}
        />
      </MobileLayout>
      <TouchSlider
        layoutProps={{
          containerProps: {
            onTouchStart: () => setNeedLoadImages(true),
          },
        }}
      >
        {isNonEmptyArray(items) && items.map((item, index) => (
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
