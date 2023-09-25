import { Children, HTMLAttributes, isValidElement, ReactNode, useCallback, useRef } from 'react';
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
  );

  const total = items.length;

  const moveBackward = useCallback(() => {
    onChangeTargetIndex?.(LoopUtil.getPrevIndex(targetIndex, total));
  }, [total, targetIndex, onChangeTargetIndex]);

  const moveForward = useCallback(() => {
    onChangeTargetIndex?.(LoopUtil.getNextIndex(targetIndex, total));
  }, [total, targetIndex, onChangeTargetIndex]);

  const target = items[targetIndex];

  const next = items[LoopUtil.getNextIndex(targetIndex, total)];
  const prev = items[LoopUtil.getPrevIndex(targetIndex, total)];

  return (
    <div
      className={cx('root')}
      {...getSwipeProps({
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
        onSwipeEnd: ({ distanceX }) => {
          const slides = slidesRef.current;

          if (!slides) {
            return;
          }

          slides.style.setProperty(
            'transform',
            distanceX > 0
              ? `translate3d(calc(${distanceX}px - var(--media-gallery-width)), 0, 0)`
              : `translate3d(calc(${distanceX}px + var(--media-gallery-width)), 0, 0)`,
          );

          // ВАЖНО: здесь должны быть именно два requestAnimationFrame, один внутри другого
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              slides.classList.add(cx('transition'));
              slides.style.setProperty('transform', `translate3d(0px, 0, 0)`);
            });
          });
        },
        onSwipeLeftEnd: moveBackward,
        onSwipeRightEnd: moveForward,
      })}
    >
      {mounted && (
        <>
          <div ref={slidesRef} className={cx('slides')}>
            {prev && <div className={cx('slide', 'prev')}>{prev}</div>}
            {target && <div className={cx('slide', 'current')}>{target}</div>}
            {next && <div className={cx('slide', 'next')}>{next}</div>}
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
function getSwipeProps({
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
  onSwipeLeftEnd,
  onSwipeRightEnd,
}: {
  onSwipeStart?: VoidFunction;
  onSwipeMove?: (event: { startX: number; distanceX: number }) => void;
  onSwipeEnd?: (event: { startX: number; distanceX: number }) => void;
  onSwipeLeftEnd?: VoidFunction;
  onSwipeRightEnd?: VoidFunction;
} = {}): HTMLAttributes<HTMLElement> {
  let startX = 0;
  let capture = false;

  return {
    onPointerDown: event => {
      event.preventDefault();

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      onSwipeStart?.();

      startX = event.clientX;
      capture = true;
    },

    onPointerMove: event => {
      if (!capture) {
        return;
      }

      onSwipeMove?.({ startX, distanceX: event.clientX - startX });
    },

    onPointerUp: event => {
      if (!capture) {
        return;
      }

      const diff = event.clientX - startX;

      if (Math.abs(diff) > 64) {
        if (diff > 0) {
          onSwipeLeftEnd?.();
        }

        if (diff < 0) {
          onSwipeRightEnd?.();
        }

        onSwipeEnd?.({ startX, distanceX: diff });
      }

      capture = false;
    },
  };
}
