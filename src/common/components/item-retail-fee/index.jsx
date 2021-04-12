import React from 'react';
import classnames from 'classnames/bind';
import styles from './item-retail-fee.scss';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Price } from '@dev-dep/ui-nucleons/price';
import { Box } from '@dev-dep/ui-nucleons/box';

const cx = classnames.bind(styles);

/**
 * Наценка на розницу.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.isFixed Признак фиксированной ширины.
 * @param {boolean} props.isSmaller Признак уменьшенного шрифта.
 * @param {number} props.price Наценка.
 * @param {number} [props.marginTop=4] Отступ сверху по дизайн-системе.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {number} [props.minQty] Минимальное количество.
 * @param {string} props.unit Единица измерения товара.
 * @return {ReactElement} Наценка на розницу.
 */
export const ItemRetailFee = ({
  isFixed,
  isSmaller,
  marginTop = 4,
  price,
  currencyGrapheme,
  minQty,
  unit,
}) => (
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
