import { createContext } from 'react';

export const SliderContext = createContext<{ needLoadImages: boolean }>({ needLoadImages: false });
