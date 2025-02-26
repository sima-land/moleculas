import { createContext, useMemo, useState } from 'react';
import { HoverSliderContextValue } from './types';

export const HoverSliderContext = createContext<HoverSliderContextValue>({
  itemMounted: () => {},
  itemUnmounted: () => {},
});

/** @inheritdoc */
export function useSlideCount() {
  const [slideIds, setSlideIds] = useState<string[]>(() => []);

  const contextValue = useMemo<HoverSliderContextValue>(
    () => ({
      itemMounted: itemId => {
        setSlideIds(list => (list.includes(itemId) ? list : [...list, itemId]));
      },
      itemUnmounted: itemId => {
        setSlideIds(list => (list.includes(itemId) ? list.filter(item => item !== itemId) : list));
      },
    }),
    [],
  );

  return { count: slideIds.length, contextValue };
}

/**
 * @param fn Функция вызова.
 * @param ms Задержка в миллисекундах.
 * @return Функция вызова.
 */
export const debounce = <T>(fn: (...args: T[]) => void, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
