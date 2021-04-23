import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import classes from './track-number.scss';
import CopySVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/copy';
import Types from 'prop-types';

const cx = classNames.bind(classes);

/**
 * Компонент трек-номера.
 * @param {Object} props Свойства компонента.
 * @param {Object} props.item Элемент трек-номера.
 * @param {Function} props.onCopy Обработчик клика элементу трек номера.
 * @return {ReactElement} Компонент трек-номера.
 */
export const TrackNumber = ({
  item,
  onCopy,
}) => {
  const ref = useRef();

  /**
   * Копирование трек номера.
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(item.trackNumber);
    onCopy && onCopy(item, ref);
  };
  return (
    <div
      className={cx('track-number')}
      onClick={handleCopy}
      tabIndex={0}
      role='button'
      ref={ref}
    >
      <div className={cx('title')}>{item.title}</div>
      <div className={cx('content')}>
        {item.trackNumber}
        <div className={cx('icon')}>
          <CopySVG />
        </div>
      </div>
    </div>
  );
};

TrackNumber.propTypes = {
  item: Types.shape({
    title: Types.string,
    trackNumber: Types.string,
  }),
  onCopy: Types.func,
};
