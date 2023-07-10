import type { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './image-overlay.module.scss';

export type ImageOverlayProps = HTMLAttributes<HTMLDivElement>;

/**
 * Полупрозрачный слой над картинкой по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const ImageOverlay = ({ className, children, ...restProps }: ImageOverlayProps) => (
  <span className={cn(styles.root, className)} {...restProps}>
    {children}
  </span>
);
