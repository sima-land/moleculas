import React from 'react';
import ItemName from '../index';
import { mount } from 'enzyme';

describe('<ItemName />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemName />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(<ItemName name='Foo Bar' href='#' shrinkable />);
    expect(wrapper).toMatchSnapshot();
  });
});
