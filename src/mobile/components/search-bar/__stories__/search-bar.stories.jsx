import React from 'react';
import { SearchBar } from '..';
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import { action } from '@storybook/addon-actions';

export default {
  title: 'mobile/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент Поисковой строки',
      },
    },
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

const Template = args => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: '',
  onChange: action('change'),
  onClear: action('clear'),
  endButtons: [{ text: 'Поиск', onClick: action('search') }],
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: '',
  withSearchIcon: false,
  onChange: action('change'),
  onClear: action('clear'),
  startButtons: [{ text: 'Назад', icon: ArrowLeftSVG, onClick: action('back') }],
  endButtons: [
    { text: 'Oтмена', onClick: action('cancel') },
    { text: 'Поиск', onClick: action('start') },
  ],
  description: '150 324 предложений',
  placeholder: 'Найти',
};
