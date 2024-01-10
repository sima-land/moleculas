import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import type { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';

/** Допустимое содержимое компонента ProductCard. */
export type ProductCardChildren = ReactElement<ProductInfoProps, typeof ProductInfo>;

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Содержимое. */
  children: ProductCardChildren;

  /** Получив содержимое должен вернуть то что будет выведено без наведения. */
  reduceBaseInfo?: (children: ProductCardChildren) => ReactNode;

  /** Получив содержимое должен вернуть то что будет выведено во всплывающей карточке. */
  reduceHoverInfo?: (children: ProductCardChildren) => ReactNode;
}

/** Опции фильтрации содержимого карточки без наведения. */
export interface ReduceBaseInfoOptions {
  /** Надо ли скрыть кнопки на картинке. При передаче функции она будет применена для каждого дочернего элемента внутри картинки как фильтр. */
  hideImageButtons?: boolean | ((element: ReactNode) => boolean);

  /** Надо ли скрыть футер. */
  hideFooter?: boolean;
}
