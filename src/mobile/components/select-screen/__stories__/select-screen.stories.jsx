import React from 'react';
import SelectScreen from '../index';
import Box from '@dev-dep/ui-nucleons/box';

const Template = args => <Box paddingX={12}><SelectScreen {...args} /></Box>;

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
