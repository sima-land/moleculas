import type { CSSProperties, HTMLAttributes, ImgHTMLAttributes, ReactNode, Ref } from 'react';

export interface ProductImageStyle extends CSSProperties {
  '--product-image-width'?: string;
  '--product-image-height'?: string;
  '--product-image-object-fit'?: string;
  '--product-image-overlay-color'?: string;
}

export interface ProductImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Источник изображения. */
  src?: string;

  /** Альтернативный текст. */
  alt?: string;

  /** Нужно ли размыть изображение и добавить маркировку 18+. */
  adult?: boolean;

  /** Стили корневого элемента. */
  style?: ProductImageStyle;

  /** Класс корневого элемента. */
  className?: string;

  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Реф элемента img. */
  imageRef?: Ref<HTMLImageElement>;

  /** Прочие свойства элемента img. */
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;

  /** Доп.контент, который будет выведен при adult=true. */
  adultContent?: ReactNode;

  /** Доп.контент, который будет выведен при ошибке загрузки. */
  stubContent?: ReactNode;
}
