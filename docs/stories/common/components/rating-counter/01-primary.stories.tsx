import { RatingCounter } from '@sima-land/moleculas/common/components/rating-counter';

export const meta = {
  category: 'common/RatingCounter',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <RatingCounter value={4.5} reviewCount={28} />
      <RatingCounter size='m' value={4.5} reviewCount={28} />

      <RatingCounter value={0} reviewCount={0} />
      <RatingCounter size='m' value={0} reviewCount={0} />
    </div>
  );
}
