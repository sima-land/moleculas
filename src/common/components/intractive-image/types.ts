import type { CSSProperties } from 'react';

export interface InteractiveImageStyle extends CSSProperties {
  '--dot-size'?: string;
  '--dot-size-core'?: string;
}

export interface InteractiveImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер точек. При указании "unset" можно задать css-переменные через className или style. */
  dotSize?: 'unset';

  /** Стили с возможностью указания размера точек через css-переменные. */
  style?: InteractiveImageStyle;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export interface InteractiveImageImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export interface InteractiveImagePointProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  x: number;
  y: number;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
