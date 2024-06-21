import { RatingCounter } from '@sima-land/moleculas/common/components/rating-counter';

export default {
  title: 'common/RatingCounter',
  component: RatingCounter,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <RatingCounter value={4.5} reviewCount={28} />
      <RatingCounter size='m' value={4.5} reviewCount={28} />

      <RatingCounter value={0} reviewCount={0} />
      <RatingCounter size='m' value={0} reviewCount={0} />
    </div>
  );
}

Primary.storyName = 'Простой пример';
