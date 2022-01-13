import React, { Children, cloneElement, isValidElement } from 'react';
import { Badge } from '../badge';
import classnames from 'classnames/bind';
import styles from './badge-list.module.scss';

export interface BadgeListProps {
  /** Список данных для шильдиков. */
  children?: React.ReactNode;

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
export const BadgeList = ({ children, className, lineLimit, style }: BadgeListProps) => (
  <div
    className={cx('root', className, lineLimit && 'line-limit')}
    style={lineLimit ? ({ ...style, '--line-limit': lineLimit } as React.CSSProperties) : style}
  >
    {Children.toArray(children).reduce<React.ReactElement[]>((list, item) => {
      isValidElement(item) &&
        item.type === Badge &&
        list.push(cloneElement(item, { className: cx('item', item.props.className) }));
      return list;
    }, [])}
  </div>
);
