import React from 'react';
import classnames from 'classnames';
import styles from './image.scss';

type ImgProps = Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'>;

export interface ImageProps extends ImgProps, React.HTMLAttributes<HTMLDivElement> {}

/**
 * Компонент изображения с наложением по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  ...restProps
}: ImageProps) => (
  <div {...restProps} className={classnames(styles.root, className)}>
    <img {...{ src, alt, width, height }} />
  </div>
);
