import React from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { useCartItemInput } from './utils';
import SpinnerSVG from '../../../common/icons/white-spinner.svg';
import classnames from 'classnames/bind';
import styles from './in-cart-control.module.scss';

export interface InCartControlProps {
  canAdd?: boolean
  canSubtract?: boolean
  className?: string
  onAdd?: () => void
  onChange: (newQty: number) => void
  onSubtract?: () => void
  qty: number
  isFetching?: boolean
  allowFloat?: boolean
  inCart?: boolean
}

const cx = classnames.bind(styles);

/**
 * Компонент управления количеством в корзине.
 * @param props Свойства.
 * @return Элемент.
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
}: InCartControlProps) => {
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
              size='s'
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