import React from 'react';
import HeartSVG from '../../icons/heart.svg';
import HeartFilledSVG from '../../icons/filled-heart.svg';
import classnames from 'classnames/bind';
import styles from './wish-button.scss';

const cx = classnames.bind(styles);

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
  checked,
  className,
  onClick,
  disabled,
  size = 24,
}) => {
  const Icon = checked ? HeartFilledSVG : HeartSVG;

  return (
    <div
      title={checked ? 'Убрать из избранного' : 'Добавить в избранное'}
      className={cx('button', className, { checked, disabled })}
      onClick={disabled ? null : onClick}
      data-testid='favorite-button'
    >
      <Icon
        viewBox='0 0 24 24'
        className={cx('svg')}
        width={size}
        height={size}
      />
    </div>
  );
};
