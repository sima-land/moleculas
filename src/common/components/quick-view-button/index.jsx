import React from 'react';
import classnames from 'classnames/bind';
import QuickViewSVG from '../../icons/quick-view.svg';
import styles from './quick-view-button.scss';

const cx = classnames.bind(styles);

/**
 * Кнопка быстрого просмотра товара.
 * @param {Object} props Свойства компонента.
 * @param {Function} props.onClick Обработчик нажатия на кнопку.
 * @param {number} props.size Размер иконки.
 * @param {string} [props.className] Класс кнопки.
 * @return {ReactElement} Компонент кнопки.
 */
export const QuickViewButton = ({
  onClick,
  className,
  size = 24,
}) => (
  <div
    title='Быстрый просмотр'
    className={cx('button', className)}
    onClick={onClick}
  >
    <QuickViewSVG
      className={cx('stroke')}
      width={size}
      height={size}
    />
  </div>
);

export default QuickViewButton;
