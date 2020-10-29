import React from 'react';
import Box from '@dev-dep/ui-nucleons/box';
import Text from '@dev-dep/ui-nucleons/text';
import Price from '@dev-dep/ui-nucleons/price';
import WholesalePrice from '../wholesale-price';
import classnames from 'classnames/bind';
import styles from './item-price.scss';
import FlagsList from '../../../common/components/flags-list';

const cx = classnames.bind(styles);

/**
 * Цены товара.
 * @param {Object} props Свойства компонента.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {number} props.price Цена товара.
 * @param {'row'|'column'} [props.priceLayout='row'] Вид отображения цен.
 * @param {number} [props.priceOld] Старая цена товара.
 * @param {Object} [props.wholesaleProps] Свойства крупного опта.
 * @param {Array} props.discountBadge Шильдик скидки.
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
  showWholesalePrice,
  discountBadge,
}) => {
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
        dangerouslySetInlineStyle={priceLayout === 'row' ? { __style: { width: '100%' } } : {}}
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
                currencyGraphemeClass={cx('currency-grapheme')}
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
