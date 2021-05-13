import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TrackingInfoModal } from '../index';
import { noop } from 'lodash';

jest.mock('lodash/debounce', () => {
  const original = jest.requireActual('lodash/debounce');
  return jest.fn(original);
});

describe('TrackingInfoModal', () => {
  it('has correct props', async () => {
    const wrapper = mount(
      <TrackingInfoModal
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
      <TrackingInfoModal
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

  it('should show hint', async () => {
    const fakeOnCopy = jest.fn();

    Object.defineProperty(window.navigator, 'clipboard', {
      writable: true,
      value: {
        writeText: jest.fn(),
      },
    });
    const wrapper = mount(
      <TrackingInfoModal
        onCopy={fakeOnCopy}
        deliverySite='cdek.ru'
        trackNumbers={Array(10).fill({ title: 'title', text: 'text' })}
      />
    );

    await act(async () => {
      wrapper.find('.track-number').first().simulate('click');
    });

    wrapper.update();

    expect(wrapper.find('.hint')).toHaveLength(1);

    expect(fakeOnCopy).toBeCalled();
  });

  it('should hide hint when scrolling', async () => {
    Object.defineProperty(window.navigator, 'clipboard', {
      writable: true,
      value: {
        writeText: jest.fn(),
      },
    });
    const wrapper = mount(
      <TrackingInfoModal
        onCopy={jest.fn()}
        deliverySite='cdek.ru'
        trackNumbers={Array(10).fill({ title: 'title', text: 'text' })}
      />
    );

    await act(async () => {
      wrapper.find('.track-number').first().simulate('click');
    });

    wrapper.update();

    expect(wrapper.find('.hint')).toHaveLength(1);

    const mEvent = {
      target: { scrollWidth: 100, scrollTop: 50, clientWidth: 50 },
    };

    await act(async () => {
      wrapper.find('.track-numbers').simulate('scroll', mEvent);
    });

    wrapper.update();

    expect(wrapper.find('.hint')).toHaveLength(0);
  });

  it('should hide Hint correctly', async () => {
    Object.defineProperty(window.navigator, 'clipboard', {
      writable: true,
      value: {
        writeText: jest.fn(),
      },
    });

    jest.useFakeTimers();

    const ref = React.createRef();
    ref.current = <div />;

    expect(setTimeout).not.toBeCalled();

    const wrapper = mount(
      <TrackingInfoModal
        onCopy={noop}
        deliverySite='cdek.ru'
        trackNumbers={Array(10).fill({ title: 'title', text: 'text' })}
      />
    );

    await act(async () => {
      wrapper.find('.track-number').first().simulate('click');
    });

    wrapper.update();

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);

    expect(wrapper.find('.hint')).toHaveLength(1);
    await act(async () => {
      await jest.runAllTimers();
    });

    wrapper.update();
    expect(wrapper.find('.hint')).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });
});
