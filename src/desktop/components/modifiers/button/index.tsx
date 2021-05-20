import React, { forwardRef } from 'react';
import isNumber from 'lodash/isNumber';
import classes from './modifier-button.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES as TYPES } from '../../../../common/constants';

export interface Modifier {
  count?: number
  content: string
  color?: string
  image?: string
  type?: 'text' | 'image'
  isMarkdown?: boolean
}

export interface ModifierButtonProps extends Modifier {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  squared?: boolean
  selected?: boolean
}

const cx = classnames.bind(classes);

const typesList = Object.values(TYPES);

/**
 * Возвращает компонент модификатора.
 * @param props Свойства компонента.
 * @param props.count Количество компонента.
 * @param props.content Содержимое модификатора.
 * @param props.image URL изображения модификатора.
 * @param props.type Тип содержимого модификатора.
 * @param props.selected Выбран ли модификатор.
 * @param props.color Цвет модификатора.
 * @param props.className Дополнительный CSS-класс.
 * @param props.onClick Сработает при клике на модификатор.
 * @param props.isMarkdown Имеет ли товар уценку.
 * @param props.squared Должна ли быть кнопка квадратной.
 * @param ref Реф.
 * @return Элемент.
 */
export const ModifierButton = forwardRef<HTMLDivElement | null, ModifierButtonProps>(function ModifierButton ({
  count = null,
  content,
  selected,
  color,
  image,
  type: typeProp = 'text',
  className,
  onClick,
  isMarkdown: hasMarkdown,
  squared = [TYPES.color, TYPES.image].includes(typeProp),
}, ref) {
  const type = typesList.includes(typeProp) ? typeProp : 'text';
  const hasCount = isNumber(count) && count >= 0;

  return (
    <div
      ref={ref}
      className={cx(
        'modifier-button',
        squared && 'squared',
        selected && 'selected',
        className
      )}
      style={color ? { background: color } : undefined}
      onClick={onClick}
    >
      {/* label */}
      {(hasCount || hasMarkdown) && (
        <span
          className={cx(
            'label',
            hasCount && 'with-count'
          )}
        >
          {hasCount && ((count as any) > 99 ? '99+' : count)}
          {hasMarkdown && (hasCount ? '(У)' : 'У')}
        </span>
      )}

      {/* content */}
      {[TYPES.text, TYPES.image].includes(type) && (
        <div className={cx('content')}>
          {type === TYPES.text && (
            <span className={cx('text', !squared && 'guttered')}>
              {String(content || '')}
            </span>
          )}

          {type === TYPES.image && (
            <img
              src={image}
              alt={content}
              className={cx('image')}
            />
          )}
        </div>
      )}
    </div>
  );
});
