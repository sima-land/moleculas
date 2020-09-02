import React from 'react';
import Box from '@dev-dep/ui-nucleons/box';
import Text from '@dev-dep/ui-nucleons/text';
import Price from '@dev-dep/ui-nucleons/price';
import WholesalePrice from '../wholesale-price';
import classnames from 'classnames/bind';
import styles from './item-price.scss';

const cx = classnames.bind(styles);

/**
 * Цены товара.
 * @param {Object} props Свойства компонента.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {number} props.price Цена товара.
 * @param {'row'|'column'} [props.viewType='row'] Вид отображения.
 * @param {number} [props.priceOld] Старая цена товара.
 * @param {Object} [props.wholesaleProps] Свойства крупного опта.
 * @param {number} [props.unitPrice] Цена за единицу.
 * @param {string} [props.measure] Название величины измерения.
 * @return {ReactElement} Цены товара.
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
                currencyGraphemeClass={cx('currency-grapheme')}
              />
            </Text>
          </Box>
        )}
        {Boolean(priceOld) && (priceOld > price) && (
          <span className={cx('price-old', viewType)}>
            <Text size={12} color='gray38'>
              <Price
                old
                value={priceOld}
                currencyGrapheme={currencyGrapheme}
                currencyGraphemeClass={cx('currency-grapheme')}
              />
            </Text>
          </span>
        )}
      </Box>
      {Boolean(unitPrice && measure) && (
        <span className={cx('price-unit')}>
          <Text size={16} color='gray38' lineHeight={24} weight={600}>
            <Price
              value={unitPrice}
              currencyGrapheme={measure}
              currencyGraphemeClass={cx('currency-grapheme')}
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
