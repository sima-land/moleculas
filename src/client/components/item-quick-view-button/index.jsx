import React from 'react';
import classnames from 'classnames/bind';
import styles from './item-quick-view-button.scss';
import isFunction from 'lodash/isFunction';

const cx = classnames.bind(styles);

/**
 * Кнопка быстрого просмотра товара.
 * @param {Object} props Свойства компонента.
 * @param {Function} props.onClick Обработчик клика по кнопке.
 * @param {string} props.additionalClassName Дополнительный класс для кнопки.
 * @return {ReactElement} Компонент кнопки.
 */
export const ItemQuickViewButton = ({
  onClick,
  additionalClassName = '',
}) => (
  <button
    className={cx('quick-view-button', additionalClassName)}
    onClick={isFunction(onClick) ? onClick : null}
  >
    Быстрый просмотр
  </button>
);

export default ItemQuickViewButton;
