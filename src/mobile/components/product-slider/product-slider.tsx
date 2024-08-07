import { Children, CSSProperties, isValidElement, ReactElement, useMemo, useRef } from 'react';
import { useIntersection } from '@sima-land/ui-nucleons/hooks';
import { TouchSlider } from '@sima-land/ui-nucleons/touch-slider';
import { ProductInfo, ProductInfoProps, Parts } from '../../../common/components/product-info';
import classNames from 'classnames';
import styles from './product-slider.m.scss';

export type ItemElement = ReactElement<ProductInfoProps, typeof ProductInfo>;

export interface ProductSliderProps {
  /** Товары. */
  children?: ItemElement | ItemElement[];

  /** Функция, вызываемая при попадании компонента в поле видимости. */
  onInViewport?: () => void;

  /** Функция, инициализирующая загрузку рекомендаций. */
  onNeedRequest?: () => void;

  /** Предоставит свойства для элемента . */
  itemProps?: { style?: CSSProperties; className?: string };
}

/**
 * Слайдер товаров.
 * @param props Свойства.
 * @return Элемент.
 */
export const ProductSlider = ({
  children,
  onInViewport,
  onNeedRequest,
  itemProps,
}: ProductSliderProps) => {
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
                <div
                  key={item.key}
                  data-testid='product-slider:item'
                  {...itemProps}
                  className={classNames(styles.item, itemProps?.className)}
                >
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
