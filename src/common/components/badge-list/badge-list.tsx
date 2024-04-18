import { Children, isValidElement, ReactNode, CSSProperties } from 'react';
import { Badge } from '../badge';
import classnames from 'classnames/bind';
import styles from './badge-list.m.scss';

export interface BadgeListProps {
  /** Список данных для шильдиков. */
  children?: ReactNode;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента. */
  style?: CSSProperties;

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
    style={lineLimit ? ({ ...style, '--line-limit': lineLimit } as CSSProperties) : style}
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

/**
 * Слот для вывода Badge с произвольной оберткой.
 * @param props Свойства.
 * @return Элемент.
 */
function BadgeListSlot({ children }: { children?: ReactNode }) {
  return <div className={cx('item')}>{children}</div>;
}

BadgeList.Slot = BadgeListSlot;
