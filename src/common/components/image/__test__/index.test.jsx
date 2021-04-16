import React from 'react';
import { Image } from '..';
import { mount } from 'enzyme';

describe('<Image />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <Image
        src='www.aaa.com'
        width={23}
        height={34}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
