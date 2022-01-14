import React from 'react';
import { SelectScreen } from '..';

export default {
  title: 'mobile/SelectScreen',
  component: SelectScreen,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент выбора опции из списка (обычно открывается по нажатию на поле)',
      },
    },
  },
};

export const Primary = () => (
  <SelectScreen
    {...{
      items: [
        'Верх-Исетский',
        'Чкаловский',
        'Железнодорожный',
        'Кировский',
        'Орджоникидзевский',
        'Октябрьский',
        'Ленинский',
      ],
      displayItem: (item, { getItemName }) => <span>{getItemName(item)}</span>,
      getItemName: String,
      isItemSelected: item => item === 'Кировский',
    }}
  />
);
