import { ReactNode } from 'react';
import { Link, LinkProps } from '@sima-land/ui-nucleons/link';
import classnames from 'classnames/bind';
import styles from './action-circles.m.scss';

export interface ActionCirclesProps {
  /** Кнопки. */
  children?: ReactNode;
}

export interface ActionCircleItemProps extends Pick<LinkProps, 'href' | 'pseudo' | 'onClick'> {
  /** Название. */
  title: string;

  /** Иконка. */
  icon: ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Кнопки действий с иконками.
 * Используется вместе с `Alert`.
 * @param props Свойства.
 * @return Элемент.
 */
export function ActionCircles({ children }: ActionCirclesProps) {
  return <div className={cx('circles')}>{children}</div>;
}

/**
 * Кнопка действия с иконкой.
 * @param props Свойства.
 * @return Элемент.
 */
ActionCircles.Item = function ActionCircleItem({
  icon,
  title,
  href,
  onClick,
}: ActionCircleItemProps) {
  // @todo перейти на TextButton из нуклонов
  return (
    <Link
      href={href}
      className={cx('circles-item')}
      color='basic-gray87'
      onClick={onClick}
      data-testid='action-circles:item'
    >
      <span className={cx('icon-wrapper')}>{icon}</span>
      {title}
    </Link>
  );
};
