import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { useCartItemInput } from '../utils';

describe('useCartItemInput', () => {
  const TestComponent = ({ qty, allowFloat, onApply }) => {
    const props = useCartItemInput({ qty, allowFloat, onApply });

    return <input {...props} />;
  };

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should handle focus/blur/unmount', () => {
    const spy = jest.fn();

    act(() => {
      render(
        <TestComponent qty={null} onApply={spy} />,
        container
      );
    });

    act(() => {
      Simulate.focus(container.querySelector('input'));
      Simulate.change(container.querySelector('input'), { target: { value: '12' } });
    });

    act(() => {
      unmountComponentAtNode(container);
    });

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle non numeric values', () => {
    act(() => {
      render(
        <TestComponent qty={null} />,
        container
      );
    });

    expect(container.querySelector('input').value).toBe('0');
  });

  it('should dispatch apply on blur', () => {
    const spy = jest.fn();

    act(() => {
      render(
        <TestComponent
          qty={0}
          onApply={spy}
        />,
        container
      );
    });
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.change(container.querySelector('input'), { target: { value: '12' } });
    });
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.blur(container.querySelector('input'));
    });
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(12);
  });

  it('should dispatch apply on enter key down', () => {
    const spy = jest.fn();

    act(() => {
      render(
        <TestComponent
          qty={0}
          onApply={spy}
        />,
        container
      );
    });
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.change(container.querySelector('input'), { target: { value: '15' } });
    });
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.keyDown(container.querySelector('input'), { key: 'Enter' });
    });
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(15);
  });

  it('should handle empty string input', () => {
    const spy = jest.fn();

    act(() => {
      render(
        <TestComponent
          qty={10}
          onApply={spy}
        />,
        container
      );
    });
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.change(container.querySelector('input'), { target: { value: '' } });
    });
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.blur(container.querySelector('input'));
    });
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(0);
  });

  it('should handle "qty" prop change', () => {
    const spy = jest.fn();

    act(() => {
      render(
        <TestComponent
          qty={0}
          onApply={spy}
        />,
        container
      );
    });

    expect(container.querySelector('input').value).toBe('0');

    act(() => {
      render(
        <TestComponent
          qty={152}
          onApply={spy}
        />,
        container
      );
    });

    expect(container.querySelector('input').value).toBe('152');
  });
});
