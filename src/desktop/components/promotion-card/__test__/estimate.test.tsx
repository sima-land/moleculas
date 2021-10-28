import React from 'react';
import { mount } from 'enzyme';
import { Estimate, EstimateProps } from '../estimate';
import { addDays, addYears } from 'date-fns';

describe('<Estimate />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should renders correctly', () => {
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

    variants.forEach(variant => {
      const wrapper = mount(<Estimate {...variant} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
