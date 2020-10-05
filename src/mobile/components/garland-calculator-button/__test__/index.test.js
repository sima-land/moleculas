import React from 'react';
import { shallow } from 'enzyme';
import { GarlandCalculatorButton } from '../index';

describe('GarlandCalculatorButton', () => {
  it('should render component', () => {
    const wrapper = shallow(<GarlandCalculatorButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
