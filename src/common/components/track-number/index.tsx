import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import classes from './track-number.scss';
import CopySVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/copy';

const cx = classNames.bind(classes);

export interface ItemData {
  title?: string
  trackNumber?: string
}

export interface TrackNumberProps <T extends ItemData = ItemData> {
  item: T
  onCopy?: (item: T, ref: React.MutableRefObject<HTMLDivElement | null>) => void
}

/**
 * Компонент трек-номера.
 * @param props Свойства компонента.
 * @param props.item Элемент трек-номера.
 * @param props.onCopy Обработчик клика элементу трек номера.
 * @return Элемент.
 */
export const TrackNumber = <T extends ItemData>({ item, onCopy }: TrackNumberProps<T>) => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  /**
   * Копирование трек номера.
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(item.trackNumber as any);
    onCopy && onCopy(item, iconRef);
  };

  return (
    <div
      className={cx('track-number')}
      onClick={handleCopy}
      tabIndex={0}
      role='button'
    >
      <div className={cx('title')}>{item.title}</div>
      <div className={cx('content')}>
        {item.trackNumber}
        <div className={cx('icon')} ref={iconRef}>
          <CopySVG />
        </div>
      </div>
    </div>
  );
};
