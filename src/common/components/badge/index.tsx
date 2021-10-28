import React from 'react';
import classnames from 'classnames/bind';
import { Timer } from '@sima-land/ui-nucleons/timer';
import styles from './badge.module.scss';

export interface BadgeField {
  type: 'text' | 'timer' | 'svg-url'
  value: string
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {

  /** Основной цвет, используется как цвет обводки, иконок и текста. */
  color?: string

  /** Содержимое шильдика. */
  fields: Array<BadgeField>

  /** Ссылка, переход по которой будет произведён по нажатию на шильдик. */
  href?: string

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Шильдик.
 * @param props Свойства.
 * @param props.color Цвет.
 * @param props.fields Содержимое.
 * @param props.href Ссылка.
 * @return Элемент.
 */
export const Badge = ({
  className,
  color,
  fields,
  href,
  style,
  'data-testid': testId = 'badge',
  ...restProps
}: BadgeProps) => {
  const Element = href ? 'a' : 'span';
  const iconOnly = fields.length === 1 && fields[0].type === 'svg-url';

  return (
    <Element
      {...restProps}
      data-testid={testId}
      href={href}
      style={{ ...style, '--badge-color': color } as any}
      className={cx(
        'root',
        iconOnly && 'icon-only',
        href && 'interactive',
        className
      )}
      children={
        iconOnly
          ? (
            <img
              className={cx('icon')}
              src={fields[0].value}
            />
          ) : (

            // вложенный span нужен для того чтобы объединить `display: inline-flex` и `text-overflow: ellipsis`
            <span className={cx('content')}>
              {fields.reduce<React.ReactNode[]>((acc, item, i) => {
                let result = null;

                // на данный момент сочетание иконки с другими элементами не предусмотрено макетами - игнорируем
                switch (item.type) {
                  case 'text':
                    result = item.value;
                    break;
                  case 'timer':
                    result = (
                      <Timer
                        key={i}
                        date={item.value}
                        timeout={1000 * 60}
                        format={formatDistance}
                      />
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
};

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
  days: number
  hours: number
  minutes: number
}) => [
  toTimePart(days),
  ...[hours % 24, minutes % 60].map(toTimePart),
].join(':');

/**
 * Форматирует число добавляя нули при необходимости.
 * @param n Число.
 * @return Отформатированное число.
 */
const toTimePart = (n: number) => `${n}`.padStart(2, '0');
