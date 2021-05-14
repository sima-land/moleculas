import React from 'react';
import { mount } from 'enzyme';
import WholesaleText from '../wholesale-text';

describe('<WholesaleText />', () => {
  it('should render without props', () => {
    const wrapper = mount(<WholesaleText />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should render with props', () => {
    const wrapper = mount(
      <WholesaleText
        price={222222}
        description='<b>lorem</b>'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should onDetailsClick calls on click', () => {
    const wrapper = mount(
      <WholesaleText
        description='lorem'
        onDetailsClick={jest.fn()}
      />
    );
    wrapper.find('[role="button"]').simulate('click');
    expect(wrapper.props().onDetailsClick).toHaveBeenCalled();
    expect(wrapper.props().onDetailsClick).toHaveBeenCalledTimes(1);
    wrapper.find('[role="button"]').simulate('click');
    expect(wrapper.props().onDetailsClick).toHaveBeenCalledTimes(1);
  });
  it('should handleOutsideClick works correctly', () => {
    const wrapper = mount(<WholesaleText description='lorem' />);
    wrapper.setState({ isPopupOpen: true });
    wrapper.instance().handleOutsideClick();
    expect(wrapper.state('isPopupOpen')).toBeTruthy();

    const eventTargetInside = wrapper.find('.wholesale-text').at(0).getDOMNode();
    wrapper.instance().handleOutsideClick({ target: eventTargetInside });
    expect(wrapper.state('isPopupOpen')).toBeTruthy();

    const eventTargetOutside = document.createElement('div');
    wrapper.instance().handleOutsideClick({ target: eventTargetOutside });
    expect(wrapper.state('isPopupOpen')).toBeFalsy();
  });
});
