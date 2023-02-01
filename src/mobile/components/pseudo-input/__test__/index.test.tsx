import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PseudoInput } from '..';

describe('<PseudoInput />', () => {
  it('should renders correctly', () => {
    const { container } = render(<PseudoInput />);

    expect(container).toMatchSnapshot();
  });

  it('should handle "onClick" prop', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<PseudoInput onClick={onClick} />);

    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
