import { defineSlots } from '@sima-land/ui-nucleons/helpers';
import { ProductInfoProps } from './types';
import { ProductInfoContext } from './utils';
import { Parts } from './parts';

export type { ProductInfoProps };

export const UNAVAILABLE_REASON = {
  notEnough: 'Нет в наличии',
  unavailableInRegion: 'Товар недоступен в вашем регионе',
  onlyForLegalEntities: 'Товар доступен только для юридических лиц',
} as const;

/**
 * Блок информации о товаре по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfo({ restriction, children }: ProductInfoProps) {
  const { image, badges, prices, title, trademark, footer, secondaryInfo, ratingCounter } =
    defineSlots(children, {
      image: Parts.Image,
      badges: Parts.Badges,
      prices: Parts.Prices,
      title: Parts.Title,
      secondaryInfo: Parts.SecondaryInfo,
      trademark: Parts.TrademarkLink,
      ratingCounter: Parts.RatingCounter,
      footer: Parts.Footer,
    });

  return (
    <ProductInfoContext.Provider value={{ restriction }}>
      {image}
      {restriction !== 'adult' && badges}
      {prices}
      {title}
      {restriction !== 'adult' && secondaryInfo}
      {!restriction && trademark}
      {restriction !== 'adult' && ratingCounter}
      {footer}
    </ProductInfoContext.Provider>
  );
}

export { Parts };
