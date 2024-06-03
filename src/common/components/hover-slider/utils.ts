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
