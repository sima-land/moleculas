import React from 'react';
import ItemQuickViewButton from '../index';
import { mount } from 'enzyme';

describe('<ItemQuickViewButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemQuickViewButton />);
    expect(wrapper.find('button').props().onClick).toBe(null);
    expect(wrapper.find('button').props().className).toEqual('quick-view-button');
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const jestSpy = jest.fn();
    const wrapper = mount(<ItemQuickViewButton onClick={jestSpy} additionalClassName='test-class' />);
    expect(wrapper.find('button').props().onClick).toBe(jestSpy);
    expect(wrapper.find('button').props().className).toEqual('quick-view-button test-class');
    expect(wrapper).toMatchSnapshot();
  });
});
