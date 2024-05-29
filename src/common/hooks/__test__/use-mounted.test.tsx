import { useLayoutEffect } from 'react';
import { useMounted } from '../use-mounted';
import { render } from '@testing-library/react';

describe('useMounted', () => {
  const spy = jest.fn();

  const TestComponent = () => {
    const mounted = useMounted();

    useLayoutEffect(() => {
      spy(mounted);
    });

    return <>Hello!</>;
  };

  it('should return boolean properly', () => {
    expect(spy).toHaveBeenCalledTimes(0);

    const { container } = render(<TestComponent />);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[0][0]).toBe(false);
    expect(spy.mock.calls[1][0]).toBe(true);
    expect(container.textContent).toBe('Hello!');
  });
});
