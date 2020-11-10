import React from 'react';
import { shallow } from 'enzyme';
import FlagsList from '../index';
import Badge from '@dev-dep/ui-nucleons/badge';

describe('<FlagsList />', () => {
  describe('without props', () => {
    const flagsList = shallow(<FlagsList />);

    it('renders correctly', () => {
      expect(flagsList).toMatchSnapshot();
    });

    it('wrapper doesn`t render', () => {
      expect(flagsList.find('.wrap')).toHaveLength(1);
      expect(flagsList.find('.item')).toHaveLength(0);
    });
  });

  describe('with props', () => {
    const flags = [{
      link: '/sale/?is_label=1',
      bgColor: '#64a0eb',
      textColor: '#FFFFFF',
      fields: [
        {
          type: 'text',
          value: '-10%',
        },
      ],
    }];
    const flagsList = shallow(<FlagsList flags={flags} className='test' />);

    it('renders correctly', () => {
      expect(flagsList).toMatchSnapshot();
    });

    it('contains flags', () => {
      const $flag = flagsList.find(Badge);
      expect($flag).toHaveLength(1);
      expect($flag.prop('fields')).toEqual([{
        type: 'text',
        value: '-10%',
      }]);
    });

    it('contains additional class', () => {
      expect(flagsList.find('.wrap').prop('className')).toEqual('wrap test');
    });
  });
});
