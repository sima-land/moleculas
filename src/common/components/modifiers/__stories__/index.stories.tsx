import React from 'react';
import { Modifier, ModifierContent } from '..';

export default {
  title: 'common/Modifier',
  component: Modifier,
  parameters: {
    layout: 'padded',
  },
};

const items: ModifierContent[] = [
  {
    type: 'color',
    color: '#00B8D4',
  },
  {
    type: 'image',
    src: 'https://loremflickr.com/200/200',
  },
  {
    type: 'text',
    text: 'Пример текста',
  },
  {
    type: 'text',
    text: 'Достаточно длинное название модификатора (или аналога товара) с большим количеством слов',
  },
];

export function Primary() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '400px' }}>
      {items.map((item, index) => (
        <Modifier count={23} key={index} content={item} />
      ))}

      {items.map((item, index) => (
        <Modifier count={23} key={index} content={item} active />
      ))}

      {items.map((item, index) => (
        <Modifier count={23} key={index} content={item} crossedOut />
      ))}

      {items.map((item, index) => (
        <Modifier count={23} key={index} content={item} disabled />
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function SizeS() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '400px' }}>
      {items.map((item, index) => (
        <Modifier size='s' count={23} key={index} content={item} />
      ))}

      {items.map((item, index) => (
        <Modifier size='s' count={23} key={index} content={item} active />
      ))}

      {items.map((item, index) => (
        <Modifier size='s' count={23} key={index} content={item} crossedOut />
      ))}

      {items.map((item, index) => (
        <Modifier size='s' count={23} key={index} content={item} disabled />
      ))}
    </div>
  );
}

SizeS.storyName = 'Размер S';
