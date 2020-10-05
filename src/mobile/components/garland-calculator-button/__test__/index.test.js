import React from 'react';
import { shallow } from 'enzyme';
import { GarlandCalculatorButton } from '../index';

describe('GarlandCalculatorButton', () => {
  it('should render component', () => {
    const wrapper = shallow(<GarlandCalculatorButton onClick={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
