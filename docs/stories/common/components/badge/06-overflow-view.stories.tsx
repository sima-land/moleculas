import { Badge } from '@sima-land/moleculas/common/components/badge';

export const meta = {
  category: 'common/Badge',
  title: 'Переполнение',
  parameters: {
    layout: 'padded',
  },
};

export default function OverflowView() {
  return (
    <div style={{ maxWidth: 240 }}>
      <Badge
        color='#b52ea8'
        href='https://sima-land.ru'
        fields={[{ type: 'text', value: '-56% — Специальные цены на товары для росписи' }]}
      />
    </div>
  );
}
