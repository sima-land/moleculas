import React from 'react';
import classnames from 'classnames/bind';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/search';
import styles from './pseudo-input.module.scss';

export interface PseudoInputProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Текст, введенный в поле. */
  text?: string;
}

const cx = classnames.bind(styles);

/**
 * Псевдо-поле поиска.
 * @param props Свойства.
 * @return Элемент.
 */
export const PseudoInput = ({ text, className, ...rest }: PseudoInputProps) => (
  <div {...rest} role='button' className={cx('input', className)}>
    <SearchSVG className={cx('icon')} aria-hidden='true' />
    <span className={cx('text')}>{text}</span>
  </div>
);
