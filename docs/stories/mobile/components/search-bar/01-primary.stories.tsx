import { SearchBar } from '@sima-land/moleculas/mobile/components/search-bar';
import { useState } from 'react';

export const meta = {
  category: 'mobile/SearchBar',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
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
