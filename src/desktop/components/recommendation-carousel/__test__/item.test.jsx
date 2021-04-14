import React from 'react';
import { mount } from 'enzyme';
import { RecommendedItem } from '../item';

describe('<RecommendedItem />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <RecommendedItem
        url='https://www.sima-land.ru/123456'
        name='Ножницы портновские, 10, 26 см, цвет чёрный'
        imageSrc='https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v=1617955476'
        price={225}
        oldPrice={250}
        currencyGrapheme='₽'
        onClick={jest.fn()}
        quickViewButtonProps={{
          onClick: jest.fn(),
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "size" prop', () => {
    const wrapper = mount(
      <RecommendedItem
        url='https://www.sima-land.ru/123456'
        name='Ножницы портновские, 10, 26 см, цвет чёрный'
        imageSrc='https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v=1617955476'
        price={225}
        oldPrice={250}
        currencyGrapheme='₽'
        onClick={jest.fn()}
        quickViewButtonProps={{
          onClick: jest.fn(),
        }}
        size={{
          xs: 2,
          s: 2,
          m: 2,
          l: 2,
          xl: 2,
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
