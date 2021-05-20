import React, { useCallback, useState, useRef } from 'react';
import { Modal } from '@dev-dep/ui-nucleons/modal';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classNames from 'classnames/bind';
import classes from './tracking-info-modal.scss';
import DeliveryImg from '../../../common/images/tracking-info-delivery.png';
import { isNil, map } from 'lodash';
import { TrackNumber } from '../../../common/components/track-number';
import { Hint } from '@dev-dep/ui-nucleons/hint';

export interface TrackingInfoModalProps {
  trackNumbers?: {
    trackNumber?: string;
    title?: string;
  }[];
  deliverySite?: string;
  onCopy?: (item: any) => any;
}

const cx = classNames.bind(classes);
const HINT_DISPLAY_DURATION = 3000;

/**
 * Компонент отслеживания номера.
 * @param props Свойства компонента.
 * @param props.trackNumbers Трек-номера заказа.
 * @param props.deliverySite Адрес сайта доставки.
 * @param props.onCopy Обработчик клика элементу трек номера.
 * @return Компонент отслеживания номера.
 */
export const TrackingInfoModal = ({ trackNumbers, deliverySite, onCopy }: TrackingInfoModalProps) => {
  const [hintOffset, setHintOffset] = useState<{ top: number, left: number } | null>(null);
  const timerId = useRef<number>();

  const handleCopy = useCallback((item, iconRef) => {
    onCopy && onCopy(item);

    toggleHint();

    const { top, left, width } = iconRef.current.getBoundingClientRect();

    setHintOffset({
      top,

      // Отступ слева + половина ширины иконки
      left: left + (width / 2),
    });
  }, [onCopy]);

  /**
   * Функция отображения - скрытия подсказки.
   */
  const toggleHint = () => {
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      setHintOffset(null);
    }, HINT_DISPLAY_DURATION);
  };

  return (
    <Modal
      withCloseButton
      children={(
        <div className={cx('wrap')} onScroll={() => setHintOffset(null)}>
          <img src={DeliveryImg} alt='' width={324} />
          <div className={cx('text')}>
            {`Чтобы узнать, где находится ваше отправление, введите на
            сайте ${deliverySite} в разделе отслеживания трек-номера посылок:`}
          </div>
          <div className={cx('track-numbers')}>
            {map(trackNumbers, (item, key) => (<TrackNumber onCopy={handleCopy} item={item} key={key} />))}
          </div>
          <Hint direction='top'
            className={cx('hint')}
            style={{
              top: (hintOffset as any)?.top,
              left: (hintOffset as any)?.left,
              visibility: isNil(hintOffset) ? 'hidden' : 'visible',
            }}
          >
            Трек-номер скопирован
          </Hint>
        </div>
      )}
      footer={(
        <Clean.Group>
          <Clean.Button href={deliverySite}>
            Перейти на {deliverySite}
          </Clean.Button>
        </Clean.Group>
      )}
    />
  );
};
