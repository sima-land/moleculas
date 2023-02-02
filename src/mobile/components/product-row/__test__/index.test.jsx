import React from 'react';
import { mount } from 'enzyme';
import { ProductRow } from '..';
import { noop } from 'lodash';
import { fireEvent } from '@testing-library/react';

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

  it('should render wish button', () => {
    const spy = jest.fn();
    const wrapper = mount(<ProductRow {...item} onWishButtonClick={spy} />);
    expect(wrapper.getDOMNode().querySelectorAll('.wish-button')).toHaveLength(1);
  });

  it('should render wish button with click handler', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ProductRow {...item} isFetchingWishItems={false} onWishButtonClick={spy} isWished />,
    );

    expect(wrapper.getDOMNode().querySelectorAll('.wish-button')).toHaveLength(1);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(wrapper.getDOMNode().querySelector('.wish-button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render wish button not pressed', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ProductRow {...item} isFetchingWishItems={false} onWishButtonClick={spy} isWished={false} />,
    );

    expect(wrapper.getDOMNode().querySelectorAll('.wish-button')).toHaveLength(1);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(wrapper.getDOMNode().querySelector('.wish-button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should NOT render wish button', () => {
    const wrapper = mount(<ProductRow {...item} onWishButtonClick={undefined} />);
    expect(wrapper.getDOMNode().querySelectorAll('.wish-button')).toHaveLength(0);
  });
});
