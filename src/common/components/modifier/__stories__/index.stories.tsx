import {
  Modifier,
  ModifierContent,
  MoreButton,
} from '@sima-land/moleculas/common/components/modifier';
import { useState } from 'react';
import { Expandable } from '@sima-land/ui-nucleons/expandable';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { GroupOverflow } from '@sima-land/ui-nucleons/group-overflow';

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
    <>
      <Modifier content={{ type: 'text', text: 'Какой-то текст' }} count={17} />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function SizeM() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '400px' }}>
      {items.map((item, index) => (
        <Modifier key={index} count={23} markdown content={item} />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} count={23} markdown content={item} crossedOut />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} count={23} markdown content={item} active />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} count={23} markdown content={item} active crossedOut />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} count={23} markdown content={item} disabled />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} count={23} markdown content={item} disabled crossedOut />
      ))}
    </div>
  );
}

SizeM.storyName = 'Размер M';

export function SizeS() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '400px' }}>
      {items.map((item, index) => (
        <Modifier key={index} size='s' count={23} markdown content={item} />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} size='s' count={23} markdown content={item} crossedOut />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} size='s' count={23} markdown content={item} active />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} size='s' count={23} markdown content={item} active crossedOut />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} size='s' count={23} markdown content={item} disabled />
      ))}

      {items.map((item, index) => (
        <Modifier key={index} size='s' count={23} markdown content={item} disabled crossedOut />
      ))}
    </div>
  );
}

SizeS.storyName = 'Размер S';

export function WithGroupOverflow() {
  const list: ModifierContent[] = [...Array(32).keys()].map(index => ({
    type: 'text',
    text: `Вариант №${index + 1}`,
  }));

  const Item = ({ children }: any) => <div style={{ padding: '4px' }}>{children}</div>;

  return (
    <Layout>
      <GroupOverflow
        gap={0.1}
        style={{ margin: '-4px' }}
        tail={data => (
          <Item>
            <MoreButton count={data.hiddenCount} />
          </Item>
        )}
      >
        {list.map((item, index) => (
          <Item key={index}>
            <Modifier content={item} count={22} />
          </Item>
        ))}
      </GroupOverflow>
    </Layout>
  );
}

WithGroupOverflow.storyName = 'Вместе с GroupOverflow';

export function WithExpandable() {
  const manyItems: ModifierContent[] = [...Array(32).keys()].map(index => ({
    type: 'text',
    text: `Вариант №${index + 1}`,
  }));

  return (
    <Layout>
      <Expandable.Group gap={8} itemHeight={48} opener={d => <MoreButton count={d.hiddenCount} />}>
        {manyItems.map((item, index) => (
          <Expandable.Item key={index}>
            <Modifier content={item} />
          </Expandable.Item>
        ))}
      </Expandable.Group>
    </Layout>
  );
}

WithExpandable.storyName = 'Вместе с Expandable';

export function WithCarousel() {
  const manyItems: ModifierContent[] = [...Array(32).keys()].map(index => ({
    type: 'text',
    text: `Вариант №${index + 1}`,
  }));

  return (
    <Layout>
      <Carousel
        autoplay={false}
        infinite={false}
        withControls={false}
        items={manyItems}
        renderItem={item => <Modifier content={item} style={{ flexShrink: 0, marginLeft: 8 }} />}
      />
    </Layout>
  );
}

WithCarousel.storyName = 'Вместе с Carousel';

export function TestImageBroken() {
  const [broken, setBroken] = useState(false);
  const src = broken ? 'http://non-existed-site.com/' : 'https://loremflickr.com/240/240';

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

TestImageBroken.storyName = 'Тест: ошибка загрузки картинки';
