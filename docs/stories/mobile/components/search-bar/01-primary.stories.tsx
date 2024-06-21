import { SearchBar } from '@sima-land/moleculas/mobile/components/search-bar';
import { useState } from 'react';

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

export function Primary() {
  const [value, setValue] = useState<string>('');

  return (
    <SearchBar
      value={value}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
      endButtons={[
        {
          text: 'Поиск',
          onClick: () => alert('Сделаем вид что что-то нашли...'),
        },
      ]}
    />
  );
}

Primary.storyName = 'Простой пример';
