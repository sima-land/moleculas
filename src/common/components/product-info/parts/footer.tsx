import type { ProductInfoFooterProps } from '../types';
import { ProductInfoFooterContext } from '../utils';
import { useContext } from 'react';
import classNames from 'classnames';
import styles from './footer.m.scss';

/**
 * Слот - футер.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoFooter({ children, className, ...restProps }: ProductInfoFooterProps) {
  const { className: classNameFromContext } = useContext(ProductInfoFooterContext);

  return (
    <div className={classNameFromContext ?? classNames(styles.root, className)} {...restProps}>
      {children}
    </div>
  );
}
