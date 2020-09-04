import React from 'react';
import { mount } from 'enzyme';
import { ItemPrice } from '../index';
import WholesalePrice from '../../wholesale-price';

describe('<ItemPrice />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemPrice />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(
      <ItemPrice
        priceLayout='column'
        price={15}
        priceOld={20}
        wholesaleProps={{
          price: 14,
        }}
        unitPrice={421}
        measure='Р / пог. м'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should not show wholesale price if unitPrice', () => {
    const wrapper = mount(
      <ItemPrice
        priceLayout='column'
        price={15}
        priceOld={20}
        wholesaleProps={{
          price: 14,
        }}
        measure='Р / пог. м'
        showWholesalePrice
      />
    );
    expect(wrapper.find('.price-unit')).toHaveLength(0);
    expect(wrapper.find(WholesalePrice)).toHaveLength(1);

    wrapper.setProps({ unitPrice: '30' });
    expect(wrapper.find('.price-unit')).toHaveLength(1);
    expect(wrapper.find(WholesalePrice)).toHaveLength(0);
  });
});
