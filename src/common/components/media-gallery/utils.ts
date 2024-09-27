import { HTMLAttributes } from 'react';

export const LoopUtil = {
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
 * Создает объект управления свайпом.
 * @param props Свойства.
 * @return Пропсы.
 */
export function createSwipe({
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

  // eslint-disable-next-line jsdoc/require-jsdoc
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

  // eslint-disable-next-line jsdoc/require-jsdoc
  const init = () => {
    // eslint-disable-next-line jsdoc/require-jsdoc
    const onPointerDown = () => {
      pointerCount++;
    };

    // eslint-disable-next-line jsdoc/require-jsdoc
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

    // eslint-disable-next-line jsdoc/require-jsdoc
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

    // eslint-disable-next-line jsdoc/require-jsdoc
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
