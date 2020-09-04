import React from 'react';
import { mount } from 'enzyme';
import ItemProperties from '../index';
import Text from '@dev-dep/ui-nucleons/text';

describe('<ItemProperties />', () => {
  it('should render empty without props', () => {
    const wrapper = mount(
      <ItemProperties />
    );
    expect(wrapper.children()).toHaveLength(0);
  });
  it('should render with values', () => {
    const wrapper = mount(
      <ItemProperties
        values={[
          {
            text: 'Foo',
            href: 'https://example.com',
          },
          {
            text: 'Baz',
          },
        ]}
      />
    );
    expect(wrapper.find(Text)).toHaveLength(2);
    expect(wrapper.find(Text).at(1).text()).toEqual('Baz;');
  });
});
