import { Link, type LinkProps } from '@sima-land/ui-nucleons/link';
import classNames from 'classnames';
import styles from './parts.m.scss';

/**
 * Кнопка "подтвердить".
 * @param props Свойства.
 * @return Элемент.
 */
export function AdultConfirmButton({
  children = 'Подтвердить',
  pseudo = true,
  color = 'basic-blue',
  className,
  'data-testid': testId = 'product-info:adult-confirm-button',
  ...restProps
}: LinkProps) {
  return (
    <Link
      {...restProps}
      pseudo={pseudo}
      color={color}
      className={classNames(styles['text-button'], className)}
      data-testid={testId}
    >
      {children}
    </Link>
  );
}
