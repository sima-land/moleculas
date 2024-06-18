import type { ProductInfoProps } from './types';
import { ProductInfoContext } from './utils';
import { Parts } from './parts';
import { defineSlots } from '@sima-land/ui-nucleons/helpers';
import { ProductImageContext } from '../product-image';

export const UNAVAILABLE_REASON = {
  notEnough: 'Нет в наличии',
  unavailableInRegion: 'Товар недоступен в вашем регионе',
  onlyForLegalEntities: 'Товар доступен только для юридических лиц',
  adult: 'Товар для взрослых',
} as const;

/**
 * Блок информации о товаре.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfo({ strict = true, restriction, children }: ProductInfoProps) {
  if (!strict) {
    return (
      <ProductInfoContext.Provider value={{ restriction }}>{children}</ProductInfoContext.Provider>
    );
  }

  const { media, image, badges, prices, title, trademark, footer, secondaryInfo, ratingCounter } =
    defineSlots(children, {
      media: Parts.Media,
      image: Parts.Image,
      badges: Parts.Badges,
      prices: Parts.Prices,
      title: Parts.Title,
      secondaryInfo: Parts.SecondaryInfo,
      trademark: Parts.TrademarkLink,
      ratingCounter: Parts.RatingCounter,
      footer: Parts.Footer,
    });

  const adult = restriction === 'adult';

  return (
    <ProductInfoContext.Provider value={{ restriction }}>
      <ProductImageContext.Provider value={{ adult }}>
        {image ?? media}
      </ProductImageContext.Provider>

      {!adult && badges}

      {prices}

      {title}

      {!adult && secondaryInfo}

      {!restriction && trademark}

      {!adult && ratingCounter}

      {footer}
    </ProductInfoContext.Provider>
  );
}
