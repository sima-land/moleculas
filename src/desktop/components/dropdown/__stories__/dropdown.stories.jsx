import React from 'react';
import Dropdown from '../index';
import { items } from './dropdown-items';

const Template = args => (
  <div style={{ width: '80%', minHeight: '150px', padding: '0 40px' }}>
    <Dropdown {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Выпадающее меню',
  renderDropdownHead: undefined,
  renderItem: undefined,
  items,
};
