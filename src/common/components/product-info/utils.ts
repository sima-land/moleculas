import { createContext } from 'react';
import { ProductInfoProps } from './types';

export const ProductInfoContext = createContext<Pick<ProductInfoProps, 'restriction'>>({});
