import {
  Children,
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

export interface MediaGalleryProps {
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
    <div className={cx('root')} {...getProps()}>
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
  let startX = 0;
  let capture = false;

  // eslint-disable-next-line require-jsdoc
  const getProps: () => HTMLAttributes<HTMLElement> = () => ({
    onPointerDown: event => {
      event.preventDefault();

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      onSwipeStart?.();

      startX = event.clientX;
      capture = true;
    },
  });

  // eslint-disable-next-line require-jsdoc
  const init = () => {
    // eslint-disable-next-line require-jsdoc
    const onPointerMove = (event: PointerEvent) => {
      if (!capture) {
        return;
      }

      onSwipeMove?.({ startX, distanceX: event.clientX - startX });
    };

    // eslint-disable-next-line require-jsdoc
    const onPointerUp = (event: PointerEvent) => {
      if (!capture) {
        return;
      }

      const diff = event.clientX - startX;

      onSwipeEnd?.({
        startX,
        distanceX: diff,
        isLeft: Math.abs(diff) > 64 && diff > 0,
        isRight: Math.abs(diff) > 64 && diff < 0,
      });

      capture = false;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  };

  return { init, getProps };
}
