import React from 'react';
import { mount } from 'enzyme';
import { ItemRetailFee } from '../index';

describe('<ItemRetailFee />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemRetailFee />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(<ItemRetailFee isFixed isSmaller price={15} minQty={20} unit='R' />);
    expect(wrapper).toMatchSnapshot();
  });
});
