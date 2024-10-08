import { useIsomorphicLayoutEffect, useIdentityRef } from '@sima-land/ui-nucleons/hooks';
import { RefObject, useEffect, useState } from 'react';

export interface IRange {
  start: number;
  finish: number;
}

/** Диапазон. */
export class Range {
  /**
   * Возвращает диапазон на основе вертикального размера элемента.
   * @param el Элемент.
   * @return Диапазон.
   */
  static fromRectVertical(el: Element): IRange {
    const rect = el.getBoundingClientRect();

    return {
      start: rect.top,
      finish: rect.bottom,
    };
  }

  /**
   * Возвращает диапазон на основе вертикального размера элемента.
   * @param el Элемент.
   * @return Диапазон.
   */
  static fromRectHorizontal(el: Element): IRange {
    const rect = el.getBoundingClientRect();

    return {
      start: rect.left,
      finish: rect.right,
    };
  }

  /**
   * Возвращает кратчайшее расстояние от диапазона до другого диапазона на которое нужно сместиться.
   * @param range Диапазон.
   * @param target Диапазон.
   * @return Расстояние.
   */
  static getShiftDistance(range: IRange, target: IRange) {
    let result = 0;

    if (target.finish > range.finish) {
      result = target.finish - range.finish;
    } else if (target.start < range.start) {
      result = -(range.start - target.start);
    }

    return result;
  }
}

/**
 * Возвращает ограничивающий прямоугольник элемента в виде состояния.
 * @param ref Ref элемента.
 * @return Прямоугольник.
 */
export function useClientRect(ref: RefObject<HTMLElement>) {
  const [rect, setRect] = useState<{ ready: boolean; width: number; height: number }>(() => ({
    ready: false,
    width: 0,
    height: 0,
  }));

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const element = ref.current;

      setRect({
        ready: true,
        width: element.getBoundingClientRect().width,
        height: element.getBoundingClientRect().height,
      });

      const observer = new ResizeObserver(() => {
        setRect({
          ready: true,
          width: element.getBoundingClientRect().width,
          height: element.getBoundingClientRect().height,
        });
      });

      observer.observe(element);

      return () => observer.disconnect();
    }
  }, [ref]);

  return rect;
}

/**
 * Хук получения доступа к visualViewport.
 * @param handle Получит visualViewport.
 */
export function useVisualViewport(handle: (viewport: VisualViewport) => void) {
  const ref = useIdentityRef(handle);

  useEffect(() => {
    const viewport = window.visualViewport;

    if (!viewport) {
      return;
    }

    // eslint-disable-next-line jsdoc/require-jsdoc
    const update = () => ref.current(viewport);

    window.addEventListener('resize', update);
    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);

    update();

    return () => {
      window.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
    };
  }, []);
}
