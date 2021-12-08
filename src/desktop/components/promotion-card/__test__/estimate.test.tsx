import React from 'react';
import { render } from '@testing-library/react';
import { Estimate, EstimateProps } from '../estimate';
import { addDays, addYears } from 'date-fns';

describe('<Estimate />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  const variants: EstimateProps[] = [
    // целевая дата в текущем году
    {
      dueDate: addYears(new Date(), 5),
    },

    // целевая дата в следующем году или позже
    {
      dueDate: addDays(new Date(), 7),
    },
  ];

  variants.forEach((variant, index) => {
    it(`should renders correctly, variants [${index}]`, () => {
      const { container } = render(<Estimate {...variant} />);

      expect(container).toMatchSnapshot();
    });
  });

  it('should renders month number correctly for large dates', () => {
    const { container } = render(<Estimate dueDate={addYears(new Date(), 2)} />);

    expect(container.textContent).toContain('До 01.01.2023');
  });
});
