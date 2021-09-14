import React from 'react';
import { mount } from 'enzyme';
import { ProductSlider } from '..';
import { items } from './test-items';

describe('<ProductSlider />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <ProductSlider>
        {items.map((item, index) => (
          <ProductSlider.Item key={index} data={item} />
        ))}
      </ProductSlider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
