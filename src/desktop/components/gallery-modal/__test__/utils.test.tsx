import React, { useRef } from 'react';
import { mount } from 'enzyme';
import { useImagesLoad, useRectFit } from '../utils';
import { act } from 'react-dom/test-utils';

describe('useImagesLoad', () => {
  const TestComponent = ({ srcList }: { srcList: string[] }) => {
    const isLoaded = useImagesLoad(srcList);

    return <div>{isLoaded ? 'ready' : 'loading'}</div>;
  };

  it('should return boolean', () => {
    const wrapper = mount(<TestComponent srcList={['a']} />);

    expect(wrapper.text()).toBe('loading');
  });

  it('should return true after all images loaded', () => {
    const callbacks: Array<(...args: any[]) => void> = [];

    jest.spyOn(Image.prototype, 'onload', 'set').mockImplementation(callback => {
      callbacks.push(callback);
    });

    const wrapper = mount(
      <TestComponent srcList={['https://img.com/1', 'https://img.com/2', 'https://img.com/3']} />,
    );

    expect(wrapper.text()).toBe('loading');

    act(() => {
      callbacks.forEach(fn => fn());
    });
    wrapper.update();

    expect(wrapper.text()).toBe('ready');

    wrapper.unmount();
  });
});

describe('useRectFit', () => {
  const TestComponent = ({ hidden }: { hidden?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const size = useRectFit(ref, { correction: 0 });

    return hidden ? null : <div ref={ref}>{size}</div>;
  };

  it('should calculate size properly', () => {
    jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockImplementation(() => 100);
    jest.spyOn(HTMLDivElement.prototype, 'clientHeight', 'get').mockImplementation(() => 200);

    const wrapper = mount(<TestComponent />);

    expect(wrapper.text()).toBe('100');
  });

  it('should fit size when height is not enough', () => {
    jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockImplementation(() => 100);
    jest.spyOn(HTMLDivElement.prototype, 'clientHeight', 'get').mockImplementation(() => 20);

    const wrapper = mount(<TestComponent />);

    expect(wrapper.text()).toBe('20');
  });

  it('should recalculate on window resize', () => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((fn: any) => fn());

    jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockImplementation(() => 100);
    const heightMock = jest
      .spyOn(HTMLDivElement.prototype, 'clientHeight', 'get')
      .mockImplementation(() => 20);

    const wrapper = mount(<TestComponent />);

    expect(wrapper.text()).toBe('20');

    heightMock.mockReturnValue(45);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    wrapper.update();

    expect(wrapper.text()).toBe('45');
  });

  it('should do nothing when ref is empty', () => {
    const wrapper = mount(<TestComponent hidden />);

    expect(wrapper.text()).toBe('');
  });
});
