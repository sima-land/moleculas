import React from 'react';
import cn from 'classnames';
import styles from './image-overlay.module.scss';

export type ImageOverlayProps = React.HTMLAttributes<HTMLDivElement>;

export const ImageOverlay = ({ className, children, ...restProps }: ImageOverlayProps) => (
  <div className={cn(styles.root, className)} {...restProps}>
    {children}
  </div>
);
