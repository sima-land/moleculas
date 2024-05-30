import { createContext } from 'react';
import { ProductImageProps } from './types';

export const ProductImageContext = createContext<Pick<ProductImageProps, 'adult'>>({});
