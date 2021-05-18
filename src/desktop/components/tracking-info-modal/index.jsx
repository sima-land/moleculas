import React, { useCallback, useState } from 'react';
import { Modal } from '@dev-dep/ui-nucleons/modal';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classNames from 'classnames/bind';
import classes from './tracking-info-modal.scss';
import DeliveryImg from '../../../common/images/tracking-info-delivery.png';
import { isNil, map } from 'lodash';
import { TrackNumber } from '../../../common/components/track-number';
import Types from 'prop-types';
import { Hint } from '@dev-dep/ui-nucleons/hint';

const cx = classNames.bind(classes);

const HINT_DISPLAY_DURATION = 3000;

/**
 * Компонент отслеживания номера.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.trackNumbers Трек-номера заказа.
 * @param {string} props.deliverySite Адрес сайта доставки.
 * @param {Function} props.onCopy Обработчик клика элементу трек номера.
 * @return {ReactElement} Компонент отслеживания номера.
 */
export const TrackingInfoModal = ({
  trackNumbers,
  deliverySite,
  onCopy,
}) => {
  const [hintOffset, setHintOffset] = useState(null);

  const timerId = React.createRef();

  const handleCopy = useCallback(
    (item, iconRef) => {
      onCopy(item);
      toggleHint();

      const { top, left, width } = iconRef.current.getBoundingClientRect();

      setHintOffset({
        top,

        // Отступ слева + половина ширины иконки
        left: left + (width / 2),
      });
    },
    [onCopy]
  );

  /**
   * Функция отображения - скрытия подсказки.
   */
  const toggleHint = () => {
    clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      setHintOffset(null);
    }, HINT_DISPLAY_DURATION);
  };

  return (
    <Modal
      extended
      withCloseButton
      footer={(
        <Clean.Group>
          <Clean.Button href={deliverySite}>Перейти на {deliverySite}</Clean.Button>
        </Clean.Group>
      )}
    >
      <div className={cx('wrap')} onScroll={() => setHintOffset(null)}>
        <img src={DeliveryImg} alt='' width={324} />
        <div className={cx('text')}>
          {
          `Чтобы узнать, где находится ваше отправление, введите на 
          сайте ${deliverySite} в разделе отслеживания трек-номера посылок:`
          }
        </div>
        <div className={cx('track-numbers')}>
          {
            map(trackNumbers, (item, key) => (
              <TrackNumber onCopy={handleCopy} item={item} key={key} />
            ))
          }
        </div>
        <Hint
          direction='top'
          className={cx('hint')}
          style={{
            top: hintOffset?.top,
            left: hintOffset?.left,
            visibility: isNil(hintOffset) ? 'hidden' : 'visible',
          }}
        >
          Трек-номер скопирован
        </Hint>
      </div>
    </Modal>
  );
};

TrackingInfoModal.propTypes = {
  trackNumbers: Types.arrayOf(
    Types.shape({
      trackNumber: Types.string,
      title: Types.string,
    })
  ),
  deliverySite: Types.string,
  onCopy: Types.func,
};
