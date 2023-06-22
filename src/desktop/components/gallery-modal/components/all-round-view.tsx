import React, { useState, useRef, useEffect } from 'react';
import { useIdentityRef } from '@sima-land/ui-nucleons/hooks/identity';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';
import on from '@sima-land/ui-nucleons/helpers/on';
import { useImagesLoad } from '../utils';
import classNames from 'classnames/bind';
import styles from './all-round-view.module.scss';
import AllRoundSVG from '../icons/360.svg';
import PauseSVG from '../icons/pause.svg';
import TurnLeftSVG from '../icons/turn-left.svg';
import TurnRightSVG from '../icons/turn-right.svg';
import BrokenSVG from '../../../../common/icons/image-broken.svg';

export interface AllRoundViewProps {
  photos: string[];
  controls?: boolean;
  state?: ViewState;
  onStateChange?: (state: ViewState) => void;
}

export type ViewState = 'default' | 'autoplay' | 'turn-right' | 'turn-left';

const cx = classNames.bind(styles);

/**
 * 3д-просмотр.
 * @param props Свойства.
 * @return Элемент.
 */
export const AllRoundView = ({
  photos,
  controls = true,
  state: stateProp = 'autoplay',
  onStateChange,
}: AllRoundViewProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const dragStartRef = useRef<{ position: number; index: number } | null>(null);

  const [state, setState] = useState<ViewState>(stateProp);

  useEffect(() => onStateChange?.(state), [state]);
  useEffect(() => setState(stateProp), [stateProp]);

  const autoplay = state === 'autoplay';

  // eslint-disable-next-line require-jsdoc
  const ChangeState = (bindState: ViewState) => () => setState(bindState);

  const [index, setIndex] = useState<number>(0);
  const indexRef = useIdentityRef(index);
  const imagesStatus = useImagesLoad(photos);
  const ready = imagesStatus === 'done';
  const failed = imagesStatus === 'fail';

  // запуск/остановка вращения
  useEffect(() => {
    if (state !== 'default' && ready) {
      const timerId = window.setInterval(() => {
        const increment = state === 'turn-left' ? -1 : 1;

        setIndex((photos.length + (indexRef.current + increment)) % photos.length);
      }, 1000 / 30);

      return () => window.clearInterval(timerId);
    }
  }, [state, ready]);

  // перетаскивание
  useEffect(() => {
    // переданное число всегда замениться на такое, которое будет в промежутке от 0 до количества фото
    // eslint-disable-next-line require-jsdoc
    const wrap = (value: number) => (photos.length + value) % photos.length;

    const image = imageRef.current;

    if (!image) {
      return;
    }

    const offList = [
      on<PointerEvent>(image, 'pointerdown', e => {
        e.preventDefault();
        setState('default');

        const imageLeft = image.getBoundingClientRect().left;
        image.style.touchAction = 'none';

        dragStartRef.current = {
          position: e.clientX - imageLeft,
          index: indexRef.current,
        };
      }),

      on<PointerEvent>(window, 'pointermove', e => {
        if (dragStartRef.current !== null) {
          const imageWidth = image.clientWidth;
          const imageLeft = image.getBoundingClientRect().left;
          const startX = dragStartRef.current.position;
          const currentX = e.clientX - imageLeft;

          const startPos = wrap(Math.round((startX * photos.length) / imageWidth));
          const currentPos = wrap(Math.round((currentX * photos.length) / imageWidth));
          const nextIndex = wrap(dragStartRef.current.index + (currentPos - startPos));

          setIndex(nextIndex);
        }
      }),

      on<PointerEvent>(window, 'pointerup', () => {
        dragStartRef.current = null;
        image.style.touchAction = '';
      }),
    ];

    return () => offList.forEach(fn => fn());
  }, [photos.length, failed]);

  const HINT = (
    <>
      Вы можете вращать товар,
      <br />
      зажав левую кнопку
      <br />
      мыши на фотографии
    </>
  );

  return (
    <div className={cx('root')}>
      {failed && <BrokenSVG className={cx('stub')} />}
      {!failed && (
        <img data-testid='gallery-modal:360-current-photo' ref={imageRef} src={photos[index]} />
      )}

      {!failed && controls && (
        <div className={cx('controls')}>
          <button
            className={cx('control', 'turn')}
            disabled={autoplay}
            onPointerDown={ChangeState('turn-left')}
            onPointerUp={ChangeState('default')}
            onPointerLeave={ChangeState('default')}
            data-testid='gallery-modal:360-turn-left-button'
          >
            <TurnRightSVG />
          </button>

          <WithHint hint={HINT}>
            {(ref, toggleHint) => (
              <button
                ref={ref as any}
                className={cx('control', 'primary', autoplay && 'pause')}
                onClick={() => {
                  setState(s => (s === 'autoplay' ? 'default' : 'autoplay'));
                  toggleHint(false);
                }}
                onMouseEnter={() => autoplay && toggleHint(true)}
                onMouseLeave={() => toggleHint(false)}
                data-testid='gallery-modal:toggle-autoplay-button'
              >
                {autoplay ? <PauseSVG /> : <AllRoundSVG />}
              </button>
            )}
          </WithHint>

          <button
            className={cx('control', 'turn')}
            disabled={autoplay}
            onPointerDown={ChangeState('turn-right')}
            onPointerUp={ChangeState('default')}
            onPointerLeave={ChangeState('default')}
            data-testid='gallery-modal:360-turn-right-button'
          >
            <TurnLeftSVG />
          </button>
        </div>
      )}
    </div>
  );
};
