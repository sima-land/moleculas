import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { WithHint } from '..';
import { Hint } from '../../hint';

describe('<WithHint />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <WithHint text='Hello, world'>
        {(ref, toggle) => (
          <div
            ref={ref}
            data-testid='test-opener'
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
          >Opener</div>
        )}
      </WithHint>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Hint)).toHaveLength(0);

    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Hint)).toHaveLength(1);

    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('mouseleave');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Hint)).toHaveLength(0);
  });
});
