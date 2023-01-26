import React, {
  AnchorHTMLAttributes,
  Children,
  forwardRef,
  isValidElement,
  ReactNode,
} from 'react';
import {
  InteractiveImageProps,
  InteractiveImageImageProps,
  InteractiveImagePointProps,
} from './types';
import classNames from 'classnames/bind';
import styles from './interactive-image.module.scss';

const cx = classNames.bind(styles);

export const InteractiveImage = forwardRef<HTMLDivElement, InteractiveImageProps>(
  ({ children, 'data-testid': testId, className, dotSize, ...rest }, ref) => {
    const rootClassName = cx(
      'root',
      {
        'dot-size-unset': dotSize === 'unset',
      },
      className,
    );

    validateChildren(children);

    return (
      <div ref={ref} className={rootClassName} {...rest} data-testid={testId}>
        {Children.toArray(children).filter(
          child =>
            isValidElement(child) &&
            (child.type === ImageAnchor || child.type === Image || child.type === Point),
        )}
      </div>
    );
  },
);

function validateChildren(children: ReactNode) {
  let counter = 0;

  for (const child of Children.toArray(children)) {
    if (isValidElement(child) && (child.type === ImageAnchor || child.type === Image)) {
      counter++;
    }
    if (counter > 1) {
      throw new Error('[InteractiveImage] Either Image or ImageAnchor allowed. Not both.');
    }
  }
}

function ImageAnchor({ children, className, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      className={cx('image-anchor', className)}
      data-testid='interactive-image:image-anchor'
    >
      {Children.toArray(children).filter(child => isValidElement(child) && child.type === Image)}
    </a>
  );
}

const Image = forwardRef<HTMLImageElement, InteractiveImageImageProps>(
  ({ className, 'data-testid': testId = 'interactive-image:image', ...rest }, ref) => (
    <img ref={ref} className={cx('image', className)} data-testid={testId} {...rest} />
  ),
);

const Point = forwardRef<HTMLAnchorElement, InteractiveImagePointProps>(
  ({ x, y, className, style, 'data-testid': testId = 'interactive-image:point', ...rest }, ref) => (
    <a
      ref={ref}
      aria-label='Точка на изображении'
      data-testid={testId}
      className={cx('point', className)}
      style={{ ...style, top: `${y}%`, left: `${x}%` }}
      {...rest}
    />
  ),
);

export const Parts = { ImageAnchor, Image, Point } as const;
