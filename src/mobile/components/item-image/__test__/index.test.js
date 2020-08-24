import React from 'react';
import { mount } from 'enzyme';
import ItemImage from '../index';

describe('<ItemImage />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemImage />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render wish', () => {
    const wrapper = mount(<ItemImage wishProps={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with withBlur prop', () => {
    const wrapper = mount(<ItemImage withBlur />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render badges', () => {
    const wrapper = mount(
      <ItemImage badges={[
        {
          bgColor: '#b52ea8',
          definitions: {
            label: {
              type: 'text',
              value: '-36%',
            },
          },
          fields: [
            'label',
          ],
          link: '/percent/',
          strokeColor: null,
          textColor: '#f2f2f2',
          title: null,
        },
      ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
