import { BadgeList, type BadgeListProps } from '../../badge-list';
import classNames from 'classnames';
import styles from './badges.m.scss';

/**
 * Слот для вывода шильдиков.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoBadges({ children, className, ...restProps }: BadgeListProps) {
  return (
    <BadgeList className={classNames(styles.badges, className)} {...restProps}>
      {children}
    </BadgeList>
  );
}
