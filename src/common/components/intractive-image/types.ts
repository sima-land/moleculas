import type { HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, CSSProperties } from 'react';

/** @deprecated */
export interface InteractiveImageStyle extends CSSProperties {
  '--dot-size'?: string;
  '--dot-size-core'?: string;
}

/** @deprecated */
export interface InteractiveImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер точек. При указании "unset" можно задать css-переменные через className или style. */
  dotSize?: 'unset';

  /** Стили с возможностью указания размера точек через css-переменные. */
  style?: InteractiveImageStyle;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

/** @deprecated */
export interface InteractiveImageImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

/** @deprecated */
export interface InteractiveImagePointProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  x: number;
  y: number;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
