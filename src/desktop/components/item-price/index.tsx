import React from 'react';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Price } from '@dev-dep/ui-nucleons/price';
import WholesalePrice, { WholesalePriceProps } from '../wholesale-price';
import classnames from 'classnames/bind';
import styles from './item-price.scss';
import FlagsList, { FlagsListProps } from '../../../common/components/flags-list';

export interface ItemPrice {
  currencyGrapheme?: string
  priceLayout?: 'row' | 'column'
  price: number
  priceOld: number
  wholesaleProps: WholesalePriceProps
  unitPrice: number
  measure?: string
  onDetailsClick?: WholesalePriceProps['onDetailsClick']
  showWholesalePrice?: boolean
  discountBadge?: FlagsListProps['flags']
}

const cx = classnames.bind(styles);

/**
 * Цены товара.
 * @param props Свойства компонента.
 * @param props.currencyGrapheme Графема валюты.
 * @param props.price Цена товара.
 * @param props.priceLayout Вид отображения цен.
 * @param props.priceOld Старая цена товара.
 * @param props.wholesaleProps Свойства крупного опта.
 * @param props.discountBadge Шильдик скидки.
 * @return Цены товара.
 */
export const ItemPrice = ({
  currencyGrapheme,
  priceLayout = 'row',
  price,
  priceOld,
  wholesaleProps,
  unitPrice,
  measure,
  onDetailsClick,
  showWholesalePrice,
  discountBadge,
}: ItemPrice) => {
  const isUnitPrice = unitPrice && measure;
  return (
    <div className={cx('wrapper', priceLayout === 'column' && 'wrapper-fixed')}>
      <Box
        display='flex'
        direction={priceLayout}
        alignItems='baseline'
        justifyContent='between'
        {...{
          marginBottom: priceLayout === 'column' ? 2 : 0,
        }}
        dangerouslySetInlineStyle={priceLayout === 'row' ? { __style: { width: '100%' } } : undefined}
      >
        <Box
          display='flex'
          direction={priceLayout}
          alignItems={priceLayout === 'column' ? 'start' : 'end'}
          marginRight={priceLayout === 'column' ? 8 : 0}
        >
          {Boolean(price) && (
            <Box marginRight={2}>
              <Text size={16} lineHeight={24} weight={600}>
                <Price
                  value={price}
                  currencyGrapheme={currencyGrapheme}
                />
              </Text>
            </Box>
          )}
          {Boolean(priceOld) && (priceOld > price) && (
            <span className={cx('price-old', priceLayout)}>
              <Text size={12} color='gray38'>
                <Price
                  crossedOut
                  value={priceOld}
                  currencyGrapheme={currencyGrapheme}
                />
              </Text>
              {priceLayout === 'column' && Boolean(discountBadge) && (
                <span className={cx('discount-badge')}>
                  <FlagsList
                    flags={discountBadge}
                    className='discount'
                  />
                </span>
              )}
            </span>
          )}
        </Box>
        {isUnitPrice && (
          <span className={cx('price-unit')}>
            <Text size={12} color='gray38' lineHeight={16}>
              <Price
                value={unitPrice}
                currencyGrapheme={measure}
              />
            </Text>
          </span>
        )}
      </Box>
      {showWholesalePrice && Boolean(wholesaleProps) && Boolean(wholesaleProps.price) && (
        <div className={cx('wholesale-wrapper')}>
          <WholesalePrice
            currencyGrapheme={currencyGrapheme}
            className={cx('wholesale')}
            onDetailsClick={onDetailsClick}
            direction={priceLayout}
            measure={measure}
            {...wholesaleProps}
          />
        </div>
      )}
    </div>
  );
};

export default ItemPrice;
