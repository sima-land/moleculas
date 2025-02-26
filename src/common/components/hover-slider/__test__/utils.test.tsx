import { ReactNode, useContext, useEffect } from 'react';
import { debounce, HoverSliderContext, useSlideCount } from '../utils';
import { render } from '@testing-library/react';

function TestSlider({ children }: { children?: ReactNode }) {
  const { count, contextValue } = useSlideCount();

  return (
    <HoverSliderContext.Provider value={contextValue}>
      <div>{children}</div>
      <div>Count: {count}</div>
    </HoverSliderContext.Provider>
  );
}

function TestSlide({ slideId }: { slideId: string }) {
  const { itemMounted, itemUnmounted } = useContext(HoverSliderContext);

  useEffect(() => {
    itemMounted(slideId);

    return () => {
      itemUnmounted(slideId);
    };
  }, [itemMounted, itemUnmounted]);

  return <div></div>;
}

function TestSlideBroken({ slideId }: { slideId: string }) {
  const { itemMounted, itemUnmounted } = useContext(HoverSliderContext);

  useEffect(() => {
    itemMounted(slideId);
    itemMounted(slideId);
    itemMounted(slideId);

    return () => {
      itemUnmounted(slideId);
      itemUnmounted(slideId);
      itemUnmounted(slideId);
    };
  }, [itemMounted, itemUnmounted]);

  return <div></div>;
}

describe('useSlideCount', () => {
  it('should count slides properly', () => {
    const { container, rerender } = render(
      <TestSlider>
        <TestSlide slideId='1' />
        <TestSlide slideId='2' />
        <TestSlide slideId='3' />
        <TestSlideBroken slideId='4' />
      </TestSlider>,
    );
    expect(container.textContent).toBe('Count: 4');

    rerender(
      <TestSlider>
        <TestSlide slideId='1' />
        <TestSlide slideId='2' />
        <TestSlide slideId='3' />
      </TestSlider>,
    );
    expect(container.textContent).toBe('Count: 3');
  });

  it('should use default value from context', () => {
    const { unmount } = render(<TestSlide slideId='1' />);

    expect(unmount).not.toThrow();
  });
});

describe('debounce', () => {
  jest.useFakeTimers();
  it('should call fn after 100ms and only once', () => {
    const fakeCall = jest.fn();
    expect(fakeCall).toHaveBeenCalledTimes(0);
    const fn = debounce(fakeCall, 100);
    fn();
    fn();
    fn();
    fn();
    jest.runAllTimers();
    expect(fakeCall).toHaveBeenCalledTimes(1);
  });
});
