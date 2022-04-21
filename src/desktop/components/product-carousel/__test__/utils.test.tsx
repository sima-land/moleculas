/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useState } from 'react';
import { useAllowFlag, useChildWidth } from '../utils';
import { render } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

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

  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should works', () => {
    jest.useFakeTimers();

    const spy = jest.fn();

    act(() => {
      render(<TestComponent callback={spy} />, container);
    });

    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.click(container.querySelector('.test-one') as any);
    });

    expect(spy).toBeCalledTimes(1);

    act(() => {
      Simulate.click(container.querySelector('.test-two') as any);
      Simulate.click(container.querySelector('.test-one') as any);
    });

    expect(spy).toBeCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      Simulate.click(container.querySelector('.test-one') as any);
    });

    expect(spy).toBeCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(400);
    });

    act(() => {
      Simulate.click(container.querySelector('.test-one') as any);
    });

    expect(spy).toBeCalledTimes(2);
  });
});

describe('useChildWidth', () => {
  const TestComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<boolean>(false);

    const width = useChildWidth(ref, '[data-testid="child"]', [state]);

    return (
      <>
        <div data-testid='counter'>width: {String(width)}</div>

        {state ? (
          <div ref={ref}>
            <div data-testid='child'>Test child</div>
          </div>
        ) : (
          <div data-testid='opener' onClick={() => setState(true)}>
            Open
          </div>
        )}
      </>
    );
  };

  let container: HTMLDivElement;

  const Find = {
    child: (c: HTMLElement) => c.querySelector('[data-testid="child"]'),
    opener: (c: HTMLElement) => c.querySelector('[data-testid="opener"]'),
    counter: (c: HTMLElement) => c.querySelector('[data-testid="counter"]'),
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should works', () => {
    act(() => {
      render(<TestComponent />, container);
    });

    expect(Find.child(container)).toBeFalsy();
    expect((Find.counter(container) as any).textContent).toBe('width: null');

    act(() => {
      window.dispatchEvent(new UIEvent('resize'));
    });

    expect(Find.child(container)).toBeFalsy();
    expect((Find.counter(container) as any).textContent).toBe('width: null');

    act(() => {
      Simulate.click(Find.opener(container) as any);
    });

    expect(Find.child(container)).toBeTruthy();
    expect((Find.counter(container) as any).textContent).toBe('width: 0');

    act(() => {
      Object.defineProperty(Find.child(container) as any, 'clientWidth', {
        value: 200,
      });

      window.dispatchEvent(new UIEvent('resize'));
    });

    expect((Find.counter(container) as any).textContent).toBe('width: 200');
  });
});
