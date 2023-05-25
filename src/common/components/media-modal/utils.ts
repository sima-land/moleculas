import { RefObject, useEffect, useState } from 'react';

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

  useEffect(() => {
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
 * Возвращает true если компонент смонтирован.
 * @return True если компонент смонтирован.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}
