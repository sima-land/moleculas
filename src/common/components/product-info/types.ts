import type { LinkProps } from '@sima-land/ui-nucleons/link';
import type { StrokedSVGProps } from '@sima-land/ui-nucleons/stroked-svg';
import type { ProductImageProps, ProductImageStyle } from '../product-image';
import type { HoverSliderProps } from '../hover-slider/types';
import type {
  AnchorHTMLAttributes,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
  Ref,
  SVGAttributes,
} from 'react';

export type ProductInfoRestriction = 'adult' | 'unavailable';

export interface ProductInfoProps {
  /** Ограничение товара. Влияет на отображение информации. */
  restriction?: ProductInfoRestriction;

  /** Содержимое. */
  children?: ReactNode;

  /** Нужно ли фильтровать содержимое и четко задавать порядок слотов. */
  strict?: boolean;
}

export interface ProductInfoMediaStyle extends CSSProperties {
  '--product-info-media-ratio'?: string;
}

export interface ProductInfoMediaProps extends HTMLAttributes<HTMLDivElement> {
  /** Включено ли фиксированное соотношение сторон. */
  aspectRatio?: boolean;

  /** Стили. */
  style?: ProductInfoMediaStyle & ProductImageStyle;
}

export interface ProductInfoImageProps extends ProductInfoMediaProps {
  /** Ссылка на товар. */
  href?: string;

  /** Картинки. */
  images?: ProductImageProps[];

  /** Реф элемента-ссылки. */
  anchorRef?: Ref<HTMLAnchorElement>;

  /** Прочие атрибуты элемента-ссылки. */
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;

  /** Свойства слайдера. */
  sliderProps?: HoverSliderProps;
}

export interface ImageButtonProps extends Omit<StrokedSVGProps, 'component'> {
  icon: ElementType<SVGAttributes<SVGSVGElement>>;

  /** Задает абсолютное позиционирование. */
  position?: {
    x: 'left' | 'right';
    y: 'top' | 'bottom';
  };

  /** Хинт. */
  hint?: ReactNode;

  /** Направление хинта. */
  hintDirection?: 'top' | 'left' | 'bottom' | 'right';
}

export interface ProductInfoTitleProps extends LinkProps {
  adultPlaceholder?: ReactNode;
}

export interface ProductInfoPricesProps {
  price: number;
  oldPrice?: number;
  currencyGrapheme?: string;
  unavailableReason?: ReactNode;
}

export interface ProductInfoWaitListAddedLinkProps extends LinkProps {
  contentBefore?: ReactNode;
  rootRef?: Ref<HTMLSpanElement>;
  rootProps?: HTMLAttributes<HTMLSpanElement>;
}

export interface ProductInfoFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ProductInfoCartControlProps {
  children?: ReactNode;
  stepText?: string;
  markupText?: string;
  loading?: boolean;
}
