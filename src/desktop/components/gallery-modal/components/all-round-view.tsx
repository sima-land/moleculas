import { useState, useRef, useEffect } from 'react';
import { useIdentityRef } from '@sima-land/ui-nucleons/hooks';
import { on } from '@sima-land/ui-nucleons/helpers';
import { useImagesLoad } from '../utils';
import classNames from 'classnames/bind';
import styles from './all-round-view.m.scss';
import AllRoundSVG from '@sima-land/ui-quarks/icons/40x40/Filled/Viewing360Perspective';
import PauseSVG from '@sima-land/ui-quarks/icons/40x40/Filled/Pause';
import TurnLeftSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowTurnLeft';
import TurnRightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowTurnRight';
import { ImgStub } from '../../../../common/components/img-stub';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';

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

  // eslint-disable-next-line jsdoc/require-jsdoc
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
    // eslint-disable-next-line jsdoc/require-jsdoc
    const wrap = (value: number) => (photos.length + value) % photos.length;

    const image = imageRef.current;

    if (!image) {
      return;
    }

    const offList = [
      on<PointerEvent>(image, 'pointerdown', e => {
        e.preventDefault();
        e.stopPropagation();

        // ВАЖНО: preventDefault предотвращает расфокусировку полей ввода - форсируем
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }

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

  // состояние
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });

  // пользовательское взаимодействие
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <div className={cx('root')}>
      {failed && <ImgStub className={cx('stub')} />}
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

          <button
            ref={refs.setReference}
            {...getReferenceProps()}
            className={cx('control', 'primary', autoplay && 'pause')}
            onClick={() => {
              setState(s => (s === 'autoplay' ? 'default' : 'autoplay'));
            }}
            data-testid='gallery-modal:toggle-autoplay-button'
          >
            {autoplay ? <PauseSVG /> : <AllRoundSVG />}
          </button>

          {autoplay && (
            <Hint
              open={open}
              hintRef={refs.setFloating}
              arrowRef={refs.setArrow}
              {...getFloatingProps()}
            >
              <>
                Вы можете вращать товар,
                <br />
                зажав левую кнопку
                <br />
                мыши на фотографии
              </>
            </Hint>
          )}

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
