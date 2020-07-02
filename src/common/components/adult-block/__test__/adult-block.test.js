import React from 'react';
import { mount } from 'enzyme';
import AdultBlock from '../adult-block';
import Link from '@dev-dep/ui-nucleons/link';

describe('<AdultBlock />', () => {
  it('should render without props', () => {
    const wrapper = mount(<AdultBlock />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <AdultBlock
        isAuthUser
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find(Link).at(0).prop('onClick')();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
