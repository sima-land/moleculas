import React, { useCallback, useEffect, useRef, useState } from 'react';
import on from '@sima-land/ui-nucleons/helpers/on';

/**
 * Возвращает объект работы с флагом, который автоматически возвращается в true через заданный промежуток времени.
 * @return Объект работы с флагом.
 */
export const useAllowFlag = () => {
  const ref = useRef(true);
  const timerIdRef = useRef<number>();

  const allowed = useCallback(() => ref.current, []);

  const disallowFor = useCallback(timeout => {
    window.clearTimeout(timerIdRef.current);
    ref.current = false;
    timerIdRef.current = window.setTimeout(() => (ref.current = true), timeout);
  }, []);

  const controlRef = useRef({ allowed, disallowFor });

  return controlRef.current;
};

/**
 * Возвращает ширину дочернего элемента.
 * @param ref Ref элемента.
 * @param selector CSS-селектор дочернего элемента.
 * @param deps Массив зависимостей от которых зависит пересчет.
 * @return Ширина.
 */
export const useChildWidth = (
  ref: React.RefObject<HTMLElement | null>,
  selector: string,
  deps?: React.DependencyList,
) => {
  const [itemWidth, setItemWidth] = useState<number | null>(null);

  const update = useCallback(() => {
    if (ref.current) {
      const child = ref.current.querySelector(selector);

      child && setItemWidth(child.clientWidth);
    }
  }, [ref]);

  useEffect(() => {
    ref.current && update();

    return on(window, 'resize', update);
  }, deps);

  return itemWidth;
};
