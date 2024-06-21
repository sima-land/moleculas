import { Badge } from '@sima-land/moleculas/common/components/badge';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export function NoHoverEffectView() {
  return (
    <>
      <Badge color='#607d8b' fields={[{ type: 'text', value: 'Уценённый товар' }]} />
    </>
  );
}

NoHoverEffectView.storyName = 'Без ссылки и hover';
