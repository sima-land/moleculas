import React from 'react';
import { mount } from 'enzyme';
import { ProductInfo } from '../product-info';

describe('<ProductInfo />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <ProductInfo
        url='https://www.sima-land.ru/123456'
        name='Ножницы портновские, 10, 26 см, цвет чёрный'
        imageSrc='https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v=1617955476'
        price={225}
        oldPrice={250}
        favorite
        currencyGrapheme='₽'
        withImageButtons
        onQuickViewClick={jest.fn()}
        onFavoriteClick={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
