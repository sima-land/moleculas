import React from 'react';
import classnames from 'classnames/bind';
import { Timer } from '@dev-dep/ui-nucleons/timer';
import styles from './badge.scss';

const cx = classnames.bind(styles);

/**
 * Шильдик.
 * @param {Object} props Свойства.
 * @param {string} [props.className] Класс.
 * @param {string} props.color Цвет.
 * @param {Array<{ type: 'text' | 'timer' | 'svg-url', value: string }>} props.fields Содержимое.
 * @param {string} props.href Ссылка.
 * @param {Object} [props.style] Стили.
 * @return {ReactElement} Компонент.
 */
export const Badge = ({
  className,
  color,
  fields,
  href,
  style,
  ...restProps
}) => {
  const Element = href ? 'a' : 'span';
  const iconOnly = fields.length === 1 && fields[0].type === 'svg-url';

  return (
    <Element
      {...restProps}
      href={href}
      style={{ ...style, '--badge-color': color }}
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
              {fields.reduce((acc, item, i) => {
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
 * @param {{ days, hours, minutes }} distance Оставшееся время.
 * @return {string} Отформатированное время.
 */
const formatDistance = ({ days, hours, minutes }) => [
  toTimePart(days),
  ...[hours % 24, minutes % 60].map(toTimePart),
].join(':');

/**
 * Форматирует число добавляя нули при необходимости.
 * @param {number} n Число.
 * @return {string} Отформатированное число.
 */
const toTimePart = n => `${n}`.padStart(2, '0');
