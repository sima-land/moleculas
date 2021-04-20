import React from 'react';
import { Button } from '@dev-dep/ui-nucleons/button';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';
import { useCartItemInput } from './utils';
import SpinnerSVG from '../../../common/icons/white-spinner.svg';
import classnames from 'classnames/bind';
import styles from './in-cart-control.scss';

const cx = classnames.bind(styles);

/**
 * Компонент управления количеством в корзине.
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
  isFetching,
  allowFloat,
  inCart,
}) => {
  const inputProps = useCartItemInput({ qty, allowFloat, onApply: onChange });

  return (
    <>
      {
        inCart
          ? (
            <Stepper
              size='s'
              disabled={isFetching}
              className={cx('control', className)}
              canAdd={canAdd}
              canSubtract={canSubtract}
              onAdd={() => onAdd && onAdd()}
              onSubtract={() => onSubtract && onSubtract()}
              {...inputProps}
            />
          ) : (
            <Button
              size='small'
              className={cx('control', className)}
              onClick={() => !isFetching && onAdd && onAdd()}
            >
              {isFetching
                ? (
                  <SpinnerSVG
                    className={cx('button-spinner')}
                    width={24}
                    height={24}
                  />
                ) : 'В корзину'
              }
            </Button>
          )
      }
    </>
  );
};
