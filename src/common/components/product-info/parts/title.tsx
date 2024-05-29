import { type ProductInfoTitleProps } from '../types';
import { Link } from '@sima-land/ui-nucleons/link';
import { useContext } from 'react';
import { ProductInfoContext } from '../utils';
import classNames from 'classnames';
import styles from './title.m.scss';

const defaultAdultPlaceholder = (
  <span className={styles['adult-placeholder']} data-testid='product-info:adult-warning'>
    Подтвердите, что вы старше 18 лет, чтобы посмотреть товар.
  </span>
);

/**
 * Слот для вывода ссылки - названия товара.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoTitle({
  children,
  href,
  className,
  color = 'basic-gray87',
  adultPlaceholder = defaultAdultPlaceholder,
  'data-testid': testId = 'product-info:name-link',
  ...restProps
}: ProductInfoTitleProps) {
  const { restriction } = useContext(ProductInfoContext);

  return restriction === 'adult' ? (
    <>{adultPlaceholder}</>
  ) : (
    <Link
      {...restProps}
      className={classNames(styles.root, styles['line-clamp'], className)}
      href={href}
      color={color}
      data-testid={testId}
    >
      {children}
    </Link>
  );
}
