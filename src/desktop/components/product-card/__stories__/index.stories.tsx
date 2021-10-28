import React, { useState } from 'react';
import { ProductCard } from '..';
import { action } from '@storybook/addon-actions';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { ProductData } from '../../../../common/components/product-info';

export default {
  title: 'desktop/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент карточки товара',
      },
    },
  },
};

const product: ProductData = {
  name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nulla.',
  url: 'https://sima-land.ru',
  price: 1200,
  oldPrice: 1450,
  currencyGrapheme: '₽',
  imageSrc: 'https://picsum.photos/240',
  badges: [
    { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
    { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
    { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
    { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
  ],
};
const variants: Array<React.CSSProperties> = [
  { width: '240px' },
  { width: '180px', marginLeft: '32px' },
];

export const Primary = () => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      {variants.map((style, index) => (
        <ProductCard
          key={index}
          style={style}
          data={product}
          onLinkClick={event => {
            event.preventDefault();
            action('product link click')();
          }}
          onQuickViewClick={() => {
            action('quick view button click')();
          }}
        >
          <ProductCard.CartControl
            stepText={amount > 0 ? 'по 1 шт.' : 'от 2 шт.'}
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            {amount > 0 ? (
              <Stepper
                size='s'
                value={amount}
                onAdd={() => setAmount(amount + 1)}
                onSubtract={() => setAmount(amount - 1)}
              />
            ) : (
              <Button
                size='s'
                style={{ width: '122px' }}
                onClick={() => setAmount(Math.max(2, amount + 1))}
              >
                В корзину
              </Button>
            )}
          </ProductCard.CartControl>
        </ProductCard>
      ))}
    </div>
  );
};

export const CartLoading = () => (
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    {variants.map((style, index) => (
      <ProductCard
        key={index}
        style={style}
        data={product}
        onLinkClick={event => {
          event.preventDefault();
          action('product link click')();
        }}
        onQuickViewClick={() => {
          action('quick view button click')();
        }}
      >
        <ProductCard.CartControl loading />
      </ProductCard>
    ))}
  </div>
);
