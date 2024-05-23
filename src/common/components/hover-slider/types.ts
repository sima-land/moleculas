import type { HTMLAttributes } from 'react';

export interface HoverSliderProps extends HTMLAttributes<HTMLDivElement> {}

export interface HoverSliderItemProps extends HTMLAttributes<HTMLDivElement> {}

export interface HoverSliderContextValue {
  itemMounted: (itemId: string) => void;
  itemUnmounted: (itemId: string) => void;
}
