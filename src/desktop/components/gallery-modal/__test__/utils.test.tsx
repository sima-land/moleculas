import { useRef } from 'react';
import { render, act } from '@testing-library/react';
import { useImagesLoad, useSquareFit } from '../utils';

describe('useImagesLoad', () => {
  const TestComponent = ({ srcList }: { srcList: string[] }) => {
    const status = useImagesLoad(srcList);
    const isLoaded = status === 'done';
    const isFailed = status === 'fail';

    return (
      <div>
        {isLoaded && 'ready'}
        {isFailed && 'fail'}
        {!isLoaded && !isFailed && 'loading'}
      </div>
    );
  };

  it('should return status', () => {
    const { container } = render(<TestComponent srcList={['a']} />);

    expect(container.textContent).toBe('loading');
  });

  it('should handle error', () => {
    const callbacks: Array<(...args: any[]) => void> = [];

    jest.spyOn(Image.prototype, 'onerror', 'set').mockImplementation(callback => {
      callbacks.push(callback);
    });

    const { container } = render(<TestComponent srcList={['a']} />);

    act(() => {
      callbacks.forEach(cb => cb({}));
    });

    expect(container.textContent).toBe('fail');
  });

  it('should return true after all images loaded', () => {
    const callbacks: Array<(...args: any[]) => void> = [];

    jest.spyOn(Image.prototype, 'onload', 'set').mockImplementation(callback => {
      callbacks.push(callback);
    });

    const { container } = render(
      <TestComponent srcList={['https://img.com/1', 'https://img.com/2', 'https://img.com/3']} />,
    );

    expect(container.textContent).toBe('loading');

    act(() => {
      callbacks.forEach(fn => fn());
    });

    expect(container.textContent).toBe('ready');
  });
});

describe('useSquareFit', () => {
  const TestComponent = ({ hidden }: { hidden?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const size = useSquareFit(ref, { hasReview: false });

    return hidden ? null : <div ref={ref}>{size}</div>;
  };

  it('should calculate size properly', () => {
    jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockImplementation(() => 800);
    jest.spyOn(HTMLDivElement.prototype, 'clientHeight', 'get').mockImplementation(() => 600);

    const { container } = render(<TestComponent />);

    expect(container.textContent).toBe('400');
  });

  it('should fit size when height is not enough', () => {
    jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockImplementation(() => 600);
    jest.spyOn(HTMLDivElement.prototype, 'clientHeight', 'get').mockImplementation(() => 1000);

    const { container } = render(<TestComponent />);

    expect(container.textContent).toBe('200');
  });

  it('should recalculate on window resize', () => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((fn: any) => fn());

    jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockImplementation(() => 1000);

    const heightMock = jest
      .spyOn(HTMLDivElement.prototype, 'clientHeight', 'get')
      .mockImplementation(() => 600);

    const { container } = render(<TestComponent />);

    expect(container.textContent).toBe('560');

    heightMock.mockReturnValue(400);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(container.textContent).toBe('360');
  });

  it('should do nothing when ref is empty', () => {
    const { container } = render(<TestComponent hidden />);

    expect(container.textContent).toBe('');
  });
});
