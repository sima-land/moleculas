import { Badge } from '@sima-land/moleculas/common/components/badge';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export function TextView() {
  return (
    <Badge
      color='#00b8d4'
      href='https://sima-land.ru'
      fields={[{ type: 'text', value: 'Система скидок' }]}
    />
  );
}

TextView.storyName = 'Текст';
