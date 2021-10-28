import React from 'react';
import { mount } from 'enzyme';
import { ProductRow } from '..';
import { noop } from 'lodash';

describe('ProductRow', () => {
  const item = {
    itemUrl: 'test',
    imageUrl: 'https://cdn3.static1-sima-land.com/items/29455/1/140.jpg?v=1598850721',
    name: 'Зеленый слоник 25мм МИКС',
    sid: 123,
    count: 23,
    unit: 'шт.',
    initialCount: 42,
    currencyGrapheme: '₽',
    commonPrice: 50,
    itemPrice: 5,
    onWishButtonClick: noop,
    onActionsClick: noop,
    isFetchingWishItems: noop,
    notInStock: true,
    isWished: true,
    movedOrderId: 123456,
    deliveryCost: 10,
    flags: [],
  };

  it('renders properly', () => {
    const wrapper = mount(<ProductRow {...item} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders properly without heart', () => {
    const wrapper = mount(<ProductRow {...item} onWishButtonClick={null} />);
    expect(wrapper).toMatchSnapshot();
  });
});
