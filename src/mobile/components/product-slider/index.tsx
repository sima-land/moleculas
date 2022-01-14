import React, { Children, isValidElement, useRef } from 'react';
import { useViewport } from '../../../desktop/components/product-carousel/utils';
import { TouchSlider } from '@sima-land/ui-nucleons/touch-slider';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import styles from './product-slider.module.scss';

export type ItemElement = React.ReactElement<ProductInfoProps, typeof ProductInfo>;

export interface ProductSliderProps {
  /** Товары. */
  children?: ItemElement | ItemElement[];

  /** Функция, вызываемая при попадании компонента в поле видимости. */
  onInViewport?: () => void;

  /** Функция, инициализирующая загрузку рекомендаций. */
  onNeedRequest?: () => void;
}

/**
 * Слайдер товаров.
 * @param props Свойства.
 * @return Элемент.
 */
export const ProductSlider = ({ children, onInViewport, onNeedRequest }: ProductSliderProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  // инициируем загрузку данных, когда компонент почти попал в зону видимости
  useViewport(rootRef, onNeedRequest, {
    rootMargin: '200px 0px 200px 0px',
  });

  // сообщаем, когда компонент попадет в зону видимости
  useViewport(rootRef, onInViewport);

  return (
    <div ref={rootRef}>
      <TouchSlider>
        {Children.toArray(children).reduce<React.ReactElement[]>((list, item) => {
          isValidElement(item) &&
            item.type === ProductInfo &&
            list.push(
              <div key={item.key} className={styles.item}>
                {item}
              </div>,
            );

          return list;
        }, [])}
      </TouchSlider>
    </div>
  );
};
