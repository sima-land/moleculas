import { Modifier } from '@sima-land/moleculas/common/components/modifier';
import { useState } from 'react';
import headphones from './images/headphones.jpg';

export const meta = {
  category: 'common/Modifier',
  title: 'Тест: ошибка загрузки картинки',
  parameters: {
    layout: 'padded',
  },
};

export default function TestImageBroken() {
  const [broken, setBroken] = useState(false);
  const src = broken ? 'http://non-existed-site.com/' : headphones;

  return (
    <>
      <button onClick={() => setBroken(a => !a)}>{broken ? 'Починить' : 'Сломать'}</button>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 12 }}>
        <Modifier size='s' content={{ type: 'image', src }} />
        <Modifier size='m' content={{ type: 'image', src }} />

        <Modifier size='s' active content={{ type: 'image', src }} />
        <Modifier size='m' active content={{ type: 'image', src }} />

        <Modifier size='s' disabled content={{ type: 'image', src }} />
        <Modifier size='m' disabled content={{ type: 'image', src }} />
      </div>
    </>
  );
}
