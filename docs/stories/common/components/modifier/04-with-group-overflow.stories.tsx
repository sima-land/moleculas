import {
  Modifier,
  ModifierContent,
  MoreButton,
} from '@sima-land/moleculas/common/components/modifier';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { GroupOverflow } from '@sima-land/ui-nucleons/group-overflow';

export const meta = {
  category: 'common/Modifier',
  title: 'Вместе с GroupOverflow',
  parameters: {
    layout: 'padded',
  },
};

export default function WithGroupOverflow() {
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
