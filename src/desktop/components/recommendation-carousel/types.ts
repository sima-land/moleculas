export interface BaseProductData {
  badges?: any[]
  currencyGrapheme: string
  favorite?: boolean
  imageSrc: string
  name: string
  oldPrice?: number
  price: number
  url: string
}

export interface ProductData extends BaseProductData {
  markupText?: string
  stepText?: string
  qty?: number
}
