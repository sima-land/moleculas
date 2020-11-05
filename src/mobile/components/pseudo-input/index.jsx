import React from 'react';
import classnames from 'classnames/bind';
import Icon from '@dev-dep/ui-nucleons/icon';
import { search } from '@dev-dep/ui-nucleons/icons';
import styles from './pseudo-input.scss';
import Types from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Компонент псевдо-инпута поиска.
 * @param {Object} props Пропсы.
 * @param {string} props.text Текст подсказки.
 * @param {Function} props.onClick Обработчик клика.
 * @return {React.ReactElement} Компонент.
 */
const PseudoInput = ({
  text,
  onClick,
}) => (
  <div onClick={onClick} className={cx('input')} role='button'>
    <span className={cx('icon')}>
      <Icon icon={search} size={18} color='gray38' aria-hidden='true' />
    </span>
    <span className={cx('text')}>{text}</span>
  </div>
);

export default PseudoInput;

PseudoInput.propTypes = {

  /**
   * Текст подсказки.
   */
  text: Types.string,

  /**
   * Функция для обработки клика.
   */
  onClick: Types.func,
};
