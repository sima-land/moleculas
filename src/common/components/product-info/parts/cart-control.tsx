import { ReactNode } from 'react';
import styles from './cart-control.m.scss';
import classNames from 'classnames';

/**
 * Блок управления корзиной.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoCartControl({
  children,
  stepText,
  markupText,
  loading,
}: {
  children?: ReactNode;
  stepText?: string;
  markupText?: string;
  loading?: boolean;
}) {
  return (
    <div className={classNames(styles.root, loading && styles.loading)}>
      <div className={classNames(styles.main)}>{!loading && children}</div>

      {(loading || stepText) && (
        <div className={classNames(styles.aside)} data-testid='product-info:cart-step'>
          {!loading && stepText}
        </div>
      )}

      {!loading && markupText && (
        <div className={classNames(styles.footer)} data-testid='product-info:cart-info'>
          {markupText}
        </div>
      )}
    </div>
  );
}
