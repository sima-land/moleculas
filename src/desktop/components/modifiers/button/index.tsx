import { CSSProperties, MouseEventHandler, forwardRef } from 'react';
import { isNumber } from 'lodash';
import classes from './modifier-button.module.scss';
import classnames from 'classnames/bind';
import { ModifierType } from '../../../../common/types';
import { MODIFIER_TYPE as TYPE } from '../../../../common/constants';

export interface Modifier {
  count?: number;
  content: string;
  color?: string;
  image?: string;
  type?: ModifierType;
  isMarkdown?: boolean;
  selected?: boolean;
}

export interface ModifierButtonProps extends Modifier {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  squared?: boolean;
  'data-testid'?: string;
}

const cx = classnames.bind(classes);

/**
 * Компонент модификатора.
 */
export const ModifierButton = forwardRef<HTMLDivElement, ModifierButtonProps>(
  function ModifierButton(
    {
      count = null,
      content,
      selected,
      color,
      image,
      type = 'text',
      className,
      style,
      onClick,
      isMarkdown: hasMarkdown,
      squared = [TYPE.color, TYPE.image].includes(type),
      'data-testid': testId = 'modifier-button',
    },
    ref,
  ) {
    const hasCount = isNumber(count) && count >= 0;

    return (
      <div
        ref={ref}
        className={cx('modifier-button', squared && 'squared', selected && 'selected', className)}
        style={color ? { ...style, background: color } : style}
        onClick={onClick}
        data-testid={testId}
      >
        {/* label */}
        {(hasCount || hasMarkdown) && (
          <span
            className={cx('label', hasCount && 'with-count')}
            data-testid='modifier-button:badge'
          >
            {hasCount && ((count as any) > 99 ? '99+' : count)}
            {hasMarkdown && (hasCount ? '(У)' : 'У')}
          </span>
        )}

        {/* content */}
        {[TYPE.text, TYPE.image].includes(type) && (
          <div className={cx('content')}>
            {type === TYPE.text && (
              <span className={cx('text', !squared && 'guttered')}>{String(content || '')}</span>
            )}

            {type === TYPE.image && <img src={image} alt={content} className={cx('image')} />}
          </div>
        )}
      </div>
    );
  },
);
