import React from 'react';
import { render } from '@testing-library/react';
import { GarlandCalculatorButton } from '..';

describe('GarlandCalculatorButton', () => {
  it('should render component', () => {
    const { container } = render(<GarlandCalculatorButton onClick={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
