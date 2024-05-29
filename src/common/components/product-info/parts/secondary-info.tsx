import { type HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './secondary-info.m.scss';

/**
 * Дополнительный контент после заголовка.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoSecondaryInfo({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...restProps} className={classNames(styles.root, className)}>
      {children}
    </div>
  );
}
