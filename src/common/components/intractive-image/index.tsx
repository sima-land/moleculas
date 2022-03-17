import React, { Children, forwardRef, isValidElement } from 'react';
import classNames from 'classnames';
import styles from './interactive-image.module.scss';

export interface InteractiveImageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface InteractiveImageImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  'data-testid'?: string;
}

export interface InteractiveImagePointProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  x: number;
  y: number;
  'data-testid'?: string;
}

export const InteractiveImage = ({
  children,
  'data-testid': testId,
  className,
  ...rest
}: InteractiveImageProps) => (
  <div className={classNames(styles.root, className)} {...rest} data-testid={testId}>
    {Children.toArray(children).filter(
      child => isValidElement(child) && (child.type === Image || child.type === Point),
    )}
  </div>
);

const Image = forwardRef<HTMLImageElement, InteractiveImageImageProps>(
  ({ className, 'data-testid': testId = 'interactive-image:image', ...rest }, ref) => (
    <img ref={ref} className={classNames(styles.image, className)} data-testid={testId} {...rest} />
  ),
);

const Point = forwardRef<HTMLAnchorElement, InteractiveImagePointProps>(
  ({ x, y, className, style, 'data-testid': testId = 'interactive-image:point', ...rest }, ref) => (
    <a
      ref={ref}
      aria-label='Точка на изображении'
      data-testid={testId}
      className={classNames(styles.point, className)}
      style={{ ...style, top: `${y}%`, left: `${x}%` }}
      {...rest}
    />
  ),
);

export const Parts = { Image, Point } as const;
