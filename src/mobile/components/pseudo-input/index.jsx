import React from 'react';
import classnames from 'classnames/bind';
import Search from '@dev-dep/ui-quarks/icons/24x24/Stroked/magnifier';
import styles from './pseudo-input.scss';
import Types from 'prop-types';
import { COLORS } from '@dev-dep/ui-nucleons/colors';

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
      <Search fill={COLORS.get('gray38')} aria-hidden='true' />
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
