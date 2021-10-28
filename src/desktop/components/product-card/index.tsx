import React, { forwardRef } from 'react';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';
import { QuickViewButton } from '../../../common/components/quick-view-button';
import { SmallRounds } from '@sima-land/ui-nucleons/styling/shapes';
import { BoxShadow } from '@sima-land/ui-nucleons/styling/shadows';
import { defineSlots } from '@sima-land/ui-nucleons/helpers/define-slots';
import withPrevent from '@sima-land/ui-nucleons/helpers/with-prevent';
import classnames from 'classnames/bind';
import styles from './product-card.module.scss';

export interface ProductCardProps extends ProductInfoProps, React.HTMLAttributes<HTMLDivElement> {
  /** Будет вызвана при уходе курсора с элемента. */
  onMouseLeave?: () => void;

  /** Будет вызвана при нажатии на кнопку-иконку быстрого просмотра. */
  onQuickViewClick?: () => void;
}

const cx = classnames.bind(styles);

/**
 * Компонент-слот для вывода контрола товара в корзине.
 * @param props Свойства.
 * @return Элемент.
 */
const CartControlSlot = ({
  children,
  stepText,
  markupText,
  loading,
}: {
  children?: React.ReactNode;
  stepText?: string;
  markupText?: string;
  loading?: boolean;
}) => (
  <div className={cx('control-wrapper', { loading })}>
    <div className={cx('control')}>{!loading && children}</div>

    {(loading || stepText) && <div className={cx('unit-text')}>{!loading && stepText}</div>}

    {!loading && markupText && <div className={cx('bottom-text')}>{markupText}</div>}
  </div>
);

export interface ProductCardComponent
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ProductCardProps> & React.RefAttributes<HTMLDivElement>
  > {
  CartControl: typeof CartControlSlot;
}

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const ProductCard: ProductCardComponent = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      data,
      onLinkClick,
      onQuickViewClick,
      children,

      // div props
      className,
      ...rootProps
    },
    rootRef,
  ) => {
    const { cartControl } = defineSlots(children, { cartControl: CartControlSlot });

    return (
      <div
        ref={rootRef}
        className={cx('root', SmallRounds.all, BoxShadow.z4, className)}
        {...rootProps}
      >
        <ProductInfo data={data} onLinkClick={onLinkClick}>
          <ProductInfo.OnImage>
            <WithHint hint='Быстрый просмотр' direction='left'>
              {(ref, toggle) => (
                <QuickViewButton
                  ref={ref as any}
                  onMouseEnter={() => toggle(true)}
                  onMouseLeave={() => toggle(false)}
                  className={cx('quick-view-button')}
                  onClick={withPrevent(onQuickViewClick)}
                />
              )}
            </WithHint>
          </ProductInfo.OnImage>
        </ProductInfo>

        {cartControl}
      </div>
    );
  },
) as ProductCardComponent;

ProductCard.CartControl = CartControlSlot;
