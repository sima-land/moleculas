import { useRef } from 'react';
import { useClientWidth } from '../use-client-width';
import { render, act } from '@testing-library/react';

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
