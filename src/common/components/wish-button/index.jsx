import React from 'react';
import HeartSVG from '../../icons/heart.svg';
import HeartFilledSVG from '../../icons/filled-heart.svg';
import style from './wish-button.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

/**
 * Компонент добавления в избранное.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.isWished Признак товара в избранном.
 * @param {string} props.className Дополнительный класс для компонента.
 * @param {Function} props.onClick Обработчик клика по избранному.
 * @param {boolean} props.disabled Признак загрузки добавления товара в список избранного.
 * @param {number} props.size Размер иконки.
 * @return {ReactElement} Компонент добавления в избранное.
 */
export const WishButton = ({
  isWished,
  className,
  onClick,
  disabled,
  size = 24,
}) => {
  const Icon = isWished ? HeartFilledSVG : HeartSVG;

  return (
    <div
      title={isWished ? 'Убрать из избранного' : 'Добавить в избранное'}
      className={cx(
        'wish-button',
        className,
        isWished && 'is-wished',
        disabled && 'blocked'
      )}
      onClick={disabled ? null : onClick}
      data-testid='favorite-button'
    >
      <Icon
        viewBox='0 0 24 24'
        className={cx('svg', 'stroke')}
        width={size}
        height={size}
      />
    </div>
  );
};
