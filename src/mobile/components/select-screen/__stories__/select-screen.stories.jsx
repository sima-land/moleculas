import React from 'react';
import SelectScreen from '../index';

const Template = args => <SelectScreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    'Верх-Исетский',
    'Чкаловский',
    'Железнодорожный',
    'Кировский',
    'Орджоникидзевский',
    'Октябрьский',
    'Ленинский',
  ],
  displayItem: (item, { getItemName }) => (
    <span>{getItemName(item)}</span>
  ),
  getItemName: String,
  isItemSelected: item => item === 'Кировский',
};
