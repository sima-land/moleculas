import { SearchBar } from '@sima-land/moleculas/mobile/components/search-bar';
import { useState } from 'react';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';

export default {
  title: 'mobile/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

export function Secondary() {
  const [value, setValue] = useState<string>('');

  return (
    <SearchBar
      value={value}
      withSearchIcon={false}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
      startButtons={[
        {
          text: 'Назад',
          icon: ArrowLeftSVG,
          onClick: () => 'К сожалению некуда возвращаться...',
        },
      ]}
      endButtons={[
        {
          text: 'Отмена',
          onClick: () => alert('Якобы произошла отмена...'),
        },
        {
          text: 'Поиск',
          onClick: () => alert('Сделаем вид что что-то нашли...'),
        },
      ]}
      description='150 324 предложений'
      placeholder='Найти'
    />
  );
}

Secondary.storyName = 'С иконками';
