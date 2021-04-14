import React from 'react';
import { RecommendationCarousel } from '..';
import { Box } from '@dev-dep/ui-nucleons/box';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';

export default {
  title: 'desktop/RecommendationCarousel',
  component: RecommendationCarousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент карусели рекомендаций',
      },
    },
  },
};

export const Primary = () => (
  <Box padding={5}>
    <RecommendationCarousel
      title='Рекомендованные товары'
      items={items}
    />
  </Box>
);

Primary.storyName = 'Использование';
