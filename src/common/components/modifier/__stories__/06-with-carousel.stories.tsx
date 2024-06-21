import { Modifier, ModifierContent } from '@sima-land/moleculas/common/components/modifier';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Carousel } from '@sima-land/ui-nucleons/carousel';

export default {
  title: 'common/Modifier',
  component: Modifier,
  parameters: {
    layout: 'padded',
  },
};

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
