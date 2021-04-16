import React from 'react';
import { mount } from 'enzyme';
import { ProductCard } from '../product-card';

describe('<ProductCard />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <ProductCard
        productInfo={{
          url: 'https://www.sima-land.ru/123456',
          name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
          imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
          price: 225,
          oldPrice: 250,
          favorite: false,
          currencyGrapheme: '₽',
          withImageButtons: true,
          onQuickViewClick: jest.fn(),
          onFavoriteClick: jest.fn(),
          markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
