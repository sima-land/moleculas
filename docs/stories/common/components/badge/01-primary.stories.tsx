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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
      <Badge
        color='#002b41'
        href='https://sima-land.ru'
        fields={[
          {
            type: 'text',
            value: 'Товар партнёра',
          },
        ]}
      />
    </div>
  );
}
