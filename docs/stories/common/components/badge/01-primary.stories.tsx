import { Badge } from '@sima-land/moleculas/common/components/badge';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <Badge
      href='https://sima-land.ru'
      color='#002b41'
      fields={[{ type: 'text', value: 'Товар партнёра' }]}
    />
  );
}

Primary.storyName = 'Простой пример';
