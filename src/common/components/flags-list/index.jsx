import React from 'react';
import Flag from '../flag';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import classes from './flags-list.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

/**
 * Компонент списка шильдиков.
 * @param {Object} props Свойства компонента.
 * @param {Array<import('../flag').FlagData>} [props.flags] Массив шильдиков.
 * @return {ReactElement} Компонент списка шильдиков.
 */
const FlagsList = ({
  flags,
  className,
}) => (
  <div className={cx('wrap', className)}>
    {isNonEmptyArray(flags) && flags.map((flagProps, index) => (
      <div key={index} className={cx('item')}>
        <Flag {...flagProps} />
      </div>
    ))}
  </div>
);

export default FlagsList;
