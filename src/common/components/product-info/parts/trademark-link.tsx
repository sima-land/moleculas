import { Link, type LinkProps } from '@sima-land/ui-nucleons/link';
import classNames from 'classnames';
import styles from './trademark-link.m.scss';

/**
 * Слот для вывода ссылки торговой марки.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoTrademarkLink({
  href,
  color = 'basic-blue',
  children,
  className,
  'data-testid': testId = 'product-info:trademark-link',
  ...restProps
}: LinkProps) {
  return (
    <Link
      {...restProps}
      className={classNames(styles.root, className)}
      href={href}
      color={color}
      data-testid={testId}
    >
      {children}
    </Link>
  );
}
