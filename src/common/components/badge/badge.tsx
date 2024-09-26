import type { BadgeProps, BadgeStyle } from './types';
import { renderFields, tokenToCustomProperty } from './utils';
import classnames from 'classnames/bind';
import styles from './badge.m.scss';

const cx = classnames.bind(styles);

/**
 * Шильдик.
 * @param props Свойства.
 * @return Элемент.
 */
export function Badge({
  rootRef,
  className,
  color,
  coloring = 'outline',
  fields,
  style,
  shape = 'unset',
  withHoverEffect = true,
  'data-testid': testId = 'badge',
  children,
  ...restProps
}: BadgeProps) {
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

  const content = fields ? renderFields(fields) : children;

  if (restProps.as === 'span') {
    return (
      <span
        ref={rootRef as any}
        className={rootClassName}
        style={rootStyle}
        data-testid={testId}
        {...omitPropAs(restProps)}
      >
        {content}
      </span>
    );
  }

  if (restProps.as === 'div') {
    return (
      <div
        ref={rootRef as any}
        className={rootClassName}
        style={rootStyle}
        data-testid={testId}
        {...omitPropAs(restProps)}
      >
        {content}
      </div>
    );
  }

  if (restProps.as === 'button') {
    return (
      <button
        ref={rootRef as any}
        className={rootClassName}
        style={rootStyle}
        data-testid={testId}
        type='button'
        {...omitPropAs(restProps)}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      ref={rootRef as any}
      className={rootClassName}
      style={rootStyle}
      data-testid={testId}
      {...omitPropAs(restProps)}
    >
      {content}
    </a>
  );
}

/** @inheritdoc */
function omitPropAs<T extends { as?: unknown }>(props: T): Omit<T, 'as'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...omitted } = props;

  return omitted;
}
