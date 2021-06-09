import { BadgeProps } from '../../../common/components/badge';

// ВАЖНО: здесь только модели данных - никаких свойств компонентов вроде функций или флагов

export interface Product {
  badges?: BadgeProps[]
  currencyGrapheme?: string
  imageSrc?: string
  name?: string
  oldPrice?: number
  price: number
  url?: string
}

export interface CartItem {
  markupText?: string
  stepText?: string
  qty?: number
  inCart?: boolean
  isFetching?: boolean
}

export interface CarouselItem {
  product: Product
  cart?: CartItem
}
