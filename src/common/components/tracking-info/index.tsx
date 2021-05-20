import React from 'react';
import classNames from 'classnames/bind';
import classes from './tracking-info.scss';
import DeliveryImg from '../../images/tracking-info-delivery.png';
import CopySVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/copy';

const cx = classNames.bind(classes);

export interface TrackingInfoProps {
  trackNumber?: string
  deliverySite?: string
  onCopy?: () => any
  isMobile?: boolean
}

/**
 * Компонент отслеживания по трек номеру.
 * @param props Свойства.
 * @param props.trackNumber Трек номер.
 * @param props.deliverySite Сайт компании доставки.
 * @param props.onCopy Callback копирования номера.
 * @param props.isMobile Признак мобильной версии компонента.
 * @return Элемент.
 */
export const TrackingInfo = ({ trackNumber, deliverySite, onCopy, isMobile }: TrackingInfoProps) => {
  /**
   * Копирование трек номера.
   */
  const handleCopy = async () => {
    trackNumber && await navigator.clipboard.writeText(trackNumber);
    onCopy && onCopy();
  };

  return (
    <div className={cx('wrap')}>
      <img src={DeliveryImg} alt='' width={isMobile ? '100%' : 324} />
      <div className={cx('text')}>
        {
          `Чтобы узнать, где находится ваша посылка, введите на сайте ${deliverySite}
          в разделе отслеживания свой трек-номер:`
        }
      </div>
      <div
        className={cx('track-number')}
        onClick={handleCopy}
        tabIndex={0}
        role='button'
      >
        {trackNumber}
        <CopySVG className={cx('icon')} />
      </div>
    </div>
  );
};
