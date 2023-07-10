import { FC, useState } from 'react';
import { times } from 'lodash';
import { ModifiersGroup } from '..';
import { ModifierButton } from '../../button';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export default {
  title: 'desktop/ModifiersGroup',
  component: ModifiersGroup,
  parameters: {
    layout: 'padded',
  },
};

const DemoBlock: FC = ({ children }) => {
  const Placeholder = () => (
    <div style={{ height: '48px', background: '#eee', borderRadius: '4px' }} />
  );

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <Placeholder />
      <div style={{ margin: '16px 0' }}>{children}</div>
      <Placeholder />
    </div>
  );
};

export const Text = () => {
  const [selected, select] = useState<number>(0);
  const items: number[] = times(10).map(n => 30 + n * 2);

  return (
    <DemoBlock>
      <ModifiersGroup>
        {items.map((item, index) => (
          <ModifierButton
            key={index}
            type='text'
            content={`Размер ${item}`}
            selected={index === selected}
            onClick={() => select(index)}
          />
        ))}
      </ModifiersGroup>
    </DemoBlock>
  );
};

Text.storyName = 'Текст';

export const Color = () => {
  const [selected, select] = useState<string | null>(null);

  return (
    <DemoBlock>
      <ModifiersGroup>
        {[...COLORS].map(([name, value]) => (
          <ModifierButton
            key={name}
            type='color'
            color={value}
            content={name}
            selected={name === selected}
            onClick={() => select(name)}
          />
        ))}
      </ModifiersGroup>
    </DemoBlock>
  );
};

Color.storyName = 'Цвет';

export const Image = () => {
  const images: string[] = [
    'https://picsum.photos/50',
    'https://picsum.photos/60',
    'https://picsum.photos/70',
    'https://picsum.photos/80',
    'https://picsum.photos/90',
    'https://picsum.photos/100',
    'https://picsum.photos/110',
    'https://picsum.photos/120',
  ];

  return (
    <DemoBlock>
      <ModifiersGroup>
        {images.map((src, index) => (
          <ModifierButton key={index} type='image' image={src} content='Image' />
        ))}
      </ModifiersGroup>
    </DemoBlock>
  );
};

Image.storyName = 'Изображение';
