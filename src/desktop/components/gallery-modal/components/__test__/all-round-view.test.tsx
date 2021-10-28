import React from 'react';
import { mount } from 'enzyme';
import { AllRoundView } from '../all-round-view';
import { act } from 'react-dom/test-utils';

jest.mock('../../utils', () => {
  const original = jest.requireActual('../../utils');

  return {
    ...original,
    __esModule: true,
    useImagesLoad: jest.fn(() => true),
  };
});

describe('AllRoundView', () => {
  const testPhotos = [
    'https://img.com/0',
    'https://img.com/1',
    'https://img.com/2',
    'https://img.com/3',
    'https://img.com/4',
    'https://img.com/5',
    'https://img.com/6',
    'https://img.com/7',
    'https://img.com/8',
    'https://img.com/9',
  ];

  const Selectors = {
    image: '[data-testid="gallery-modal:360-current-photo"]',
    autoplayButton: '[data-testid="gallery-modal:toggle-autoplay-button"]',
    turnLeftButton: '[data-testid="gallery-modal:360-turn-left-button"]',
    turnRightButton: '[data-testid="gallery-modal:360-turn-right-button"]',
    hint: '[data-testid="hint"]',
  } as const;

  it('should renders correctly', () => {
    const wrapper = mount(<AllRoundView photos={[]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders correctly default state', () => {
    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    act(() => {
      wrapper.find(Selectors.autoplayButton).simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should change image src every 1000 / 30 ms', () => {
    jest.useFakeTimers();

    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[0]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[1]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[2]);

    // stop autoplay
    act(() => {
      wrapper.find(Selectors.autoplayButton).simulate('click');
    });
    wrapper.update();

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[2]);
  });

  it('should handle pointer down on turn left button', () => {
    jest.useFakeTimers();

    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    act(() => {
      wrapper.find(Selectors.turnLeftButton).simulate('pointerdown');
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[0]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[9]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[8]);
  });

  it('should handle pointer down on turn right button', () => {
    jest.useFakeTimers();

    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    act(() => {
      wrapper.find(Selectors.turnRightButton).simulate('pointerdown');
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[0]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[1]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[2]);
  });

  it('should handle autoplay button click', () => {
    jest.useFakeTimers();

    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    act(() => {
      wrapper.find(Selectors.turnRightButton).simulate('pointerdown');
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[0]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[1]);

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[2]);

    // autoplay button click
    act(() => {
      wrapper.find(Selectors.autoplayButton).simulate('click');
    });
    wrapper.update();

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[3]);
  });

  it('should show/hide hint', () => {
    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    expect(wrapper.find(Selectors.hint)).toHaveLength(0);

    act(() => {
      wrapper.find(Selectors.autoplayButton).simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper.find(Selectors.hint)).toHaveLength(1);

    act(() => {
      wrapper.find(Selectors.autoplayButton).simulate('mouseleave');
    });
    wrapper.update();

    expect(wrapper.find(Selectors.hint)).toHaveLength(0);
  });

  it('should handle image pointerdown, window pointerup', () => {
    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    act(() => {
      wrapper
        .find(Selectors.image)
        .getDOMNode()
        .dispatchEvent(new Event('pointerdown', { clientX: 10 } as any));
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).getDOMNode<HTMLElement>().style.touchAction).toBe('none');

    act(() => {
      window.dispatchEvent(new Event('pointerup'));
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).getDOMNode<HTMLElement>().style.touchAction).toBe('');
  });

  it('should handle window pointerup', () => {
    jest.useFakeTimers();

    jest.spyOn(HTMLImageElement.prototype, 'clientWidth', 'get').mockImplementation(() => 100);
    jest.spyOn(HTMLImageElement.prototype, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          left: 0,
        } as any),
    );

    const wrapper = mount(<AllRoundView photos={testPhotos} />);

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[0]);

    // move without pointer down
    act(() => {
      window.dispatchEvent(new MouseEvent('pointermove', { clientX: 20 } as any));
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[0]);

    // pointer down
    act(() => {
      wrapper
        .find(Selectors.image)
        .getDOMNode()
        .dispatchEvent(new MouseEvent('pointerdown', { clientX: 2 }));
    });
    wrapper.update();

    // move
    act(() => {
      window.dispatchEvent(new MouseEvent('pointermove', { clientX: 93 } as any));
    });
    wrapper.update();

    expect(wrapper.find(Selectors.image).prop('src')).toEqual(testPhotos[9]);

    wrapper.unmount();
  });
});
