import React from 'react';
import { mount } from 'enzyme';
import ItemRating from '../index';

describe('<ItemRating />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemRating />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(<ItemRating reviewsCount={3} value={2} />);
    expect(wrapper).toMatchSnapshot();
  });
});
