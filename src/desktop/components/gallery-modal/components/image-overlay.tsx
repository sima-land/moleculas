import React from 'react';
import cn from 'classnames';
import styles from './image-overlay.module.scss';

export type ImageOverlayProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Полупрозрачный слой над картинкой по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const ImageOverlay = ({ className, children, ...restProps }: ImageOverlayProps) => (
  <div className={cn(styles.root, className)} {...restProps}>
    {children}
  </div>
);
