import React from 'react';
import { mount } from 'enzyme';
import { Estimate, EstimateProps } from '../estimate';
import { addDays, addHours, addYears } from 'date-fns';

describe('<Estimate />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should renders correctly', () => {
    const variants: EstimateProps[] = [
      {
        dueDate: addHours(new Date(), 3),
      },
      {
        dueDate: addYears(new Date(), 5),
      },
      {
        dueDate: addDays(new Date(), 7),
      },
    ];

    variants.forEach(variant => {
      const wrapper = mount(
        <Estimate {...variant} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
