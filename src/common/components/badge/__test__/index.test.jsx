import React from 'react';
import { mount } from 'enzyme';
import { Badge } from '..';
import { addDays, addMonths } from 'date-fns';

describe('<Badge />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should renders correctly', () => {
    const variants = [
      // text view
      {
        color: '#00b8d4',
        href: 'https://sima-land.ru',
        fields: [{ type: 'text', value: 'Система скидок' }],
      },

      // icon only view
      {
        color: '#ff7200',
        href: 'https://sima-land.ru',
        fields: [
          {
            type: 'svg-url',
            value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg',
          },
        ],
      },

      // timer view
      {
        color: '#b52ea8',
        href: 'https://sima-land.ru',
        fields: [{ type: 'timer', value: addDays(new Date(), 7).toISOString() }],
      },

      // timer + text view
      {
        color: '#b52ea8',
        href: 'https://sima-land.ru',
        fields: [
          { type: 'timer', value: addMonths(new Date(), 3).toISOString() },
          { type: 'text', value: ' — Специальные цены на музыкальные инструменты' },
        ],
      },

      // no hover effect
      {
        color: '#607d8b',
        fields: [{ type: 'text', value: 'Уценённый товар' }],
      },
    ];

    variants.forEach(variant => {
      const wrapper = mount(<Badge {...variant} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
