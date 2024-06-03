import type { WithTestId } from '@sima-land/ui-nucleons/types';
import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';

export interface HoverSliderStyle extends CSSProperties {
  '--hover-slider-width'?: string;
  '--hover-slider-height'?: string;
}

export interface HoverSliderProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Нужно ли показывать навигационные элементы. */
  withNav?: boolean;

  /** Контент перед элементом списка. */
  beforeList?: ReactNode;

  /** Контент после элемента списка. */
  afterList?: ReactNode;

  /** Стили. */
  style?: HoverSliderStyle;

  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;
}

export interface HoverSliderItemProps extends HTMLAttributes<HTMLDivElement> {
  //
}

export interface HoverSliderNavProps extends HTMLAttributes<HTMLDivElement> {
  current: number;
  total: number;
}

export interface HoverSliderContextValue {
  itemMounted: (itemId: string) => void;
  itemUnmounted: (itemId: string) => void;
}
