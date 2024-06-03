import type { LinkProps } from '@sima-land/ui-nucleons/link';
import type { HTMLAttributes, ReactNode, Ref } from 'react';

export type ProductInfoRestriction = 'adult' | 'unavailable';

export interface ProductInfoProps {
  /** Ограничение товара. Влияет на отображение информации. */
  restriction?: ProductInfoRestriction;

  /** Содержимое. */
  children?: ReactNode;

  /** Нужно ли фильтровать содержимое и четко задавать порядок слотов. */
  strict?: boolean;
}

export interface ProductInfoTitleProps extends LinkProps {
  adultPlaceholder?: ReactNode;
}

export interface ProductInfoWaitListAddedLinkProps extends LinkProps {
  contentBefore?: ReactNode;
  rootRef?: Ref<HTMLSpanElement>;
  rootProps?: HTMLAttributes<HTMLSpanElement>;
}

export interface ProductInfoFooterProps extends HTMLAttributes<HTMLDivElement> {}
