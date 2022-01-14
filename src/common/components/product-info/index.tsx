import React from 'react';
import { defineSlots } from '@sima-land/ui-nucleons/helpers/define-slots';
import { ProductInfoProps } from './types';
import { ProductInfoContext } from './utils';
import { Parts } from './parts';

export type { ProductInfoProps };

export const UNAVAILABLE_REASON = {
  notEnough: 'Нет в наличии',
  unavailableInRegion: 'Товар недоступен в вашем регионе',
  onlyForLegalEntities: 'Товар доступен только для юридических лиц',
} as const;

export const ProductInfo = ({ restriction, children }: ProductInfoProps) => {
  const { image, badges, prices, title, trademark, footer } = defineSlots(children, {
    image: Parts.Image,
    badges: Parts.Badges,
    prices: Parts.Prices,
    title: Parts.Title,
    trademark: Parts.TrademarkLink,
    footer: Parts.Footer,
  });

  return (
    <ProductInfoContext.Provider value={{ restriction }}>
      {image}
      {restriction !== 'adult' && badges}
      {prices}
      {title}
      {!restriction && trademark}
      {footer}
    </ProductInfoContext.Provider>
  );
};

export { Parts };
