import React from 'react';
import Icon from '@dev-dep/ui-nucleons/icon';
import heartIcon from '../../icons/heart.svg';
import heartFilledIcon from '../../icons/filled-heart.svg';
import style from './wish-button.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

/**
 * Компонент добавления в избранное.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.isWished Признак товара в избранном.
 * @param {string} props.className Дополнительный класс для компонента.
 * @param {Function} props.onClick Обработчик клика по избранному.
 * @param {'left'|'right'} props.pos Позиция иконки.
 * @param {boolean} props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 * @return {ReactElement} Компонент добавления в избранное.
 */
export const WishButton = ({
  isWished,
  className,
  onClick,
  pos,
  isFetchingWishItems,
}) => (
  <div
    className={cx('wish-button', {
      [`wish-${pos}`]: 'pos',
      [className]: 'className',
      ['is-wished']: isWished,
      ['blocked']: isFetchingWishItems,
    })}
    onClick={isFetchingWishItems ? null : onClick}
  >
    <Icon
      className={cx(!isWished && 'stroke')}
      icon={isWished ? heartFilledIcon : heartIcon}
      size={20}
    />
  </div>
);

export default WishButton;
