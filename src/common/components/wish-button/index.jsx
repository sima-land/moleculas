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
 * @param {boolean} props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 * @return {ReactElement} Компонент добавления в избранное.
 */
export const WishButton = ({
  isWished,
  className,
  onClick,
  isFetchingWishItems,
  size = 24,
}) => (
  <div
    title={isWished ? 'Убрать из избранного' : 'Добавить в избранное'}
    className={cx(
      'wish-button',
      className,
      isWished && 'is-wished',
      isFetchingWishItems && 'blocked'
    )}
    onClick={isFetchingWishItems ? null : onClick}
  >
    <Icon
      viewBox='0 0 24 24'
      className={cx('stroke')}
      icon={isWished ? heartFilledIcon : heartIcon}
      size={size}
    />
  </div>
);

export default WishButton;
