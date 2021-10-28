import React, { Children, isValidElement, useEffect, useRef, useState } from 'react';
import { useViewport } from '../../../desktop/components/product-carousel/utils';
import { ProductSliderItem } from './item';
import { TouchSlider } from '@sima-land/ui-nucleons/touch-slider';
import { SliderContext } from './utils';

export interface ProductSliderProps {

  /** Товары. */
  children?: React.ReactNode;

  /** Функция, вызываемая при попадании компонента в поле видимости. */
  onInViewport?: () => void;

  /** Функция, инициализирующая загрузку рекомендаций. */
  onNeedRequest?: () => void;
}

export interface ProductSliderComponent {
  (props: ProductSliderProps): JSX.Element;
  Item: typeof ProductSliderItem
}

/**
 * Компонент мобильного слайдера рекомендованных товаров.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const ProductSlider: ProductSliderComponent = ({
  children,
  onInViewport,
  onNeedRequest,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(rootRef, onNeedRequest, {
    rootMargin: '200px 0px 200px 0px',
  });

  // сообщаем, когда компонент попадет в зону видимости
  useViewport(rootRef, onInViewport);

  // разрешаем загружать картинки только после монтирования
  useEffect(() => setMounted(true), []);

  return (
    <div ref={rootRef}>
      <TouchSlider>
        <SliderContext.Provider value={{ needLoadImages: mounted }}>
          {Children.toArray(children).filter(x => isValidElement(x) && x.type === ProductSliderItem)}
        </SliderContext.Provider>
      </TouchSlider>
    </div>
  );
};

ProductSlider.Item = ProductSliderItem;
