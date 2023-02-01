import React from 'react';
import { render } from '@testing-library/react';
import { Estimate } from '../estimate';
import { addDays, addYears } from 'date-fns';

describe('<Estimate />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it('should renders correctly small time period', () => {
    // целевая дата в текущем году
    const { container } = render(<Estimate dueDate={addDays(new Date(), 7)} />);

    expect(container.textContent).toContain('До 8 янв');
  });

  it('should renders correctly large time period', () => {
    // целевая дата в следующем году или позже
    const { container } = render(<Estimate dueDate={addYears(new Date(), 5)} />);

    expect(container.textContent).toContain('До 01.01.2026');
  });

  it('should renders month number correctly for large dates', () => {
    const { container } = render(<Estimate dueDate={addYears(new Date(), 2)} />);

    expect(container.textContent).toContain('До 01.01.2023');
  });
});
