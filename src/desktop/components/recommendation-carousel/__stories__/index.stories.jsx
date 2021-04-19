import React from 'react';
import { action } from '@storybook/addon-actions';
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
      onItemFavoriteClick={action('click:favorite')}
      onItemQuickViewClick={action('click:quick-view')}
      onItemAdd={action('item-add')}
      onItemChange={action('item-change')}
      onItemSubtract={action('item-subtract')}
    />
  </Box>
);

Primary.storyName = 'Использование';
