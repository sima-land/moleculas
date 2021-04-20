import React, { forwardRef } from 'react';
import { BoxShadow as Shadow } from '@dev-dep/ui-nucleons/styling/shadows';
import { MediumRounds as Rounds } from '@dev-dep/ui-nucleons/styling/shapes';
import { ProductInfo } from './product-info';
import { InCartControl } from '../../../common/components/in-cart-control';
import classnames from 'classnames/bind';
import styles from './product-card.scss';

const cx = classnames.bind(styles);

/**
 * Карточка рекомендованного товара.
 * @param {Object} props Свойства.
 * @param {import('./types').ProductData} props.productInfo Данные товара.
 */
export const ProductCard = forwardRef(({
  className,
  inCartControl,
  productInfo,
  ...divProps
}, ref) => (
  <div
    {...divProps}
    ref={ref}
    className={cx('root', Rounds.all, Shadow.z4, className)}
  >
    <ProductInfo
      {...productInfo}
      withImageButtons
    />

    <div className={cx('control-wrapper')}>
      <InCartControl {...inCartControl} className={cx('control')} />

      {inCartControl && inCartControl.stepText && (
        <div className={cx('unit-text')}>
          {inCartControl.stepText}
        </div>
      )}

      {inCartControl && inCartControl.markupText && (
        <div className={cx('bottom-text')}>
          {inCartControl.markupText}
        </div>
      )}
    </div>
  </div>
));
