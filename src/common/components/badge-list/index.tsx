import React from 'react';
import { Badge, BadgeProps } from '../badge';
import classnames from 'classnames/bind';
import styles from './badge-list.module.scss';

export interface BadgeListProps {
  /** Список данных для шильдиков. */
  items?: BadgeProps[];

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента. */
  style?: React.CSSProperties;

  /** Лимит количества строк, не влезающие шильдики будут скрыты. */
  lineLimit?: number;
}

const cx = classnames.bind(styles);

/**
 * Компонент списка шильдиков. Формирует отступы между шильдиками и переносы по дизайн-найдам.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const BadgeList = ({ items, className, lineLimit, style }: BadgeListProps) => (
  <div
    className={cx('root', className, lineLimit && 'line-limit')}
    style={lineLimit ? ({ ...style, '--line-limit': lineLimit } as React.CSSProperties) : style}
  >
    {Array.isArray(items) &&
      items.length > 0 &&
      items.map((itemProps, index) => <Badge key={index} className={cx('item')} {...itemProps} />)}
  </div>
);

BadgeList.Item = Badge;
