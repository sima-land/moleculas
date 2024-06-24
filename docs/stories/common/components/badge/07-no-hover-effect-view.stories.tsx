import { Badge } from '@sima-land/moleculas/common/components/badge';

export const meta = {
  category: 'common/Badge',
  title: 'Без ссылки и hover',
  parameters: {
    layout: 'padded',
  },
};

export default function NoHoverEffectView() {
  return (
    <>
      <Badge color='#607d8b' fields={[{ type: 'text', value: 'Уценённый товар' }]} />
    </>
  );
}
