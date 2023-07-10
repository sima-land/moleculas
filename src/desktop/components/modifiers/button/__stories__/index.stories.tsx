import { random } from 'lodash';
import { ModifierButton, ModifierButtonProps } from '..';

export default {
  title: 'desktop/ModifierButton',
  component: ModifierButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент кнопки-модификатора',
      },
    },
  },
};

const mapModifier = (modifier: ModifierButtonProps, index: number) => {
  let result = modifier;

  switch (index) {
    case 1:
      result = { ...modifier, isMarkdown: true };
      break;
    case 2:
      result = { ...modifier, count: random(1, 200) };
      break;
    case 3:
      result = { ...modifier, count: random(1, 200), isMarkdown: true };
      break;
  }

  return result;
};

const textModifiers: ModifierButtonProps[] = [
  { type: 'text', content: '30 (98-104см)' },
  { type: 'text', content: '32 (110-116см)' },
  { type: 'text', content: '34 (122-128см)' },
  { type: 'text', content: '36 (134-140см)' },
];

const colorModifiers: ModifierButtonProps[] = [
  {
    type: 'color',
    content: '30 (98-104см)',
    color: 'red',
    image: 'https://cdn2.static1-sima-land.com/items/3485686/0/140.jpg?v=1541497336',
  },
  {
    type: 'color',
    content: '32 (110-116см)',
    color: '#ffab00',
  },
  {
    type: 'color',
    content: '34 (122-128см)',
    color: '#1f84db',
  },
  {
    type: 'color',
    content: '36 (134-140см)',
    color: 'green',
  },
];

const imageItems: ModifierButtonProps[] = [
  {
    type: 'image',
    content: 'желтый',
    image: 'https://cdn2.static1-sima-land.com/items/3609321/0/140.jpg?v=1547789627',
  },
  {
    type: 'image',
    content: 'красный',
    image: 'https://cdn2.static1-sima-land.com/items/3609268/0/140.jpg?v=1547789630',
  },
  {
    type: 'image',
    content: 'розовый',
    image: 'https://cdn2.static1-sima-land.com/items/3607801/0/140.jpg?v=1547706544',
  },
  {
    type: 'image',
    content: 'фиолетовый',
    image: 'https://cdn2.static1-sima-land.com/items/3607805/0/140.jpg?v=1554450174',
  },
];

export const Primary = () => (
  <>
    <h3>Текст</h3>
    {textModifiers.map(mapModifier).map((props, index) => (
      <div key={index} style={{ marginTop: '10px' }}>
        <ModifierButton type='text' {...props} />
      </div>
    ))}

    <h3>Цвет</h3>
    {colorModifiers.map(mapModifier).map((props, index) => (
      <div key={index} style={{ marginTop: '10px' }}>
        <ModifierButton type='color' {...props} />
      </div>
    ))}

    <h3>Изображение</h3>
    {imageItems.map(mapModifier).map((props, index) => (
      <div key={index} style={{ marginTop: '10px' }}>
        <ModifierButton type='image' {...props} />
      </div>
    ))}
  </>
);

Primary.storyName = 'Простой пример';

export const Selected = () => (
  <>
    <h3>Текст</h3>
    {textModifiers.map(mapModifier).map((props, index) => (
      <div key={index} style={{ marginTop: '10px' }}>
        <ModifierButton selected type='text' {...props} />
      </div>
    ))}

    <h3>Цвет</h3>
    {colorModifiers.map(mapModifier).map((props, index) => (
      <div key={index} style={{ marginTop: '10px' }}>
        <ModifierButton selected type='color' {...props} />
      </div>
    ))}

    <h3>Изображение</h3>
    {imageItems.map(mapModifier).map((props, index) => (
      <div key={index} style={{ marginTop: '10px' }}>
        <ModifierButton selected type='image' {...props} />
      </div>
    ))}
  </>
);

Selected.storyName = 'Выбран';

export const WidthLimit = () => (
  <div style={{ maxWidth: 256 }}>
    <ModifierButton
      type='text'
      content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, atque.'
    />
  </div>
);

WidthLimit.storyName = 'Ограничение ширины';
