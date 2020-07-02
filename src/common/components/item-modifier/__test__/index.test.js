import React from 'react';
import { mount } from 'enzyme';
import ItemModifier from '../index';

describe('<ItemModifier />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemModifier />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(<ItemModifier layout='block' title='Foo' count={32} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ layout: 'inline' });
    expect(wrapper).toMatchSnapshot();
  });
});
