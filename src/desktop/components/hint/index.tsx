import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import styles from './hint.scss';

export type Props = React.HTMLAttributes<HTMLDivElement>;

const cx = classnames.bind(styles);

/**
 * Компонент "хинта".
 */
export const Hint = forwardRef<HTMLDivElement, Props>(({
  children,
  className,
  ...restProps
}, ref) => (
  <div
    {...restProps}
    ref={ref}
    className={cx('root', className)}
    data-testid='hint'
  >
    <div className={cx('body')}>{children}</div>
  </div>
));
