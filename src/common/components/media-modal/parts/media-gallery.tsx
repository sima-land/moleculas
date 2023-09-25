import {
  Children,
  CSSProperties,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useMounted } from '../utils';
import classNames from 'classnames/bind';
import styles from './media-gallery.module.scss';

export interface MediaGalleryStyle extends CSSProperties {
  '--media-gallery-width'?: string;
  '--media-gallery-height'?: string;
}

export interface MediaGalleryProps {
  style?: MediaGalleryStyle;
  className?: string;
  children: ReactNode;
  targetIndex?: number;
  onChangeTargetIndex?: (newIndex: number) => void;
  loading?: boolean;
}

const cx = classNames.bind(styles);

const LoopUtil = {
  /**
   * Возвращает индекс предыдущего элемента.
   * @param current Текущий индекс.
   * @param total Всего.
   * @return Индекс.
   */
  getPrevIndex(current: number, total: number) {
    const nextIndex = current - 1;
    return nextIndex < 0 ? total - 1 : nextIndex;
  },

  /**
   * Возвращает индекс следующего элемента.
   * @param current Текущий индекс.
   * @param total Всего.
   * @return Индекс.
   */
  getNextIndex(current: number, total: number) {
    const nextIndex = current + 1;
    return nextIndex >= total ? 0 : nextIndex;
  },
} as const;

/**
 * Отображает медиа-контент в контексте модального окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaGallery({
  className,
  style,
  children,
  targetIndex = 0,
  onChangeTargetIndex,
}: MediaGalleryProps) {
  const mounted = useMounted();
  const slidesRef = useRef<HTMLDivElement>(null);

  const items = Children.toArray(children).filter(
    item => isValidElement(item) && item.type === MediaSlide,
  ) as ReactElement[];

  const total = items.length;

  const totalRef = useRef(total);
  totalRef.current = total;

  const targetIndexRef = useRef(targetIndex);
  targetIndexRef.current = targetIndex;

  const onChangeTargetIndexRef = useRef(onChangeTargetIndex);
  onChangeTargetIndexRef.current = onChangeTargetIndex;

  const moveBackward = useCallback(() => {
    onChangeTargetIndexRef.current?.(
      LoopUtil.getPrevIndex(targetIndexRef.current, totalRef.current),
    );
  }, []);

  const moveForward = useCallback(() => {
    onChangeTargetIndexRef.current?.(
      LoopUtil.getNextIndex(targetIndexRef.current, totalRef.current),
    );
  }, []);

  const target = items[targetIndex];
  const next = items[LoopUtil.getNextIndex(targetIndex, total)];
  const prev = items[LoopUtil.getPrevIndex(targetIndex, total)];

  const { init, getProps } = useMemo(
    () =>
      createSwipe({
        onSwipeStart: () => {
          if (!slidesRef.current) {
            return;
          }

          slidesRef.current.classList.remove(cx('transition'));
        },
        onSwipeMove: ({ distanceX }) => {
          if (!slidesRef.current) {
            return;
          }

          // @todo линейная интерполяция для того чтобы не докручивать до тех слайдов которые не смонтированы
          slidesRef.current.style.setProperty('transform', `translate3d(${distanceX}px, 0, 0)`);
        },
        onSwipeEnd: ({ distanceX, isLeft, isRight }) => {
          const slides = slidesRef.current;

          if (!slides) {
            return;
          }

          if (isLeft) {
            slides.style.setProperty(
              'transform',
              `translate3d(calc(${distanceX}px - var(--media-gallery-width)), 0, 0)`,
            );
            moveBackward();
          }

          if (isRight) {
            slides.style.setProperty(
              'transform',
              `translate3d(calc(${distanceX}px + var(--media-gallery-width)), 0, 0)`,
            );
            moveForward();
          }

          // ВАЖНО: здесь должны быть именно два requestAnimationFrame, один внутри другого
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              slides.classList.add(cx('transition'));
              slides.style.setProperty('transform', `translate3d(0px, 0, 0)`);
            });
          });
        },
      }),
    [moveBackward, moveBackward],
  );

  useEffect(() => init(), [init]);

  return (
    <div className={cx('root', className)} style={style} {...getProps()}>
      {mounted && (
        <>
          <div ref={slidesRef} className={cx('slides')}>
            {/* ВАЖНО: прокидываем key чтобы предотвратить размонтирование слайдов */}
            {prev && (
              <div key={prev.key} className={cx('slide', 'prev')}>
                {prev}
              </div>
            )}
            {target && (
              <div key={target.key} className={cx('slide', 'current')}>
                {target}
              </div>
            )}
            {next && (
              <div key={next.key} className={cx('slide', 'next')}>
                {next}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Слот слайда галереи.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaSlide({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/**
 * Получив пропсы items и children вернет массив пропсов для MediaView.
 * @param props Свойства.
 * @return Пропсы.
 */
function createSwipe({
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
}: {
  onSwipeStart?: VoidFunction;
  onSwipeMove?: (event: { startX: number; distanceX: number }) => void;
  onSwipeEnd?: (event: {
    startX: number;
    distanceX: number;
    isLeft: boolean;
    isRight: boolean;
  }) => void;
} = {}): { getProps: () => HTMLAttributes<HTMLElement>; init: () => VoidFunction } {
  let pointerCount = 0;
  let captureId: any = null;
  let startX = 0;

  // eslint-disable-next-line require-jsdoc
  const getProps: () => HTMLAttributes<HTMLElement> = () => ({
    onPointerDown: event => {
      if (captureId !== null) {
        return;
      }

      captureId = event.pointerId;
      startX = event.clientX;

      event.preventDefault();

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      onSwipeStart?.();
    },
  });

  // eslint-disable-next-line require-jsdoc
  const init = () => {
    // eslint-disable-next-line require-jsdoc
    const onPointerDown = () => {
      pointerCount++;
    };

    // eslint-disable-next-line require-jsdoc
    const onPointerMove = (event: PointerEvent) => {
      if (captureId !== event.pointerId) {
        return;
      }

      if (pointerCount > 1) {
        return;
      }

      onSwipeMove?.({
        startX,
        distanceX: event.clientX - startX,
      });
    };

    // eslint-disable-next-line require-jsdoc
    const onPointerUp = (event: PointerEvent) => {
      pointerCount--;

      if (captureId === null) {
        return;
      }

      captureId = null;

      const diff = event.clientX - startX;

      onSwipeEnd?.({
        startX,
        distanceX: diff,
        isLeft: Math.abs(diff) > 64 && diff > 0,
        isRight: Math.abs(diff) > 64 && diff < 0,
      });
    };

    // eslint-disable-next-line require-jsdoc
    const onPointerCancel = () => {
      pointerCount--;
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
    };
  };

  return { init, getProps };
}