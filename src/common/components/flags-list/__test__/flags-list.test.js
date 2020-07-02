import React from 'react';
import { shallow } from 'enzyme';
import FlagsList from '../index';

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
    const flags = [{ label: 'Test' }];
    const flagsList = shallow(<FlagsList flags={flags} className='test' />);

    it('renders correctly', () => {
      expect(flagsList).toMatchSnapshot();
    });

    it('contains flags', () => {
      const $flag = flagsList.find('Flag');
      expect(flagsList.find('.wrap')).toHaveLength(1);
      expect(flagsList.find('.item')).toHaveLength(1);
      expect($flag).toHaveLength(1);
      expect($flag.prop('label')).toEqual('Test');
    });

    it('contains additional class', () => {
      expect(flagsList.find('.wrap').prop('className')).toEqual('wrap test');
    });
  });
});
