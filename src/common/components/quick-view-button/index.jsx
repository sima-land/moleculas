import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import QuickViewSVG from '../../icons/quick-view.svg';
import styles from './quick-view-button.scss';

const cx = classnames.bind(styles);

/**
 * Кнопка быстрого просмотра товара.
 * @param {Object} props Свойства компонента.
 * @param {Function} props.onClick Обработчик нажатия на кнопку.
 * @param {string} [props.className] Класс кнопки.
 * @return {ReactElement} Элемент.
 */
export const QuickViewButton = forwardRef(({
  onClick,
  className,
  ...restProps
}, ref) => (
  <QuickViewSVG
    {...restProps}
    ref={ref}
    role='button'
    title='Быстрый просмотр'
    className={cx('root', className)}
    width={24}
    height={24}
    onClick={onClick}
    data-testid='quick-view-button'
  />
));
