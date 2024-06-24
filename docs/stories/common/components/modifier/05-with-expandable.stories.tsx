import {
  Modifier,
  ModifierContent,
  MoreButton,
} from '@sima-land/moleculas/common/components/modifier';
import { Expandable } from '@sima-land/ui-nucleons/expandable';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'common/Modifier',
  title: 'Вместе с Expandable',
  parameters: {
    layout: 'padded',
  },
};

export default function WithExpandable() {
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
