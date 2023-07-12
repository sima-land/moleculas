import { ModifiersList } from '@sima-land/moleculas/mobile/components/modifiers-list';
import { CSSProperties } from 'react';
import { text, color, image } from './items';

export default {
  title: 'mobile/ModifiersList',
  component: ModifiersList,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const styles: CSSProperties = {
  width: '320px',
  background: '#fff',
};

export function Primary() {
  return (
    <>
      <div style={styles}>
        <ModifiersList items={image} currencyGrapheme='₽' />
      </div>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Colors() {
  return (
    <>
      <div style={styles}>
        <ModifiersList items={color} currencyGrapheme='₽' />
      </div>
    </>
  );
}

Colors.storyName = 'Модификаторы цвета';

export function Text() {
  return (
    <>
      <div style={styles}>
        <ModifiersList items={text} currencyGrapheme='₽' />
      </div>
    </>
  );
}

Text.storyName = 'Текстовые модификаторы';

export function WithSizeTableURL() {
  return (
    <div style={styles}>
      <ModifiersList items={[...image, ...color]} currencyGrapheme='₽' sizesTableUrl='/' />
    </div>
  );
}

WithSizeTableURL.storyName = 'Ссылка на таблицу размеров';
