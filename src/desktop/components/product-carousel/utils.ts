import { useCallback, useEffect, useRef, useState, RefObject, DependencyList } from 'react';

/**
 * Возвращает объект работы с флагом, который автоматически возвращается в true через заданный промежуток времени.
 * @return Объект работы с флагом.
 */
export const useAllowFlag = () => {
  const ref = useRef(true);
  const timerIdRef = useRef<number>();

  const allowed = useCallback(() => ref.current, []);

  const disallowFor = useCallback((timeout: number) => {
    window.clearTimeout(timerIdRef.current);
    ref.current = false;
    timerIdRef.current = window.setTimeout(() => (ref.current = true), timeout);
  }, []);

  const controlRef = useRef({ allowed, disallowFor });

  return controlRef.current;
};

/**
 * Возвращает ширину дочернего элемента.
 * @param ref Ref дочернего элемента.
 * @param deps Массив зависимостей от которых зависит пересчет.
 * @return Ширина.
 */
export const useClientWidth = (ref: RefObject<HTMLElement | null>, deps: DependencyList = []) => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;

    const observer = new ResizeObserver(() => {
      setWidth(element.clientWidth);
    });

    observer.observe(ref.current);

    setWidth(element.clientWidth);

    return observer.disconnect();
  }, [ref, ...deps]);

  return width;
};
