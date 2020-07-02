import React from 'react';
import { shallow } from 'enzyme';
import Flag from '../index';

describe('<Flag />', () => {
  describe('without props', () => {
    const flag = shallow(<Flag />);

    it('renders correctly', () => {
      expect(flag).toMatchSnapshot();
    });
  });

  describe('with bgColor', function () {
    const flag = shallow(<Flag bgColor='blue' />);

    it('renders correctly', () => {
      expect(flag).toMatchSnapshot();
    });

    it('contains bgColor', () => {
      expect(flag.find('.wrap').prop('style').backgroundColor).toEqual('blue');
    });
  });

  describe('with strokeColor', function () {
    const flag = shallow(<Flag strokeColor='green' />);

    it('renders correctly', () => {
      expect(flag).toMatchSnapshot();
    });

    it('contains strokeColor', () => {
      expect(flag.find('.wrap').prop('style').fill).toEqual('green');
    });
  });

  describe('with shadowColor', function () {
    const flag = shallow(<Flag shadowColor='yellow' />);

    it('renders correctly', () => {
      expect(flag).toMatchSnapshot();
    });
  });

  describe('with title', function () {
    const flag = shallow(<Flag title='Test' />);

    it('renders correctly', () => {
      expect(flag).toMatchSnapshot();
    });

    it('contains title', () => {
      expect(flag.prop('title')).toEqual('Test');
    });
  });

  describe('with link', function () {
    const flag = shallow(<Flag link='/test' />);

    it('renders correctly', () => {
      expect(flag).toMatchSnapshot();
    });

    it('contains href', () => {
      expect(flag.find('a').prop('href')).toEqual('/test');
    });
  });

  describe('with fields and definitions', () => {
    const definitions = {
      discountPercent: { type: 'text', value: '-20%' },
      label: { type: 'text', value: 'Специальные цены' },
      timer: { type: 'timer', value: '2019-08-25 23:59:59+05', format: 'd:h:m:s' },
      icon: { type: 'icon', value: 'https://test.test/icon.svg', title: 'test' },
    };

    it('renders correctly', () => {
      const flag = shallow(
        <Flag
          fields={['discountPercent', 'timer', 'label', 'icon', 'test']}
          definitions={definitions}
        />
      );
      const content = flag.find('.content');

      expect(content.find('span')).toHaveLength(3);
      expect(content.find('span').at(1).text()).toEqual('-20%');
      expect(content.find('span').at(2).text()).toEqual('Специальные цены');
      expect(content.find('img')).toHaveLength(1);
      expect(content.find('img').prop('src')).toEqual('https://test.test/icon.svg');
      expect(content.find('img').prop('alt')).toEqual('test');
      expect(flag).toMatchSnapshot();
    });

    it('should render img with empty alt', () => {
      const flag = shallow(
        <Flag
          fields={['discountPercent', 'timer', 'label', 'icon', 'test']}
          definitions={{
            ...definitions,
            icon: {
              type: 'icon',
              value: 'https://test.test/icon.svg',
            },
          }}
        />
      );
      const content = flag.find('.content');

      expect(content.find('img')).toHaveLength(1);
      expect(content.find('img').prop('src')).toEqual('https://test.test/icon.svg');
      expect(content.find('img').prop('alt')).toEqual('');
    });

    it('should render img only', () => {
      const flag = shallow(
        <Flag
          fields={['icon']}
          definitions={{
            ...definitions,
            icon: {
              type: 'icon',
              value: 'https://test.test/icon.svg',
            },
          }}
        />
      );
      const content = flag.find('.content');

      expect(content.find('img')).toHaveLength(1);
      expect(content.find('img').prop('src')).toEqual('https://test.test/icon.svg');
      expect(content.find('img').prop('alt')).toEqual('');
    });
  });
});
