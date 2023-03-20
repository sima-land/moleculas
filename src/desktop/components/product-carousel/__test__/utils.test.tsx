/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef } from 'react';
import { useAllowFlag, useClientWidth } from '../utils';
import { render, fireEvent, act } from '@testing-library/react';

describe('useAllowFlag', () => {
  const TestComponent = ({ callback }: { callback: () => void }) => {
    const flag = useAllowFlag();

    return (
      <>
        <div className='test-one' onClick={() => flag.allowed() && callback()} />
        <div className='test-two' onClick={() => flag.disallowFor(500)} />
      </>
    );
  };

  it('should works', () => {
    jest.useFakeTimers();

    const spy = jest.fn();

    const { container } = render(<TestComponent callback={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(container.querySelector('.test-one') as any);

    expect(spy).toHaveBeenCalledTimes(1);

    fireEvent.click(container.querySelector('.test-two') as any);
    fireEvent.click(container.querySelector('.test-one') as any);

    expect(spy).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(200);
    });

    fireEvent.click(container.querySelector('.test-one') as any);

    expect(spy).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(400);
    });

    fireEvent.click(container.querySelector('.test-one') as any);

    expect(spy).toHaveBeenCalledTimes(2);
  });
});

describe('useClientWidth', () => {
  const TestComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const width = useClientWidth(ref);

    return (
      <>
        <div ref={ref} data-testid='target'>
          Hello, World!
        </div>

        <div data-testid='counter'>Width: {String(width)}</div>
      </>
    );
  };

  it('should return "clientWidth" value', () => {
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('counter').textContent).toBe('Width: 0');

    act(() => {
      window.dispatchEvent(
        new CustomEvent('[fake]resize', { detail: { target: getByTestId('target') } }),
      );
    });

    expect(getByTestId('counter').textContent).toBe('Width: 0');
  });
});
