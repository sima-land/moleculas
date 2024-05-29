import { createContext } from 'react';
import { ProductInfoProps } from './types';

export const ProductInfoContext = createContext<Pick<ProductInfoProps, 'restriction'>>({
  restriction: undefined,
});

export const ProductInfoFooterContext = createContext<{ className?: string }>({
  className: undefined,
});
