import React, { forwardRef } from 'react';
import isNumber from 'lodash/isNumber';
import classes from './modifier-button.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES as TYPES } from '@dev-dep/ui-nucleons/constants';

const cx = classnames.bind(classes);

const typesList = Object.values(TYPES);

/**
 * Возвращает компонент модификатора.
 * @param {Object} props Свойства компонента.
 * @param {number|null} [props.count=null] Количество компонента.
 * @param {string} props.content Содержимое модификатора.
 * @param {string} [props.image] URL изображения модификатора.
 * @param {'text'|'image'} [props.type='text'] Тип содержимого модификатора.
 * @param {boolean} [props.selected] Выбран ли модификатор.
 * @param {string} props.color Цвет модификатора.
 * @param {string} [props.className] Дополнительный CSS-класс.
 * @param {Function} [props.onClick] Сработает при клике на модификатор.
 * @param {boolean} [props.isMarkdown] Имеет ли товар уценку.
 * @param {boolean} [props.squared] Должна ли быть кнопка квадратной.
 * @param {Object} ref Реф.
 * @return {ReactElement} Компонент модификатора.
 */
export const ModifierButton = forwardRef(function ModifierButton ({
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
          {hasCount && (count > 99 ? '99+' : count)}
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
