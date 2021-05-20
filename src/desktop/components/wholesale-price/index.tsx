import React from 'react';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Price } from '@dev-dep/ui-nucleons/price';
import { Text } from '@dev-dep/ui-nucleons/text';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';
import WholesaleText, { WholesaleTextProps } from './wholesale-text';

export interface WholesalePriceProps {
  price: number
  currencyGrapheme?: string
  description: string
  onDetailsClick: WholesaleTextProps['onDetailsClick']
  className?: string
  text?: string
  unitWholesalePrice: number
  measure?: string
  direction?: 'row' | 'column'
}

export const cx = classnames.bind(style);

/**
 * Компонент цены крупного опта с описанием.
 * @param props Свойства компонента.
 * @param props.price Цена крупного опта.
 * @param props.currencyGrapheme Графема валюты.
 * @param props.description Описание условий акции крупного опта.
 * @param props.className Дополнительный класс компонента.
 * @param props.unitWholesalePrice Оптовая цена за единицу.
 * @param props.measure Название величины измерения.
 * @param props.direction Вид отображения цен.
 * @param props.onDetailsClick Дополнительные действия при клике открытия описания.
 * @return Компонент цены крупного опта с описанием.
 */
export const WholesalePrice = ({
  price,
  currencyGrapheme,
  description,
  onDetailsClick,
  className,
  text,
  unitWholesalePrice,
  measure,
  direction = 'row',
}: WholesalePriceProps) => {
  const isRowGrid = direction === 'row';

  return (
    <div className={cx(className)}>
      <Box
        display='flex'
        justifyContent={isRowGrid ? 'between' : 'start'}
        wrap={!isRowGrid}
      >
        <Text lineHeight={24} size={16} weight={600} color='gray87'>
          <Price
            value={price}
            currencyGrapheme={currencyGrapheme}
          />
            &nbsp;/ опт
        </Text>
        {text && !isRowGrid && (
          <WholesaleText
            description={description}
            onDetailsClick={onDetailsClick}
            text={text}
          />
        )}
        {Boolean(unitWholesalePrice) && measure && (
          <span className={cx('price-unit')}>
            <Text size={12} color='gray38' lineHeight={16}>
              <Price
                value={unitWholesalePrice}
                currencyGrapheme={measure}
              />
            </Text>
          </span>
        )}
      </Box>
      {text && isRowGrid && (
        <WholesaleText
          description={description}
          onDetailsClick={onDetailsClick}
          text={text}
        />
      )}
    </div>
  );
};

export default WholesalePrice;
