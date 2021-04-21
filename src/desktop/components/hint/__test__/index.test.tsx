import React from 'react';
import { mount } from 'enzyme';
import { Hint } from '..';

describe('<Hint />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <Hint className='additional-class'>Hello, world!</Hint>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
