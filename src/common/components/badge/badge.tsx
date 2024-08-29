import type { BadgeProps, BadgeStyle } from './types';
import { forwardRef } from 'react';
import { renderFields, tokenToCustomProperty } from './utils';
import classnames from 'classnames/bind';
import styles from './badge.m.scss';

const cx = classnames.bind(styles);

/**
 * Шильдик.
 * @param props Свойства.
 * @return Элемент.
 */
export const Badge = forwardRef<HTMLAnchorElement, BadgeProps>(function Badge(
  {
    className,
    color,
    coloring = 'outline',
    fields,
    href,
    style,
    shape = 'unset',
    withHoverEffect = Boolean(href),
    'data-testid': testId = 'badge',
    children,
    ...restProps
  },
  ref,
) {
  const iconOnly = fields && fields.length === 1 && fields[0].type === 'svg-url';

  const rootClassName = cx(
    'root',
    iconOnly && 'icon-only',
    withHoverEffect && 'with-hover-effect',
    shape === 'round' && 'shape-round',
    shape === 'pill' && 'shape-pill',
    shape !== 'pill' && !iconOnly && 'padding-x-default',
    shape === 'pill' && !iconOnly && 'padding-x-pill',
    coloring === 'outline' && 'coloring-outline',
    coloring === 'fill' && 'coloring-fill',
    className,
  );

  const rootStyle: BadgeStyle = {
    '--badge-color': tokenToCustomProperty(color),
    ...style,
  };

  return (
    <a
      ref={ref}
      {...restProps}
      data-testid={testId}
      href={href}
      style={rootStyle}
      className={rootClassName}
    >
      {fields ? renderFields(fields) : children}
    </a>
  );
});
