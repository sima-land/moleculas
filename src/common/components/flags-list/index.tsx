import React from 'react';
import classes from './flags-list.scss';
import classnames from 'classnames/bind';
import { Badge, BadgeProps } from '../badge';

export interface FlagsListProps {
  flags?: BadgeProps[]
  className?: string
}

const cx = classnames.bind(classes);

/**
 * Компонент списка шильдиков.
 * @param props Свойства компонента.
 * @return Элемент.
 */
const FlagsList = ({
  flags,
  className,
}: FlagsListProps) => (
  <div className={cx('wrap', className)}>
    {Array.isArray(flags) && flags.length > 0 && flags.map((flagProps, index) => (
      <Badge
        key={index}
        className={cx('item')}
        {...flagProps}
      />
    ))}
  </div>
);

export default FlagsList;
