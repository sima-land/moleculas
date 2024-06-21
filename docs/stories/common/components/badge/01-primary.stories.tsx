import { Badge } from '@sima-land/moleculas/common/components/badge';

export const meta = {
  category: 'common/Badge',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <Badge
      href='https://sima-land.ru'
      color='#002b41'
      fields={[{ type: 'text', value: 'Товар партнёра' }]}
    />
  );
}
