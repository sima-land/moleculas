import React from 'react';
import { mount } from 'enzyme';
import QuickViewButton from '../index';

describe('<QuickViewButton />', () => {
  it('should works without props', () => {
    expect(mount(<QuickViewButton />)).toMatchSnapshot();
  });
  it('should works with default props', () => {
    const spy = jest.fn();
    const wrapper = mount(<QuickViewButton size={15} onClick={spy} className='btn' />);
    expect(wrapper).toMatchSnapshot();
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
