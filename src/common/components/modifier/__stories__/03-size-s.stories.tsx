import { Modifier, ModifierContent } from '@sima-land/moleculas/common/components/modifier';
import headphones from './images/headphones.jpg';

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
    src: headphones,
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

const Container = ({ children }: any) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '400px' }}>{children}</div>
);

export function SizeS() {
  return (
    <div style={{ maxWidth: '400px' }}>
      <h4>Default</h4>
      <Container>
        {items.map((item, index) => (
          <Modifier key={index} size='s' count={23} markdown content={item} />
        ))}
      </Container>

      <h4>Crossed out</h4>
      <Container>
        {items.map((item, index) => (
          <Modifier key={index} size='s' count={23} markdown content={item} crossedOut />
        ))}
      </Container>

      <h4>Active</h4>
      <Container>
        {items.map((item, index) => (
          <Modifier key={index} size='s' count={23} markdown content={item} active />
        ))}
      </Container>

      <h4>Active + crossed out</h4>
      <Container>
        {items.map((item, index) => (
          <Modifier key={index} size='s' count={23} markdown content={item} active crossedOut />
        ))}
      </Container>

      <h4>Disabled</h4>
      <Container>
        {items.map((item, index) => (
          <Modifier key={index} size='s' count={23} markdown content={item} disabled />
        ))}
      </Container>

      <h4>Disabled + crossed out</h4>
      <Container>
        {items.map((item, index) => (
          <Modifier key={index} size='s' count={23} markdown content={item} disabled crossedOut />
        ))}
      </Container>
    </div>
  );
}

SizeS.storyName = 'Размер S';
