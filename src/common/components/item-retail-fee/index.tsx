import React from 'react';
import classnames from 'classnames/bind';
import styles from './item-retail-fee.scss';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Price } from '@dev-dep/ui-nucleons/price';
import { Box } from '@dev-dep/ui-nucleons/box';

export interface ItemRetailFeeProps {
  isFixed?: boolean
  isSmaller?: boolean
  marginTop?: number
  price: number | string
  currencyGrapheme?: string
  minQty?: number
  unit?: string
}

const cx = classnames.bind(styles);

/**
 * Наценка на розницу.
 * @param props Свойства компонента.
 * @param props.isFixed Признак фиксированной ширины.
 * @param props.isSmaller Признак уменьшенного шрифта.
 * @param props.price Наценка.
 * @param props.marginTop Отступ сверху по дизайн-системе.
 * @param props.currencyGrapheme Графема валюты.
 * @param props.minQty Минимальное количество.
 * @param props.unit Единица измерения товара.
 * @return Наценка на розницу.
 */
export const ItemRetailFee = ({
  isFixed,
  isSmaller,
  marginTop = 4,
  price,
  currencyGrapheme,
  minQty,
  unit,
}: ItemRetailFeeProps) => (
  <div className={cx('wrapper', isFixed && 'fixed-width', isSmaller && 'small')}>
    <Box marginTop={marginTop}>
      <Text color='gray38' size={isSmaller ? 12 : 14} lineHeight={isSmaller ? 16 : 20}>
        Комплектация
        <span className={cx('no-wrap')}>
          &nbsp;+&nbsp;
          <Price value={price} currencyGrapheme={currencyGrapheme} className={cx('price')} />
        </span>
        {Boolean(minQty) && (
          <span>при&nbsp;покупке до&nbsp;{minQty}&nbsp;{unit}</span>
        )}
      </Text>
    </Box>
  </div>
);

export default ItemRetailFee;
