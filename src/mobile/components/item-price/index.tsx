import React from 'react';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Price } from '@dev-dep/ui-nucleons/price';
import WholesalePrice from '../wholesale-price';
import classnames from 'classnames/bind';
import styles from './item-price.scss';

const cx = classnames.bind(styles);

/**
 * Цены товара.
 * @param props Свойства компонента.
 * @param props.currencyGrapheme Графема валюты.
 * @param props.price Цена товара.
 * @param props.viewType Вид отображения.
 * @param props.priceOld Старая цена товара.
 * @param props.wholesaleProps Свойства крупного опта.
 * @param props.unitPrice Цена за единицу.
 * @param props.measure Название величины измерения.
 * @return Элемент.
 */
export const ItemPrice = ({
  currencyGrapheme,
  viewType,
  price,
  priceOld,
  wholesaleProps,
  unitPrice,
  measure,
  onDetailsClick,
  itemId,
}: {
  currencyGrapheme?: string
  viewType: 'row' | 'column'
  price: number
  priceOld?: number
  wholesaleProps?: any
  unitPrice?: number
  measure?: string
  onDetailsClick: (id: number | undefined) => void
  itemId?: number
}) => {
  const isUnitPrice = unitPrice && measure;
  return (
    <div className={cx('wrapper', viewType)}>
      <Box display='flex' alignItems='center'>
        {Boolean(price) && (
          <Box marginRight={2}>
            <Text size={viewType === 'column' ? 14 : 16} lineHeight={24} weight={600} color='gray87'>
              <Price
                value={price}
                currencyGrapheme={currencyGrapheme}
              />
            </Text>
          </Box>
        )}
        {priceOld && (priceOld > price) && (
          <span className={cx('price-old', viewType)}>
            <Text size={12} color='gray38'>
              <Price
                crossedOut
                value={priceOld}
                currencyGrapheme={currencyGrapheme}
              />
            </Text>
          </span>
        )}
      </Box>
      {unitPrice && measure && (
        <span className={cx('price-unit')}>
          <Text size={16} color='gray38' lineHeight={24} weight={600}>
            <Price
              value={unitPrice}
              currencyGrapheme={measure}
            />
          </Text>
        </span>
      )}
      {!isUnitPrice && Boolean(wholesaleProps) && Boolean(wholesaleProps.price) && (
        <WholesalePrice
          currencyGrapheme={currencyGrapheme}
          className={cx('wholesale')}
          onDetailsClick={onDetailsClick}
          itemId={itemId}
          {...wholesaleProps}
        />
      )}
    </div>
  );
};

export default ItemPrice;
