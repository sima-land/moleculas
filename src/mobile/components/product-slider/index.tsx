import { Children, isValidElement, ReactElement, useMemo, useRef } from 'react';
import { useIntersection } from '@sima-land/ui-nucleons/hooks/intersection';
import { TouchSlider } from '@sima-land/ui-nucleons/touch-slider';
import { ProductInfo, ProductInfoProps, Parts } from '../../../common/components/product-info';
import styles from './product-slider.module.scss';

export type ItemElement = ReactElement<ProductInfoProps, typeof ProductInfo>;

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
  const options = useMemo(() => ({ rootMargin: '200px 0px 200px 0px' }), []);
  useIntersection(
    rootRef,
    entry => {
      entry.isIntersecting && onNeedRequest?.();
    },
    options,
  );

  // сообщаем, когда компонент попадет в зону видимости
  useIntersection(rootRef, entry => {
    entry.isIntersecting && onInViewport?.();
  });

  return (
    <div ref={rootRef} data-testid='product-slider:root'>
      <TouchSlider>
        <Parts.FooterContext.Provider value={{ className: styles.footer }}>
          {Children.toArray(children).reduce<ReactElement[]>((list, item) => {
            isValidElement(item) &&
              item.type === ProductInfo &&
              list.push(
                <div key={item.key} className={styles.item} data-testid='product-slider:item'>
                  {item}
                </div>,
              );

            return list;
          }, [])}
        </Parts.FooterContext.Provider>
      </TouchSlider>
    </div>
  );
};
