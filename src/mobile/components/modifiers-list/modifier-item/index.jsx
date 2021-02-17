import React from 'react';
import classes from './modifier-item.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES } from '@dev-dep/ui-nucleons/constants';
import Price from '@dev-dep/ui-nucleons/price';
import Text from '@dev-dep/ui-nucleons/text';
import CheckSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/check';

export const cx = classnames.bind(classes);

/**
 * Компонент модификатора в списке.
 * @param {Object} props Свойства компонента.
 * @param {string} props.name Наименование модификатора.
 * @param {boolean} [props.selected] Выбран ли модификатор.
 * @param {'text'|'image'|'color'} [props.type='text'] Тип модификатора.
 * @param {string} [props.color] Цвет модификатора.
 * @param {string} [props.image] URL изображения модификатора.
 * @param {number} props.price Цена товара-модификатора.
 * @param {string} props.currencyGrapheme Графема валюты пользователя.
 * @param {string} [props.additionalText] Дополнительный текст.
 * @param {Function} props.onClick Обработчик клика на модификатор.
 * @return {ReactElement} Компонент модификатора.
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
}) => (
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
          fractionalSign=','
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
