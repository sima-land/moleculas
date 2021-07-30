import React from 'react';
import classnames from 'classnames/bind';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/search';
import styles from './pseudo-input.module.scss';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export interface Props {
  text?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const cx = classnames.bind(styles);

/**
 * Компонент псевдо-инпута поиска.
 * @param props Пропсы.
 * @param props.text Текст подсказки.
 * @param props.onClick Обработчик клика.
 * @return Элемент.
 */
const PseudoInput = ({ text, onClick }: Props) => (
  <div onClick={onClick} className={cx('input')} role='button'>
    <span className={cx('icon')}>
      <SearchSVG fill={COLORS.get('gray38')} aria-hidden='true' />
    </span>
    <span className={cx('text')}>{text}</span>
  </div>
);

export default PseudoInput;
