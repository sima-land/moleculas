import type { HTMLAttributes, ReactNode } from 'react';

export interface HoverSliderProps extends HTMLAttributes<HTMLDivElement> {
  withNav?: boolean;
  beforeList?: ReactNode;
  afterList?: ReactNode;
}

export interface HoverSliderItemProps extends HTMLAttributes<HTMLDivElement> {}

export interface HoverSliderNavProps extends HTMLAttributes<HTMLDivElement> {
  current: number;
  total: number;
}

export interface HoverSliderContextValue {
  itemMounted: (itemId: string) => void;
  itemUnmounted: (itemId: string) => void;
}
