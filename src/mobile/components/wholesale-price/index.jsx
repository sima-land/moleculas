import React from 'react';
import infoIcon from '../../../common/icons/info.svg';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';
import Icon from '@dev-dep/ui-nucleons/icon';
import Price from '@dev-dep/ui-nucleons/price';
import Text from '@dev-dep/ui-nucleons/text';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';
import isFunction from 'lodash/isFunction';

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
  text = 'опт',
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
      &nbsp;/ <span className={cx('wholesale-text')}>{text}</span>
      </Text>
    </div>
    {Boolean(description) && (
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

export default withGlobalListeners(WholesalePrice);
