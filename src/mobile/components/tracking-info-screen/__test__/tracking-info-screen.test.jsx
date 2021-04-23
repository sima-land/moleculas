import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TrackingInfoScreen } from '../index';
import { noop } from 'lodash';

describe('TrackingInfoScreen', () => {
  it('has correct props', async () => {
    const wrapper = mount(
      <TrackingInfoScreen
        onCopy={noop}
        deliverySite='cdek.ru'
        trackNumbers={Array(10).fill({ title: 'title', text: 'text' })}
      />
    );

    expect(wrapper.prop('onCopy')).toBeInstanceOf(Function);
    expect(wrapper.prop('deliverySite')).toEqual('cdek.ru');

    const trackNumbersProp = wrapper.prop('trackNumbers');
    expect(trackNumbersProp).toBeInstanceOf(Array);
    expect(trackNumbersProp).toHaveLength(10);
  });

  it('has correct call onCopy callback', async () => {
    const fakeOnCopy = jest.fn();
    const fakeClipboard = jest.fn();
    Object.defineProperty(window.navigator, 'clipboard', {
      writable: true,
      value: {
        writeText: fakeClipboard,
      },
    });

    const wrapper = mount(
      <TrackingInfoScreen
        onCopy={fakeOnCopy}
        deliverySite='cdek.ru'
        trackNumbers={Array(10).fill({ title: 'title', text: 'text' })}
      />
    );

    expect(fakeOnCopy).not.toBeCalled();
    expect(fakeClipboard).not.toBeCalled();

    await act(async () => {
      wrapper.find('.track-number').first().simulate('click');
    });

    wrapper.update();

    expect(fakeOnCopy).toBeCalledTimes(1);
    expect(fakeClipboard).toBeCalledTimes(1);
  });
});
