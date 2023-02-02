import React, { MouseEventHandler, ReactNode } from 'react';
import { Token } from '@sima-land/ui-nucleons/colors';
import classnames from 'classnames/bind';
import styles from './action-list.module.scss';

export interface ActionsListProps {
  /** Кнопки. */
  children?: ReactNode;
}

export interface ActionsListItemProps {
  children?: ReactNode;
  as?: 'anchor' | 'button';
  href?: string;
  onClick?: MouseEventHandler;
  color?: Extract<Token, 'basic-gray87' | 'additional-red'>;
}

const cx = classnames.bind(styles);

/**
 * Список действий.
 * Используется вместе с `Alert`.
 * @param props Свойства.
 * @return Элемент.
 */
export function ActionList({ children }: ActionsListProps) {
  return <div className={cx('list')}>{children}</div>;
}

/**
 * Элемент списка действий.
 * @param props Свойства.
 * @return Элемент.
 */
ActionList.Item = function ActionListItem({
  children,
  as = 'button',
  href,
  onClick,
  color = 'basic-gray87',
}: ActionsListItemProps) {
  const className = cx('list-item', { [color]: color });
  const testId = 'action-list:item';

  // @todo перейти на TextButton из нуклонов
  if (as === 'anchor') {
    return (
      <a className={className} data-testid={testId} href={href} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <button type='button' className={className} data-testid={testId} onClick={onClick}>
        {children}
      </button>
    );
  }
};
