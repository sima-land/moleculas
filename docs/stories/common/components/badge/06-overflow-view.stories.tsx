import { Badge } from '@sima-land/moleculas/common/components/badge';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export function OverflowView() {
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

OverflowView.storyName = 'Переполнение';
