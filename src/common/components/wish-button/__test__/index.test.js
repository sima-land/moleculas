import React from 'react';
import { shallow, mount } from 'enzyme';
import WishButton from '../index';

describe('<WishButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(<WishButton />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const onClick = jest.fn();
    const wrapper = mount(<WishButton />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ isWished: true, onClick });
    expect(wrapper).toMatchSnapshot();
  });
  it('onClick not to have been called if isFetchingWishItems', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <WishButton
        onClick={spy}
        isFetchingWishItems
      />
    );
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.setProps({ isFetchingWishItems: false });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
