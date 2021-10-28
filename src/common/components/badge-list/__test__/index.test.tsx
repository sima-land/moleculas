import React from 'react';
import { mount } from 'enzyme';
import { BadgeList } from '../index';
import { Badge, BadgeProps } from '../../badge';

describe('<BadgeList />', () => {
  describe('without props', () => {
    const wrapper = mount(<BadgeList />);

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with props', () => {
    const items: BadgeProps[] = [
      {
        href: '/sale/?is_label=1',
        color: '#64a0eb',
        fields: [
          {
            type: 'text',
            value: '-10%',
          },
        ],
      },
    ];
    const wrapper = mount(<BadgeList items={items} className='test' />);

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contains flags', () => {
      const $flag = wrapper.find(Badge);
      expect($flag).toHaveLength(1);
      expect($flag.prop('fields')).toEqual([
        {
          type: 'text',
          value: '-10%',
        },
      ]);
    });
  });
});
