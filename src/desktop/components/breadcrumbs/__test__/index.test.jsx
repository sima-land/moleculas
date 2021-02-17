import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Breadcrumbs } from '..';
import CSSTransition from 'react-transition-group/CSSTransition';

describe('<Breadcrumbs />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Breadcrumbs />
    );

    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should render top level items', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          { name: 'First' },
          { name: 'Second' },
          { name: 'Third' },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render items with siblings', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          { name: 'First' },
          { name: 'Second' },
          {
            name: 'Third',
            items: [
              { name: 'third child 1' },
              { name: 'third child 2' },
              { name: 'third child 3' },
            ],
          },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onSiblingsShow" prop', () => {
    const spy = jest.fn();

    const breadcrumb = {
      name: 'First',
      items: [
        { name: 'First child' },
        { name: 'Second child' },
        { name: 'Third child' },
      ],
    };

    const wrapper = mount(
      <Breadcrumbs
        items={[breadcrumb]}
        onItemSiblingsShow={spy}
      />
    );

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(true);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(breadcrumb);
  });

  it('should handle siblings popup close icon click', () => {
    const spy = jest.fn();

    const testItems = [
      {
        name: 'First',
        items: [
          { name: 'First child' },
          { name: 'Second child' },
          { name: 'Third child' },
        ],
      },
    ];

    const wrapper = mount(
      <Breadcrumbs
        items={testItems}
        onItemSiblingsShow={spy}
      />
    );

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    // show siblings popup
    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(true);

    // hide siblings popup
    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-closer"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);
  });

  it('should handle popup outside click', () => {
    const spy = jest.fn();

    const testItems = [
      {
        name: 'First',
        items: [
          { name: 'First child' },
          { name: 'Second child' },
          { name: 'Third child' },
        ],
      },
    ];

    const wrapper = mount(
      <Breadcrumbs
        items={testItems}
        onItemSiblingsShow={spy}
      />
    );

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    // show siblings popup
    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(true);

    act(() => {
      const event = new MouseEvent('click');

      Object.defineProperty(event, 'target', {
        value: document.createElement('div'),
      });

      window.dispatchEvent(event);
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);
  });

  it('should handle escape key down', () => {
    const spy = jest.fn();

    const testItems = [
      {
        name: 'First',
        items: [
          { name: 'First child' },
          { name: 'Second child' },
          { name: 'Third child' },
        ],
      },
    ];

    const wrapper = mount(
      <Breadcrumbs
        items={testItems}
        onItemSiblingsShow={spy}
      />
    );

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    // show siblings popup
    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(true);

    // escape key down
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    // show siblings popup
    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(true);

    // escape key down (by keyCode)
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }));
    });
    wrapper.update();

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);
  });

  it('should remove listeners on unmount', () => {
    const spy = jest.fn();

    const testItems = [
      {
        name: 'First',
        items: [
          { name: 'First child' },
          { name: 'Second child' },
          { name: 'Third child' },
        ],
      },
    ];

    const wrapper = mount(
      <Breadcrumbs
        items={testItems}
        onItemSiblingsShow={spy}
      />
    );

    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    // show siblings popup
    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    // unmount
    wrapper.unmount();

    // escape key down
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    });
    wrapper.update();
  });

  it('should render active child breadcrumbs with default isActiveChild function', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          {
            name: 'First',
            url: 'href',
            items: [
              { name: 'First child', url: 'href' },
              { name: 'Active', isActive: true },
              { name: 'Third child' },
            ],
          },
          {
            name: 'Active',
            isActive: true,
          },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
