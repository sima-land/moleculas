import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { InCartControl } from '../in-cart-control';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';

describe('<InCartControl />', () => {
  it('should renders correctly', () => {
    const Spy = {
      onAdd: jest.fn(),
      onChange: jest.fn(),
      onSubtract: jest.fn(),
    };

    const wrapper = mount(
      <InCartControl
        qty={12}
        canAdd
        canSubtract
        markupText='foo'
        stepText='bar'
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

    // subtract
    act(() => {
      wrapper.find(Stepper).find('[data-testid="stepper:input"]').simulate('blur', {
        target: {
          value: 15,
        },
      });
    });
    wrapper.update();

    // enter keydown
    act(() => {
      wrapper.find(Stepper).find('[data-testid="stepper:input"]').simulate('keydown', {
        key: 'Enter',
      });
    });
    wrapper.update();

    expect(Spy.onChange).toBeCalledTimes(2);
  });
});
