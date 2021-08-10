import React, { forwardRef } from 'react';
import { BoxShadow as Shadow } from '@sima-land/ui-nucleons/styling/shadows';
import { MediumRounds as Rounds } from '@sima-land/ui-nucleons/styling/shapes';
import { ProductInfo, ProductInfoProps } from './product-info';
import { InCartControl, InCartControlProps } from '../../../common/components/in-cart-control';
import classnames from 'classnames/bind';
import styles from './product-card.module.scss';
import { CartItem } from './types';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  inCartControl: CartItem & InCartControlProps
  productInfo: Omit<ProductInfoProps, 'withQuickView'>
}

const cx = classnames.bind(styles);

/**
 * Карточка рекомендованного товара.
 */
export const ProductCard = forwardRef<HTMLDivElement | null, ProductCardProps>(({
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
      withQuickView
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
