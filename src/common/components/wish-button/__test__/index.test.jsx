import React from 'react';
import { mount } from 'enzyme';
import { WishButton } from '..';

describe('<WishButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(<WishButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with props', () => {
    const onClick = jest.fn();
    const wrapper = mount(<WishButton checked onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('onClick not to have been called if disabled', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <WishButton onClick={spy} disabled />
    );
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.setProps({ disabled: false });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
