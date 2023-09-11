import { MouseEventHandler } from 'react';
import { Price } from '@sima-land/ui-nucleons/price';
import { Text } from '@sima-land/ui-nucleons/text';
import { ModifierType } from '../../../../common/types';
import { MODIFIER_TYPE } from '../../../../common/constants';
import CheckSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Check';
import classnames from 'classnames/bind';
import styles from './modifier-item.module.scss';

export interface ModifierItemProps {
  /** Наименование модификатора. */
  name: string;

  /** Выбран ли модификатор. */
  selected?: boolean;

  /** Тип модификатора. */
  type?: ModifierType;

  /** Цвет модификатора. */
  color?: string;

  /** URL изображения модификатора. */
  image?: string;

  /** Цена товара-модификатора. */
  price: number;

  /** Графема валюты пользователя. */
  currencyGrapheme?: string;

  /** Дополнительный текст. */
  additionalText?: string;

  /** Обработчик клика на модификатор. */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const cx = classnames.bind(styles);

/**
 * Компонент модификатора в списке.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModifierItem({
  name,
  selected,
  type = 'text',
  color,
  image,
  price,
  currencyGrapheme,
  additionalText,
  onClick,
}: ModifierItemProps) {
  return (
    <div className={cx('wrapper', selected && 'selected')} onClick={onClick}>
      {Boolean(type === MODIFIER_TYPE.image && image) && (
        <img className={cx('adornment')} src={image} alt={name} />
      )}

      {Boolean(type === MODIFIER_TYPE.color && color) && (
        <div className={cx('adornment', 'color')} style={{ backgroundColor: color }} />
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
          <Text color='basic-gray38' children={additionalText} size={12} lineHeight={16} />
        )}
      </div>

      <div className={cx('icon-wrapper')}>
        {selected && (
          <div className={cx('icon')}>
            <CheckSVG fill='#fff' role='presentation' />
          </div>
        )}
      </div>
    </div>
  );
}
