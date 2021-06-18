import React, { forwardRef } from 'react';
import isNumber from 'lodash/isNumber';
import classes from './modifier-button.module.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES as TYPES } from '../../../../common/constants';

export interface Modifier {
  count?: number
  content: string
  color?: string
  image?: string
  type?: 'text' | 'image'
  isMarkdown?: boolean
  selected?: boolean
}

export interface ModifierButtonProps extends Modifier {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  squared?: boolean
  'data-testid'?: string
}

const cx = classnames.bind(classes);

const typesList = Object.values(TYPES);

/**
 * Компонент модификатора.
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
  'data-testid': testId = 'modifier-button',
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
      data-testid={testId}
    >
      {/* label */}
      {(hasCount || hasMarkdown) && (
        <span
          className={cx(
            'label',
            hasCount && 'with-count'
          )}
          data-testid='modifier-button:badge'
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
