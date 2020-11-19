import React from 'react';
import classNames from 'classnames/bind';
import classes from './tracking-info.scss';
import DeliveryImg from '../../images/tracking-info-delivery.png';
import CopySVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/copy';
import Types from 'prop-types';

const cx = classNames.bind(classes);

/**
 * Компонент отслеживания по трек номеру.
 * @param {Object} props Свойства.
 * @param {string} props.trackNumber Трек номер.
 * @param {string} props.deliverySite Сайт компании доставки.
 * @param {Function} props.onCopy Callback копирования номера.
 * @param {boolean} props.isMobile Признак мобильной версии компонента.
 * @return {ReactElement} Компонент отслеживания по трек номеру.
 */
export const TrackingInfo = ({
  trackNumber,
  deliverySite,
  onCopy,
  isMobile,
}) => {
  /**
   * Копирование трек номера.
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(trackNumber);
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

TrackingInfo.propTypes = {

  /**
   * Трек-номер.
   */
  trackNumber: Types.string,

  /**
   * Адрес сайта доставки.
   */
  deliverySite: Types.string,

  /**
   * Функция для обработки клика по трек номеру.
   */
  onCopy: Types.func,

  /**
   * Признак мобильной версии.
   */
  isMobile: Types.bool,
};
