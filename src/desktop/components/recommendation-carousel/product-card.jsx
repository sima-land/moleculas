import React, { forwardRef } from 'react';
import { BoxShadow as Shadow } from '@dev-dep/ui-nucleons/styling/shadows';
import { MediumRounds as Rounds } from '@dev-dep/ui-nucleons/styling/shapes';
import { ProductInfo } from './product-info';
import { InCartControl } from './in-cart-control';
import classnames from 'classnames/bind';
import styles from './product-card.scss';

const cx = classnames.bind(styles);

/**
 * Карточка рекомендованного товара.
 */
export const ProductCard = forwardRef(({
  className,
  inCartControlProps,
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

    <InCartControl
      {...inCartControlProps}
      className={cx('stepper')}
    />

    {productInfo && productInfo.markupText && (
      <div className={cx('bottom-text')}>
        {productInfo.markupText}
      </div>
    )}
  </div>
));
