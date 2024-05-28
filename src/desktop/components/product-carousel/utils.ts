import { useEffect, useState, RefObject, DependencyList } from 'react';

/**
 * Возвращает ширину дочернего элемента.
 * @param ref Ref дочернего элемента.
 * @param deps Массив зависимостей от которых зависит пересчет.
 * @return Ширина.
 */
export function useClientWidth(ref: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;

    const observer = new ResizeObserver(() => {
      setWidth(element.clientWidth);
    });

    observer.observe(element);

    setWidth(element.clientWidth);

    return () => observer.disconnect();
  }, [ref, ...deps]);

  return width;
}
