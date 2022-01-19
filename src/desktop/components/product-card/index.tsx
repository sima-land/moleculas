import React, { Children, forwardRef, isValidElement, cloneElement, useState } from 'react';
import { ProductInfo, ProductInfoProps, Parts } from '../../../common/components/product-info';
import { Plate, PlateProps } from '@sima-land/ui-nucleons/plate';
import { useLayer } from '@sima-land/ui-nucleons/helpers/layer';
import cn from 'classnames';
import styles from './product-card.module.scss';

export type ProductCardChildren = React.ReactElement<ProductInfoProps, typeof ProductInfo>;

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ProductCardChildren;
}

export const HoverCard = forwardRef<HTMLDivElement | null, PlateProps>((props, ref) => {
  const layer = useLayer() + 1;

  return (
    <Plate
      {...props}
      style={{ ...props.style, zIndex: layer }}
      ref={ref}
      rounds='m'
      shadow='z4'
      className={cn(styles.card, props.className)}
      data-testid='product-card:hover-card'
    />
  );
});

export const ProductCard = ({ children, className, ...props }: ProductCardProps) => {
  const [hovered, toggle] = useState<boolean>(false);

  return (
    <div {...props} data-testid='product-card' className={cn(styles.root, className)}>
      <div data-testid='product-card:info' onMouseEnter={() => toggle(true)}>
        {reduceBaseInfo(children)}
      </div>

      {hovered && (
        <HoverCard onMouseLeave={() => toggle(false)}>{reduceHoverInfo(children)}</HoverCard>
      )}
    </div>
  );
};

/**
 * Фильтрует содержимое карточки для вывода состояния без наведения.
 * @param el Элемент.
 * @return Элемент.
 */
export const reduceBaseInfo = (el: ProductCardChildren) =>
  cloneElement(el, {
    children: Children.map(el.props.children, child => {
      let result;

      if (isValidElement(child)) {
        switch (child.type) {
          // игнорируем кнопки-иконки на изображении
          case Parts.Image:
            result = cloneElement<any>(child, { children: undefined });
            break;

          // игнорируем футер
          case Parts.Footer:
            result = null;
            break;

          // остальное оставляем без изменений
          default:
            result = child;
            break;
        }
      }

      return result;
    }),
  });

export const reduceHoverInfo = (el: ProductCardChildren) =>
  cloneElement(el, {
    // при наведении у изображения строго непрозрачность = 1
    children: Children.map(el.props.children, child =>
      isValidElement(child) && child.type === Parts.Image
        ? cloneElement(child, { opacity: 1 })
        : child,
    ),
  });
