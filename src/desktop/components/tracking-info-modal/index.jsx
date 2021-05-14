import React, { useCallback, useState } from 'react';
import { Modal } from '@dev-dep/ui-nucleons/modal';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classNames from 'classnames/bind';
import classes from './tracking-info-modal.scss';
import DeliveryImg from '../../../common/images/tracking-info-delivery.png';
import { map } from 'lodash';
import { TrackNumber } from '../../../common/components/track-number';
import Types from 'prop-types';
import { Hint } from '@dev-dep/ui-nucleons/hint';

const cx = classNames.bind(classes);

// отступ в половину высоты элемента свг 8пх + отступ от границы  (по макету 5 пх)
const OFFSET_TO_BUTTON = 13;

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
  const [hintOffset, setHintOffset] = useState(0);

  const timerId = React.createRef();

  const handleCopy = useCallback(
    (item, ref) => {
      onCopy(item);
      toggleHint();
      const { parentNode, offsetTop } = ref.current;
      const { offsetTop: parentOffsetTop, parentNode: wrapNode } = parentNode;
      const { scrollTop } = wrapNode;

      const hintPosition = (offsetTop + parentOffsetTop) - scrollTop;
      setHintOffset(hintPosition - OFFSET_TO_BUTTON);
    },
    [onCopy]
  );

  /**
   * Функция отображения - скрытия подсказки.
   */
  const toggleHint = () => {
    clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      setHintOffset(0);
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
      <div className={cx('wrap')} onScroll={() => setHintOffset(0)}>
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
        {
          hintOffset
            ? (
              <div
                className={cx('hint')}
                style={{
                  top: hintOffset,
                }}
              >
                <Hint direction='top'>Трек-номер скопирован</Hint>
              </div>
            )
            : null
        }

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
