import { Badge } from '@sima-land/moleculas/common/components/badge';

export const meta = {
  category: 'common/Badge',
  title: 'Текст',
  parameters: {
    layout: 'padded',
  },
};

export default function TextView() {
  return (
    <Badge
      color='#00b8d4'
      href='https://sima-land.ru'
      fields={[{ type: 'text', value: 'Система скидок' }]}
    />
  );
}
