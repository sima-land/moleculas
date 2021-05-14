export interface ProductData {
  badges?: any[]
  currencyGrapheme: string
  favorite?: boolean
  imageSrc: string
  name: string
  oldPrice?: number
  price: number
  url: string
}

export interface CartItemData {
  markupText?: string
  stepText?: string
  qty?: number
}
