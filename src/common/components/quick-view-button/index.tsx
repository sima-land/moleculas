import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import QuickViewSVG from '../../icons/quick-view.svg';
import styles from './quick-view-button.module.scss';

export type QuickViewButtonProps = React.SVGAttributes<SVGSVGElement>;

const cx = classnames.bind(styles);

/**
 * Кнопка быстрого просмотра товара.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const QuickViewButton = forwardRef<SVGSVGElement | null, QuickViewButtonProps>(({
  onClick,
  className,
  ...restProps
}, ref) => (
  <QuickViewSVG
    {...restProps}
    ref={ref}
    role='button'
    aria-label='Быстрый просмотр'
    className={cx('root', className)}
    width={24}
    height={24}
    onClick={onClick}
    data-testid='quick-view-button'
  />
));
