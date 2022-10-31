import React from 'react';
import { RatingCounter } from '..';

export default {
  title: 'common/RatingCounter',
  component: RatingCounter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Карточка базовой информации о товаре',
      },
    },
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
