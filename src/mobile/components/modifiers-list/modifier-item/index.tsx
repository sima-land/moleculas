import React from 'react';
import classes from './modifier-item.module.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES } from '../../../../common/constants';
import { Price } from '@sima-land/ui-nucleons/price';
import { Text } from '@sima-land/ui-nucleons/text';
import CheckSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/check';

export interface ModifierItemProps {
  name: string
  selected?: boolean
  type?: 'text'|'image'|'color'
  color?: string
  image?: string
  price: number
  currencyGrapheme?: string
  additionalText?: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export const cx = classnames.bind(classes);

/**
 * Компонент модификатора в списке.
 * @param props Свойства компонента.
 * @param props.name Наименование модификатора.
 * @param props.selected Выбран ли модификатор.
 * @param props.type Тип модификатора.
 * @param props.color Цвет модификатора.
 * @param props.image URL изображения модификатора.
 * @param props.price Цена товара-модификатора.
 * @param props.currencyGrapheme Графема валюты пользователя.
 * @param props.additionalText Дополнительный текст.
 * @param props.onClick Обработчик клика на модификатор.
 * @return Элемент.
 */
export const ModifierItem = ({
  name,
  selected,
  type = 'text',
  color,
  image,
  price,
  currencyGrapheme,
  additionalText,
  onClick,
}: ModifierItemProps) => (
  <div
    onClick={onClick}
    className={cx('wrapper', selected && 'selected')}
  >
    {Boolean(type === MODIFIERS_TYPES.image && image) && (
      <img
        className={cx('adornment')}
        src={image}
        alt={name}
      />
    )}
    {Boolean(type === MODIFIERS_TYPES.color && color) && (
      <div
        className={cx('adornment', 'color')}
        style={{ backgroundColor: color }}
      />
    )}
    <div className={cx('info')}>
      <span className={cx('name')}>{name}</span>
      {Boolean(price) && (
        <Price
          value={price}
          currencyGrapheme={currencyGrapheme}
          className={cx('price', additionalText && 'additional')}
        />
      )}
      {Boolean(additionalText) && (
        <Text
          color='gray38'
          children={additionalText}
          size={12}
          lineHeight={16}
        />
      )}
    </div>
    <div className={cx('icon-wrapper')}>
      {selected && (
        <div className={cx('icon')}>
          <CheckSVG
            fill='#fff'
            role='presentation'
          />
        </div>
      )}
    </div>
  </div>
);
