import React from 'react';
import { ProductInfo, ProductInfoProps } from '..';
import { WishButton } from '../../wish-button';

export default {
  title: 'common/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Карточка базовой информации о товаре',
      },
    },
  },
};

const exampleData: ProductInfoProps['data'] = {
  name: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый',
  imageSrc: 'https://picsum.photos/240/360',
  url: '',
  price: 23476.23,
  currencyGrapheme: '₽',
  oldPrice: 25000,
  badges: [
    { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
    { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
    { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
    { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
  ],
};

export const Primary = () => (
  <div style={{ width: '240px', border: '20px solid #ddd' }}>
    <ProductInfo data={exampleData}>
      <ProductInfo.OnImage>
        <WishButton style={{ position: 'absolute', top: 8, right: 8 }} />
      </ProductInfo.OnImage>
    </ProductInfo>
  </div>
);
