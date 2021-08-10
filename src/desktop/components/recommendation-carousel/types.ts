import { BadgeProps } from '../../../common/components/badge';

// ВАЖНО: в моделях Product, CartItem только данные, никаких свойств компонентов вроде функций или флагов

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

export interface WithLinkClickHandle {
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}
