import { act, fireEvent, render } from '@testing-library/react';
import { HoverSlider, HoverSliderItem } from '../hover-slider';
import { createRef } from 'react';
import { DOMRectReadOnlyMock } from '@sima-land/ui-nucleons/test-utils';

describe('HoverSlider', () => {
  it('should render slides', () => {
    const { container } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/baz.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(container.querySelectorAll('.list-item img')).toHaveLength(3);
  });

  it('should render nav', () => {
    const { container } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(container.querySelectorAll('.nav-item')).toHaveLength(2);
  });

  it('should render nav items in count equal to number of slides', () => {
    const { rerender, container } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/baz.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(container.querySelectorAll('.nav-item')).toHaveLength(3);

    rerender(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/baz.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(container.querySelectorAll('.nav-item')).toHaveLength(2);
  });

  it('should handle "withNav"', () => {
    const { container } = render(
      <HoverSlider withNav={false}>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(container.querySelectorAll('.nav-item')).toHaveLength(0);
  });

  it('should has default data-testid', () => {
    const { queryAllByTestId } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(queryAllByTestId('hover-slider')).toHaveLength(1);
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <HoverSlider data-testid='foobar'>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(queryAllByTestId('hover-slider')).toHaveLength(0);
    expect(queryAllByTestId('foobar')).toHaveLength(1);
  });

  it('should handle "className"', () => {
    const { getByTestId } = render(
      <HoverSlider className='class1 class2'>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(getByTestId('hover-slider').classList.contains('root')).toBe(true);
    expect(getByTestId('hover-slider').classList.contains('class1')).toBe(true);
    expect(getByTestId('hover-slider').classList.contains('class2')).toBe(true);
  });

  it('should pass props to root element', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <HoverSlider id='my-slider' onClick={spy}>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(getByTestId('hover-slider').id).toBe('my-slider');

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('hover-slider'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "rootRef"', () => {
    const rootRef = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <HoverSlider rootRef={rootRef}>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    expect(rootRef.current === getByTestId('hover-slider')).toBe(true);
  });
  it('should ignore handler on mousemove of root element if is scrolling', () => {
    jest.useFakeTimers();
    const { container, getByTestId } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/baz.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    const root = getByTestId('hover-slider');
    const list = container.querySelector('.list')!;

    // mock client rect
    const rect = new DOMRectReadOnlyMock(0, 0, 100, 100);
    jest.spyOn(root, 'getBoundingClientRect').mockReturnValue(rect);
    jest.spyOn(list, 'getBoundingClientRect').mockReturnValue(rect);

    // mock scrollWidth
    jest.spyOn(list, 'scrollWidth', 'get').mockReturnValue(300);

    expect(root.getBoundingClientRect().width).toEqual(100);
    expect(root.getBoundingClientRect().height).toEqual(100);
    expect(list.scrollWidth).toBe(300);
    expect(list.scrollLeft).toBe(0);
    fireEvent.scroll(list, { target: { scrollLeft: 100 } });
    fireEvent.mouseMove(root, { clientX: 20 });
    expect(list.scrollLeft).toBe(100);
  });
  it('should change scrollLeft on mousemove/onmouseleave of root element', () => {
    const { container, getByTestId } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/baz.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    const root = getByTestId('hover-slider');
    const list = container.querySelector('.list')!;

    // mock client rect
    const rect = new DOMRectReadOnlyMock(0, 0, 100, 100);
    jest.spyOn(root, 'getBoundingClientRect').mockReturnValue(rect);
    jest.spyOn(list, 'getBoundingClientRect').mockReturnValue(rect);

    // mock scrollWidth
    jest.spyOn(list, 'scrollWidth', 'get').mockReturnValue(300);

    expect(root.getBoundingClientRect().width).toEqual(100);
    expect(root.getBoundingClientRect().height).toEqual(100);
    expect(list.scrollWidth).toBe(300);
    expect(list.scrollLeft).toBe(0);

    fireEvent.mouseMove(root, { clientX: 20 });
    expect(list.scrollLeft).toBe(0);

    fireEvent.mouseMove(root, { clientX: 35 });
    expect(list.scrollLeft).toBe(100);

    fireEvent.mouseMove(root, { clientX: 70 });
    expect(list.scrollLeft).toBe(200);

    fireEvent.mouseLeave(root);
    expect(list.scrollLeft).toBe(0);
  });

  it('should sync nav on scroll of list element', () => {
    jest.useFakeTimers();
    const { container, getByTestId } = render(
      <HoverSlider>
        <HoverSliderItem>
          <img src='/public/foo.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/bar.jpg' alt='' />
        </HoverSliderItem>
        <HoverSliderItem>
          <img src='/public/baz.jpg' alt='' />
        </HoverSliderItem>
      </HoverSlider>,
    );

    const root = getByTestId('hover-slider');
    const list = container.querySelector('.list')!;
    const navItems = container.querySelectorAll('.nav-item');

    // mock client rect
    const rect = new DOMRectReadOnlyMock(0, 0, 100, 100);
    jest.spyOn(root, 'getBoundingClientRect').mockReturnValue(rect);
    jest.spyOn(list, 'getBoundingClientRect').mockReturnValue(rect);

    // mock scrollWidth
    jest.spyOn(list, 'scrollWidth', 'get').mockReturnValue(300);

    expect(root.getBoundingClientRect().width).toEqual(100);
    expect(root.getBoundingClientRect().height).toEqual(100);
    expect(list.scrollWidth).toBe(300);
    expect(list.scrollLeft).toBe(0);
    expect(navItems[0].classList.contains('nav-item-active')).toBe(true);
    expect(navItems[1].classList.contains('nav-item-active')).toBe(false);
    expect(navItems[2].classList.contains('nav-item-active')).toBe(false);

    act(() => {
      fireEvent.scroll(list, { target: { scrollLeft: 100 } });
    });
    expect(list.scrollLeft).toBe(100);

    expect(navItems[0].classList.contains('nav-item-active')).toBe(false);
    expect(navItems[1].classList.contains('nav-item-active')).toBe(true);
    expect(navItems[2].classList.contains('nav-item-active')).toBe(false);

    act(() => {
      jest.runAllTimers();
    });
  });
});
