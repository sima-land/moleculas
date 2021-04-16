import React from 'react';
import { Button } from '@dev-dep/ui-nucleons/button';
import classnames from 'classnames/bind';
import styles from './in-cart-control.scss';

const cx = classnames.bind(styles);

/**
 * Заглушка кнопки/степпера управления количеством в корзине.
 * @param {Object} props Свойства.
 * @return {ReactElement} Элемент.
 */
export const InCartControl = ({ className }) => (
  <div className={cx('root', className)}>
    <Button size='small' className={cx('button')}>
      В корзину
    </Button>
    <div className={cx('unit-text')}>
      По 1 шт
    </div>
  </div>
);
