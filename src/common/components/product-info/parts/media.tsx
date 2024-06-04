import { ProductInfoMediaProps } from '../types';
import classNames from 'classnames';
import styles from './media.m.scss';

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
