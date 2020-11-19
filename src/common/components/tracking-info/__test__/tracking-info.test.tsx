import React from 'react';
import { mount } from 'enzyme';
import { TrackingInfo } from '../index';


describe('<TrackNumber />', () => {
  it('should match snapshot in desktop version', () => {
    const onCopy = jest.fn()
    const component = mount(
      <TrackingInfo trackNumber='62096122576448' deliverySite='www.boxberry.ru' isMobile={false} onCopy={onCopy} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot in mobile version', () => {
    const onCopy = jest.fn()
    const wrapper = mount(
      <TrackingInfo trackNumber='62096122576448' deliverySite='www.boxberry.ru' isMobile onCopy={onCopy} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render and handle click correctly', async () => {
    const onCopy = jest.fn();
    const spyWriteText = jest.fn();
    const originalNavigator = window.navigator;

    Object.defineProperty(window.navigator, 'clipboard', {
      writable: true,
      value: {
        writeText: spyWriteText,
      },
    });

    const wrapper = mount(
      <TrackingInfo trackNumber='62096122576448' deliverySite='www.boxberry.ru' onCopy={onCopy} isMobile={false} />
    );

    expect(wrapper).toMatchSnapshot();
    
    await wrapper.find('.track-number').simulate('click')
    
    expect(onCopy).toBeCalled();
    expect(spyWriteText).toBeCalled();

    Object.defineProperty(window.navigator, 'clipboard', {
      value: {
        writeText: originalNavigator,
      },
    });
  });
});
