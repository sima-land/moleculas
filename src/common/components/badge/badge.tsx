import { type ReactNode, forwardRef } from 'react';
import type { BadgeField, BadgeProps, BadgeStyle } from './types';
import { Timer } from '@sima-land/ui-nucleons/timer';
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
    '--badge-color': color,
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

/**
 * Сформирует содержимое шильдика на основе списка полей.
 * Текстовые поля (type === text | timer) идущие подряд, будут объединены в один span.
 * Между текстовыми полями в span будет вставлен 1 пробел.
 * @param fields Поля.
 * @return СОдержимое шильдика.
 */
function renderFields(fields: BadgeField[]): ReactNode[] {
  const result: ReactNode[] = [];

  let item: null | Array<ReactNode> = null;

  for (const field of fields) {
    if (!item) {
      switch (field.type) {
        case 'text': {
          item = [field.value];
          break;
        }

        case 'timer': {
          item = [<Timer key={0} date={field.value} timeout={1000 * 60} format={formatDistance} />];
          break;
        }

        case 'svg-url': {
          result.push(<img key={result.length} className={cx('icon')} src={field.value} alt='' />);
          break;
        }
      }
    } else {
      switch (field.type) {
        case 'text': {
          item.push(' ');
          item.push(field.value);
          break;
        }

        case 'timer': {
          item.push(' ');
          item.push(
            <Timer
              key={item.length}
              date={field.value}
              timeout={1000 * 60}
              format={formatDistance}
            />,
          );
          break;
        }

        case 'svg-url': {
          // вложенный span нужен для того чтобы объединить `display: inline-flex` и `text-overflow: ellipsis`
          result.push(
            <span key={result.length} className={cx('content')}>
              {item}
            </span>,
          );
          item = null;
          result.push(<img key={result.length} className={cx('icon')} src={field.value} alt='' />);
          break;
        }
      }
    }
  }

  if (item) {
    result.push(
      <span key={result.length} className={cx('content')}>
        {item}
      </span>,
    );
    item = null;
  }

  return result;
}

/**
 * Форматирует оставшееся время.
 * @param distance Оставшееся время.
 * @return Отформатированное время.
 */
function formatDistance({
  days,
  hours,
  minutes,
}: {
  days: number;
  hours: number;
  minutes: number;
}) {
  return `${toTimePart(days)}:${toTimePart(hours % 24)}:${toTimePart(minutes % 60)}`;
}

/**
 * Форматирует число добавляя нули при необходимости.
 * @param n Число.
 * @return Отформатированное число.
 */
function toTimePart(n: number) {
  return `${n}`.padStart(2, '0');
}
