import React from 'react';
import { mount } from 'enzyme';
import { WholesalePrice } from '../index';

describe('<WholesalePrice />', () => {
  it('should adds and removes global listener correctly', () => {
    const onUnloadSpy = jest.fn();
    const spy = jest.fn().mockImplementation(() => onUnloadSpy);
    const wrapper = mount(
      <WholesalePrice description='lorem' addGlobalListener={spy} />
    );
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0]).toEqual('click');
    wrapper.unmount();
    expect(onUnloadSpy).toHaveBeenCalled();
  });
  it('should render without props', () => {
    const wrapper = mount(<WholesalePrice />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should render with props', () => {
    const wrapper = mount(
      <WholesalePrice
        price={222222}
        description='<b>lorem</b>'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should onDetailsClick calls on click', () => {
    const wrapper = mount(
      <WholesalePrice
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
    const wrapper = mount(<WholesalePrice description='lorem' />);
    wrapper.setState({ isPopupOpen: true });
    wrapper.instance().handleOutsideClick();
    expect(wrapper.state('isPopupOpen')).toBeTruthy();

    const eventTargetInside = wrapper.find('.icon').at(0).getDOMNode();
    wrapper.instance().handleOutsideClick({ target: eventTargetInside });
    expect(wrapper.state('isPopupOpen')).toBeTruthy();

    const eventTargetOutside = document.createElement('div');
    wrapper.instance().handleOutsideClick({ target: eventTargetOutside });
    expect(wrapper.state('isPopupOpen')).toBeFalsy();
  });
});
