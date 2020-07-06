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
 * @param {'row'|'column'} [props.priceLayout='row'] Вид отображения цен.
 * @param {number} [props.priceOld] Старая цена товара.
 * @param {Object} [props.wholesaleProps] Свойства крупного опта.
 * @return {ReactElement} Цены товара.
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
}) => (
  <div className={cx('wrapper', priceLayout === 'column' && 'wrapper-fixed')}>
    <Box
      display='flex'
      direction={priceLayout}
      alignItems='baseline'
      justifyContent='between'
      {...{
        marginBottom: priceLayout === 'column' ? 2 : 0,
      }}
      dangerouslySetInlineStyle={priceLayout === 'row' ? { __style: { width: '200px', maxWidth: '100%' } } : {}}
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
                currencyGraphemeClass={cx('currency-grapheme')}
              />
            </Text>
          </Box>
        )}
        {Boolean(priceOld) && (priceOld > price) && (
          <span className={cx('price-old', priceLayout)}>
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
    {!unitPrice && Boolean(wholesaleProps) && Boolean(wholesaleProps.price) && (
      <WholesalePrice
        currencyGrapheme={currencyGrapheme}
        className={cx('wholesale')}
        onDetailsClick={onDetailsClick}
        {...wholesaleProps}
      />
    )}
  </div>
);

export default ItemPrice;
