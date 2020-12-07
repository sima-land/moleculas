import React from 'react';
import ItemName from '..';
import { mount } from 'enzyme';

describe('<ItemName />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemName />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(
      <ItemName href='#' shrinkable>
        Foo Bar
      </ItemName>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
