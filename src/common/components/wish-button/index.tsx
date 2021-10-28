import React, { forwardRef } from 'react';
import HeartSVG from '../../icons/heart.svg';
import HeartFilledSVG from '../../icons/filled-heart.svg';
import classnames from 'classnames/bind';
import styles from './wish-button.module.scss';

export interface WishButtonProps extends React.SVGAttributes<SVGSVGElement> {
  checked?: boolean;
  disabled?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Компонент добавления в избранное.
 * @param props Свойства компонента.
 * @param props.isWished Признак товара в избранном.
 * @param props.className Дополнительный класс для компонента.
 * @param props.onClick Обработчик клика по избранному.
 * @param props.disabled Признак загрузки добавления товара в список избранного.
 * @return Элемент.
 */
export const WishButton = forwardRef<SVGSVGElement | null, WishButtonProps>(
  ({ checked, className, onClick, disabled, ...restProps }, ref) => {
    const Icon = checked ? HeartFilledSVG : HeartSVG;

    return (
      <Icon
        {...restProps}
        ref={ref}
        role='button'
        aria-label={checked ? 'Убрать из избранного' : 'Добавить в избранное'}
        className={cx('button', className, { checked, disabled })}
        onClick={disabled ? undefined : onClick}
        data-testid='favorite-button'
        width={24}
        height={24}
      />
    );
  },
);
