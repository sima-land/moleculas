import React from 'react';
import infoIcon from '../../../common/icons/info.svg';
import Icon from '@dev-dep/ui-nucleons/icon';
import Price from '@dev-dep/ui-nucleons/price';
import Text from '@dev-dep/ui-nucleons/text';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';
import isFunction from 'lodash/isFunction';
import WholesaleText from '../wholesale-text/wholesale-text';

export const cx = classnames.bind(style);

/**
 * Компонент цены крупного опта с описанием.
 * @param {Object} props Свойства компонента.
 * @param {number} props.price Цена крупного опта.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {string} [props.description] Описание условий акции крупного опта.
 * @param {string} [props.className] Дополнительный класс компонента.
 * @return {ReactElement} Компонент цены крупного опта с описанием.
 */
export const WholesalePrice = ({
  price,
  currencyGrapheme,
  description,
  className,
  text,
  onDetailsClick,
  itemId,
}) => (
  <div className={cx(className)}>
    <div className={cx('wrapper')}>
      <Text lineHeight={16} weight={600} size={12} color='gray38'>
        <Price
          value={price}
          currencyGrapheme={currencyGrapheme}
          currencyGraphemeClass={cx('currency-grapheme')}
        />
          &nbsp;/&nbsp;<span className={cx('wholesale-word')}>Опт </span>
        {Boolean(text) && <WholesaleText text={text} className={cx('wholesale-text')} />}
      </Text>
    </div>
    {Boolean(text) && Boolean(description) && (
      <div className={cx('icon-wrapper')}>
        <span
          onClick={() => {
            isFunction(onDetailsClick) && onDetailsClick(itemId);
          }}
          className={cx('icon')}
          role='button'
          aria-label='Подробнее'
        >
          <Icon
            icon={infoIcon}
            size={16}
            inline
            role='presentation'
          />
        </span>
      </div>
    )}
  </div>
);

export default WholesalePrice;
