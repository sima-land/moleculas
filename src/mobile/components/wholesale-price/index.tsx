import React from 'react';
import InfoSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/information';
import { Price } from '@dev-dep/ui-nucleons/price';
import { Text } from '@dev-dep/ui-nucleons/text';
import WholesaleText from '../wholesale-text/wholesale-text';
import classnames from 'classnames/bind';
import styles from './wholesale-price.scss';

export const cx = classnames.bind(styles);

/**
 * Компонент цены крупного опта с описанием.
 * @param props Свойства компонента.
 * @param props.price Цена крупного опта.
 * @param props.currencyGrapheme Графема валюты.
 * @param props.description Описание условий акции крупного опта.
 * @param props.className Дополнительный класс компонента.
 * @return Элемент.
 */
export const WholesalePrice = ({
  price,
  currencyGrapheme,
  description,
  className,
  text,
  onDetailsClick,
  itemId,
}: {
  price: number
  currencyGrapheme?: string
  description?: string
  className?: string
  text?: string
  onDetailsClick: (id: number | undefined) => void
  itemId?: number
}) => (
  <div className={cx(className)}>
    <div className={cx('wrapper')}>
      <Text lineHeight={16} weight={600} size={12} color='gray38'>
        <Price
          value={price}
          currencyGrapheme={currencyGrapheme}
        />

        &nbsp;/&nbsp;<span className={cx('wholesale-word')}>Опт </span>

        {Boolean(text) && (
          <WholesaleText text={text} className={cx('wholesale-text')} />
        )}
      </Text>
    </div>

    {Boolean(text) && Boolean(description) && (
      <div className={cx('icon-wrapper')}>
        <span
          onClick={() => {
            onDetailsClick && onDetailsClick(itemId);
          }}
          className={cx('icon')}
          role='button'
          aria-label='Подробнее'
        >
          <InfoSVG
            role='presentation'
            className={cx('svg')}
          />
        </span>
      </div>
    )}
  </div>
);

export default WholesalePrice;
