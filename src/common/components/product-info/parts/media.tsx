import type { CSSProperties, HTMLAttributes } from 'react';
import type { ProductImageStyle } from '../../product-image/types';
import classNames from 'classnames';
import styles from './media.m.scss';

export interface ProductInfoMediaStyle extends CSSProperties {
  '--product-info-media-ratio'?: string;
}

export interface ProductInfoMediaProps extends HTMLAttributes<HTMLDivElement> {
  /** Включено ли фиксированное соотношение сторон. */
  aspectRatio?: boolean;

  /** Стили. */
  style?: ProductInfoMediaStyle & ProductImageStyle;
}

/**
 * Слот для вывода медиа-файлов товара.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoMedia({
  aspectRatio = true,
  children,
  className,
  ...restProps
}: ProductInfoMediaProps) {
  return (
    <div {...restProps} className={classNames(styles.root, aspectRatio && styles.ratio, className)}>
      {children}
    </div>
  );
}
