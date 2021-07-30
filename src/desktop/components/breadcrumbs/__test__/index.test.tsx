import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Breadcrumbs } from '..';
import items from '../items';
import { render } from 'react-dom';

describe('<Breadcrumbs />', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container && container.remove();
  });

  it('should renders correctly', () => {
    const wrapper = mount(
      <Breadcrumbs items={items} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should open/close siblings popup', done => {
    const spy = jest.fn();

    render(
      <Breadcrumbs items={items} onSiblingsPopupOpen={spy} />,
      container
    );

    expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(0);

    act(() => {
      Simulate.click(container.querySelector('[data-testid="breadcrumb:siblings-opener"]') as any);
    });

    expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-testid="breadcrumb-sibling"]')).toHaveLength(7);
    expect(container.querySelectorAll('[data-testid="breadcrumb:siblings-closer"]')).toHaveLength(1);

    act(() => {
      Simulate.click(container.querySelector('[data-testid="breadcrumb:siblings-closer"]') as any);
    });

    setTimeout(() => {
      expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(0);
      done();
    }, 500);
  });

  it('should close on popup outside mousedown', () => new Promise<void>(resolve => {
    const spy = jest.fn();

    render(
      <Breadcrumbs items={items} onSiblingsPopupOpen={spy} />,
      container
    );

    expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(0);

    act(() => {
      Simulate.click(container.querySelector('[data-testid="breadcrumb:siblings-opener"]') as any);
    });

    expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(1);

    act(() => {
      window.dispatchEvent(new MouseEvent('mousedown'));
    });

    setTimeout(() => {
      expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(0);
      resolve();
    }, 500);
  }));

  it('should open siblings popup with fetching state', () => {
    const spy = jest.fn();

    render(
      <Breadcrumbs
        items={[
          {
            name: 'Single breadcrumb',
            url: 'https://single.breadcrumb/',
            siblings: {
              state: 'fetching',
            },
          },
        ]}
        onSiblingsPopupOpen={spy}
      />,
      container
    );

    expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(0);

    act(() => {
      Simulate.click(container.querySelector('[data-testid="breadcrumb:siblings-opener"]') as any);
    });

    expect(container.querySelectorAll('[data-testid="plate"]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-testid="breadcrumb-sibling"]')).toHaveLength(0);
    expect(container.querySelectorAll('.sibling-placeholder')).toHaveLength(8);
  });

  it('should render active siblings', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          {
            name: 'Single breadcrumb',
            url: 'https://single.breadcrumb/',
            siblings: {
              state: 'ready',
              data: [
                {
                  name: 'Sibling 1',
                  url: 'https://siblings.com/1',
                },
                {
                  name: 'Sibling 2',
                  url: 'https://siblings.com/2',
                },
                {
                  name: 'Sibling 3',
                  url: 'https://siblings.com/3',
                },
              ],
            },
          },
        ]}
        isSiblingActive={s => s.name === 'Sibling 2'}
      />
    );

    expect(wrapper.find('[data-testid="plate"]')).toHaveLength(0);

    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="plate"]')).toHaveLength(1);

    expect(wrapper.find('[data-testid="breadcrumb-sibling"]')).toHaveLength(3);
    expect(wrapper.find('[data-testid="breadcrumb-sibling"]').at(0).find('.active')).toHaveLength(0);
    expect(wrapper.find('[data-testid="breadcrumb-sibling"]').at(1).find('.active')).toHaveLength(1);
    expect(wrapper.find('[data-testid="breadcrumb-sibling"]').at(0).find('.active')).toHaveLength(0);
  });

  it('should handle ready siblings without data', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          {
            name: 'Single breadcrumb',
            url: 'https://single.breadcrumb/',
            siblings: {
              state: 'ready',
              data: undefined,
            },
          },
        ]}
        isSiblingActive={s => s.name === 'Sibling 2'}
      />
    );

    expect(wrapper.find('[data-testid="plate"]')).toHaveLength(0);

    act(() => {
      wrapper.find('svg[data-testid="breadcrumb:siblings-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="plate"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="breadcrumb-sibling"]')).toHaveLength(0);
  });
});
