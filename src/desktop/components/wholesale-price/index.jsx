import React from 'react';
import Box from '@dev-dep/ui-nucleons/box';
import Price from '@dev-dep/ui-nucleons/price';
import Text from '@dev-dep/ui-nucleons/text';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';
import WholesaleText from './wholesale-text';

export const cx = classnames.bind(style);

/**
 * Компонент цены крупного опта с описанием.
 * @param {Object} props Свойства компонента.
 * @param {number} props.price Цена крупного опта.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {string} [props.description] Описание условий акции крупного опта.
 * @param {string} [props.className] Дополнительный класс компонента.
 * @param {number} [props.unitWholesalePrice] Оптовая цена за единицу.
 * @param {string} [props.measure] Название величины измерения.
 * @param {'row'|'column'} [props.direction='row'] Вид отображения цен.
 * @param {Function} [props.onDetailsClick] Дополнительные действия при клике открытия описания.
 * @return {ReactElement} Компонент цены крупного опта с описанием.
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
}) => {
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
            currencyGraphemeClass={cx('currency-grapheme')}
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
                currencyGraphemeClass={cx('currency-grapheme')}
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
