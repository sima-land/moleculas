import type { ReactNode } from 'react';

export interface ProductInfoProps {
  /** Ограничение товара. Влияет на отображение информации. */
  restriction?: 'adult' | 'unavailable';

  /** Содержимое. */
  children?: ReactNode;
}
