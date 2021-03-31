import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useKeyDownHandler } from '../use-key-down-handler';
import { mount } from 'enzyme';

describe('useKeyDownHandler', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  // eslint-disable-next-line require-jsdoc
  const Test = ({ spy }) => {
    useKeyDownHandler('Escape', spy);
    return <div />;
  };

  // eslint-disable-next-line require-jsdoc
  const keyDown = key => new KeyboardEvent('keydown', { bubbles: true, key });

  it('should works properly', () => {
    const spy = jest.fn();

    act(() => {
      render(<Test spy={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.dispatchEvent(keyDown('Enter'));
    });
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.dispatchEvent(keyDown('Escape'));
    });
    expect(spy).toHaveBeenCalledTimes(1);

    jest.spyOn(document, 'removeEventListener');
    const wrapper = mount(<Test spy={spy} />);
    wrapper.unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });

  it('shouldn`t throw error if callback is not a func', () => {
    act(() => {
      render(<Test spy={null} />, container);
    });

    expect(() => {
      act(() => {
        document.dispatchEvent(keyDown('Escape'));
      });
    }).not.toThrowError();
  });
});
