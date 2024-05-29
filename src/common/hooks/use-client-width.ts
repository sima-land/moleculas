import { useEffect, useState, RefObject, DependencyList } from 'react';

/**
 * Возвращает актуальное значение clientWidth элемента.
 * @param ref Ref с элементом.
 * @param deps Массив зависимостей от которых зависит пересчет.
 * @return Значение свойства clientWidth.
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
