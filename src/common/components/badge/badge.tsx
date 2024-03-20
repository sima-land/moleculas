import { ReactNode, forwardRef } from 'react';
import type { BadgeProps, BadgeStyle } from './types';
import { Timer } from '@sima-land/ui-nucleons/timer';
import classnames from 'classnames/bind';
import styles from './badge.module.scss';

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
    ...restProps
  },
  ref,
) {
  const iconOnly = fields.length === 1 && fields[0].type === 'svg-url';

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
      children={
        iconOnly ? (
          <img className={cx('icon')} src={fields[0].value} alt='' />
        ) : (
          // вложенный span нужен для того чтобы объединить `display: inline-flex` и `text-overflow: ellipsis`
          <span className={cx('content')}>
            {fields.reduce<ReactNode[]>((acc, item, i) => {
              let result = null;

              // на данный момент сочетание иконки с другими элементами не предусмотрено макетами - игнорируем
              switch (item.type) {
                case 'text':
                  result = item.value;
                  break;
                case 'timer':
                  result = (
                    <Timer key={i} date={item.value} timeout={1000 * 60} format={formatDistance} />
                  );
                  break;
              }

              acc.push(result);

              i < fields.length - 1 && acc.push(' ');

              return acc;
            }, [])}
          </span>
        )
      }
    />
  );
});

/**
 * Форматирует оставшееся время.
 * @param distance Оставшееся время.
 * @return Отформатированное время.
 */
const formatDistance = ({
  days,
  hours,
  minutes,
}: {
  days: number;
  hours: number;
  minutes: number;
}) => [toTimePart(days), ...[hours % 24, minutes % 60].map(toTimePart)].join(':');

/**
 * Форматирует число добавляя нули при необходимости.
 * @param n Число.
 * @return Отформатированное число.
 */
const toTimePart = (n: number) => `${n}`.padStart(2, '0');
