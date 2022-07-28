import React, { Children, isValidElement, ReactNode } from 'react';
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
    {Children.toArray(children).map((child, index) => {
      switch (true) {
        case isValidElement(child) && child.type === Badge:
          return <BadgeListSlot key={index}>{child}</BadgeListSlot>;
        case isValidElement(child) && child.type === BadgeListSlot:
          return child;
        default:
          return null;
      }
    })}
  </div>
);

function BadgeListSlot({ children }: { children?: ReactNode }) {
  return <div className={cx('item')}>{children}</div>;
}

BadgeList.Slot = BadgeListSlot;
