import { Link, type LinkProps } from '@sima-land/ui-nucleons/link';
import classNames from 'classnames';
import styles from './parts.m.scss';

/**
 * Кнопка "В лист ожидания".
 * @param props Свойства.
 * @return Элемент.
 */
export function WaitListAddLink({
  color = 'basic-blue',
  children = 'В лист ожидания',
  pseudo = true,
  className,
  'data-testid': testId = 'product-info:wait-list-add-button',
  ...restProps
}: LinkProps) {
  return (
    <Link
      pseudo={pseudo}
      color={color}
      className={classNames(styles['text-button'], className)}
      data-testid={testId}
      {...restProps}
    >
      {children}
    </Link>
  );
}
