import React, { useCallback } from 'react';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classNames from 'classnames/bind';
import classes from './tracking-info-screen.scss';
import DeliveryImg from '../../../common/images/tracking-info-delivery.png';
import map from 'lodash/map';
import { TrackNumber } from '../../../common/components/track-number';
import Types from 'prop-types';
import { Screen } from '@dev-dep/ui-nucleons/screen';

const cx = classNames.bind(classes);

/**
 * Компонент отслеживания номера.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.trackNumbers Трек-номера заказа.
 * @param {string} props.deliverySite Адрес сайта доставки.
 * @param {Function} props.onCopy Обработчик клика элементу трек номера.
 * @param {Function} props.onClose Обработчик клика по кнопке "Закрыть".
 * @return {ReactElement} Компонент отслеживания номера.
 */
export const TrackingInfoScreen = ({
  trackNumbers,
  deliverySite,
  onCopy,
  onClose,
}) => {
  const handleCopy = useCallback(
    item => {
      onCopy(item);
    },
    [onCopy]
  );

  return (
    <Screen
      withDivideHeader={false}
      withCloseButton
      onClose={onClose}
      footer={(
        <Clean.Group>
          <Clean.Button
            target='_blank'
            rel='noopener noreferrer'
            href={deliverySite}
          >
            Перейти на {deliverySite}
          </Clean.Button>
        </Clean.Group>
      )}
    >
      <div className={cx('wrap')}>
        <img src={DeliveryImg} alt='' width={324} />
        <div className={cx('text')}>
          {
          `Чтобы узнать, где находится ваша посылка, введите на сайте ${deliverySite} 
          в разделе отслеживания свой трек-номер:`
          }
        </div>
        <div className={cx('track-numbers')}>
          {
            map(trackNumbers, (item, key) => (
              <TrackNumber onCopy={handleCopy} item={item} key={key} />
            ))
          }
        </div>
      </div>
    </Screen>
  );
};

TrackingInfoScreen.propTypes = {
  trackNumbers: Types.arrayOf(
    Types.shape({
      trackNumber: Types.string,
      title: Types.string,
    })
  ),
  deliverySite: Types.string,
  onCopy: Types.func,
  onClose: Types.func,
};
