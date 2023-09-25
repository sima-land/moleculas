import type { CSSProperties, ReactNode } from 'react';

export interface MediaGalleryStyle extends CSSProperties {
  '--media-gallery-width'?: string;
  '--media-gallery-height'?: string;
}

export interface MediaGalleryProps {
  style?: MediaGalleryStyle;
  className?: string;
  children: ReactNode;
  targetIndex?: number;
  onChangeTargetIndex?: (newIndex: number) => void;
}
