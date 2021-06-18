import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { InCartControl } from '..';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';
import { Button } from '@dev-dep/ui-nucleons/button';

describe('<InCartControl />', () => {
  it('should render button', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <InCartControl
        inCart={false}
        qty={12}
        onAdd={spy}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find(Button).simulate('click');
    });

    expect(spy).toBeCalledTimes(1);

    wrapper.setProps({ isFetching: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders correctly', () => {
    const Spy = {
      onAdd: jest.fn(),
      onChange: jest.fn(),
      onSubtract: jest.fn(),
    };

    const wrapper = mount(
      <InCartControl
        inCart
        qty={12}
        canAdd
        canSubtract
        onAdd={Spy.onAdd}
        onChange={Spy.onChange}
        onSubtract={Spy.onSubtract}
      />
    );

    expect(wrapper).toMatchSnapshot();

    Object.values(Spy).forEach(fn => {
      expect(fn).toBeCalledTimes(0);
    });

    // add
    act(() => {
      wrapper.find(Stepper).find('svg[data-testid="stepper:plus"]').simulate('click');
    });
    wrapper.update();

    expect(Spy.onAdd).toBeCalledTimes(1);

    // subtract
    act(() => {
      wrapper.find(Stepper).find('svg[data-testid="stepper:minus"]').simulate('click');
    });
    wrapper.update();

    expect(Spy.onSubtract).toBeCalledTimes(1);

    // change + blur
    act(() => {
      wrapper.find(Stepper).find('[data-testid="stepper:input"]').simulate('change', {
        target: { value: '15' },
      });
    });
    wrapper.update();
    act(() => {
      wrapper.find(Stepper).find('[data-testid="stepper:input"]').simulate('blur');
    });
    wrapper.update();

    expect(Spy.onChange).toBeCalledTimes(1);

    // change + enter keydown
    act(() => {
      wrapper.find(Stepper).find('[data-testid="stepper:input"]').simulate('change', {
        target: { value: '15' },
      });
    });
    wrapper.update();
    act(() => {
      wrapper.find(Stepper).find('[data-testid="stepper:input"]').simulate('keydown', {
        key: 'Enter',
      });
    });
    wrapper.update();

    expect(Spy.onChange).toBeCalledTimes(2);
  });
});
