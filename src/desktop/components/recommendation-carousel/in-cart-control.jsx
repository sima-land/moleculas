import React from 'react';
import { Button } from '@dev-dep/ui-nucleons/button';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';
import classnames from 'classnames/bind';
import styles from './in-cart-control.scss';
import { noop } from 'lodash';

const cx = classnames.bind(styles);

/**
 * Заглушка кнопки/степпера управления количеством в корзине.
 * @param {Object} props Свойства.
 * @return {ReactElement} Элемент.
 */
export const InCartControl = ({
  canAdd,
  canSubtract,
  className,
  onAdd,
  onChange,
  onSubtract,
  qty,
}) => (
  <>
    {
      qty > 0
        ? (
          <Stepper
            size='s'
            className={cx('control', className)}
            value={qty}
            canAdd={canAdd}
            canSubtract={canSubtract}
            onAdd={onAdd}
            onSubtract={onSubtract}
            onKeyDown={e => e.key === 'Enter' && onChange(e)}
            onBlur={onChange}
            onChange={noop}
          />
        ) : (
          <Button
            size='small'
            className={cx('control', className)}
            onClick={onAdd}
          >
            В корзину
          </Button>
        )
    }
  </>
);
