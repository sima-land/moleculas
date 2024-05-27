import type { ReactNode } from 'react';

export type ProductInfoRestriction = 'adult' | 'unavailable';

export interface ProductInfoProps {
  /** Ограничение товара. Влияет на отображение информации. */
  restriction?: ProductInfoRestriction;

  /** Содержимое. */
  children?: ReactNode;
}
