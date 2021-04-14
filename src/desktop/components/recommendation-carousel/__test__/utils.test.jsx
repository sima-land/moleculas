import React, { useRef } from 'react';
import { useTooltip, useMedia, useViewport } from '../utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

describe('useTooltip()', () => {
  const TestComponent = () => {
    const ref = useRef();
    const bind = useTooltip(ref);

    return (
      <>
        <div className='opener' {...bind}>Opener</div>
        <div className='tooltip' ref={ref}>Tooltip</div>
      </>
    );
  };

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should show/hide tooltip', () => {
    act(() => {
      render(<TestComponent />, container);
    });

    act(() => {
      Simulate.mouseEnter(container.querySelector('.opener'));
    });

    expect(container.querySelector('.tooltip').style.opacity).toBe('1');

    act(() => {
      Simulate.mouseLeave(container.querySelector('.opener'));
    });
    expect(container.querySelector('.tooltip').style.opacity).toBe('0');

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown'));
    });
    expect(container.querySelector('.tooltip').style.opacity).toBe('0');

    act(() => {
      Simulate.mouseEnter(container.querySelector('.opener'));
    });
    expect(container.querySelector('.tooltip').style.opacity).toBe('0');

    act(() => {
      document.dispatchEvent(new MouseEvent('mouseup'));
    });
    expect(container.querySelector('.tooltip').style.opacity).toBe('0');
  });

  it('should handle empty ref', () => {
    const TestEmptyRef = ({ needRender = true }) => {
      const ref = useRef();
      const bind = useTooltip(ref);

      return (
        <>
          <div className='opener' {...bind}>Opener</div>
          {needRender && (
            <div className='tooltip' ref={ref}>Tooltip</div>
          )}
        </>
      );
    };

    act(() => {
      render(<TestEmptyRef />, container);
    });

    act(() => {
      Simulate.mouseEnter(container.querySelector('.opener'));
    });

    expect(container.querySelector('.tooltip').style.opacity).toBe('1');

    act(() => {
      render(<TestEmptyRef needRender={false} />, container);
    });

    act(() => {
      Simulate.mouseLeave(container.querySelector('.opener'));
    });
  });
});

describe('useMedia', () => {
  const TestComponent = () => {
    const matches = useMedia('(min-width: 320px)');

    return (
      <>{matches ? 'foo' : 'bar'}</>
    );
  };

  const matchMedia = window.matchMedia;

  const FakeMatchMedia = {
    callbacks: [],

    create (...args) {
      matchMedia(...args);

      return {
        matches: false,

        addEventListener: (eventName, callback) => {
          this.callbacks.push(callback);
        },

        removeEventListener: () => {},
      };
    },

    dispatchChange ({ matches }) {
      this.callbacks.forEach(fn => {
        fn({ matches, __fake: true });
      });
    },
  };

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  beforeAll(() => {
    jest.spyOn(window, 'matchMedia').mockImplementation(q => FakeMatchMedia.create(q));
  });

  afterAll(() => {
    window.matchMedia.mockReset();
    window.matchMedia.mockClear();
  });

  it('should handle change event', () => {
    act(() => {
      render(<TestComponent />, container);
    });
    expect(container.textContent).toContain('bar');

    act(() => {
      FakeMatchMedia.dispatchChange({ matches: true });
    });
    expect(container.textContent).toContain('foo');
  });
});

describe('useViewport', () => {
  const TestComponent = ({ callback }) => {
    const ref = useRef();

    useViewport(ref, callback);

    return (
      <div ref={ref} className='test-block'>Test</div>
    );
  };

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  const IntersectionObserver = window.IntersectionObserver;

  const FakeIntersectionObserver = {
    instances: [],

    dispatchAll (commons) {
      this.instances.forEach(instance => {
        instance.callback(instance.entries.map(e => ({ ...e, ...commons })));
      });
    },
  };

  beforeAll(() => {
    window.IntersectionObserver = class IntersectionObserverMock {
      constructor (callback) {
        this.entries = [];
        FakeIntersectionObserver.instances.push(this);
        this.callback = callback;
        this.disconnect = jest.fn();
      }

      observe (target) {
        this.entries.push({ target });
      }
    };
  });

  afterAll(() => {
    window.IntersectionObserver = IntersectionObserver;
  });

  it('should observe element', () => {
    const spy = jest.fn();

    act(() => {
      render(<TestComponent callback={spy} />, container);
    });

    expect(spy).toBeCalledTimes(0);

    act(() => {
      FakeIntersectionObserver.dispatchAll({ isIntersecting: true });
    });

    expect(spy).toBeCalledTimes(1);

    expect(FakeIntersectionObserver.instances[0].disconnect).toBeCalledTimes(0);

    act(() => {
      unmountComponentAtNode(container);
    });

    expect(FakeIntersectionObserver.instances[0].disconnect).toBeCalledTimes(1);
  });
});
