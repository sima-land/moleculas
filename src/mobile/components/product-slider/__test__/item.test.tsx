import React from 'react';
import { mount } from 'enzyme';
import { ProductSliderItem } from '../item';
import { SliderContext } from '../utils';
import { items } from './test-items';

describe('<ProductSliderItem />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <SliderContext.Provider value={{ needLoadImages: true }}>
        <ProductSliderItem data={items[0]} />
      </SliderContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render footer', () => {
    const wrapper = mount(
      <SliderContext.Provider value={{ needLoadImages: true }}>
        <ProductSliderItem data={items[0]} footer={<div>Test Footer</div>} />
      </SliderContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
