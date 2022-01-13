import React from 'react';
import { AdultBlock } from '..';
import { fireEvent, render } from '@testing-library/react';

describe('<AdultBlock />', () => {
  it('should render without props', () => {
    const { container } = render(<AdultBlock />);
    expect(container).toMatchSnapshot();
  });

  it('should render with props', () => {
    const spy = jest.fn();

    const { container, getByRole } = render(<AdultBlock isAuthUser onClick={spy} />);

    expect(container).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
