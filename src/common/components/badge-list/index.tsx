import React from 'react';
import { Badge, BadgeProps } from '../badge';
import classnames from 'classnames/bind';
import styles from './badge-list.module.scss';

export interface BadgeListProps {
  items?: BadgeProps[];
  className?: string;
  style?: React.CSSProperties;
  lineLimit?: number;
}

const cx = classnames.bind(styles);

/**
 * Компонент списка шильдиков.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const BadgeList = ({
  items,
  className,
  lineLimit,
  style,
}: BadgeListProps) => (
  <div
    className={cx('root', className, lineLimit && 'line-limit')}
    style={lineLimit ? { ...style, '--line-limit': lineLimit } as React.CSSProperties : style}
  >
    {Array.isArray(items) && items.length > 0 && items.map((itemProps, index) => (
      <Badge
        key={index}
        className={cx('item')}
        {...itemProps}
      />
    ))}
  </div>
);

BadgeList.Item = Badge;
