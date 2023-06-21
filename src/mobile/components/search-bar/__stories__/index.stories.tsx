import React, { useState } from 'react';
import { SearchBar } from '..';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
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

export const Primary = () => {
  const [value, setValue] = useState<string>('');

  return (
    <SearchBar
      value={value}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
      endButtons={[{ text: 'Поиск', onClick: action('search') }]}
    />
  );
};

Primary.storyName = 'Простой пример';

export const Secondary = () => {
  const [value, setValue] = useState<string>('');

  return (
    <SearchBar
      value={value}
      withSearchIcon={false}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
      startButtons={[{ text: 'Назад', icon: ArrowLeftSVG, onClick: action('back') }]}
      endButtons={[
        { text: 'Oтмена', onClick: action('cancel') },
        { text: 'Поиск', onClick: action('start') },
      ]}
      description='150 324 предложений'
      placeholder='Найти'
    />
  );
};

Secondary.storyName = 'С иконками';
