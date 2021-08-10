import React from 'react';
import { action } from '@storybook/addon-actions';
import { RecommendationCarousel } from '..';
import { Box } from '@sima-land/ui-nucleons/box';
import { items } from '../__test__/test-items';

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
      onItemQuickViewClick={action('click:quick-view')}
      onItemAdd={action('item-add')}
      onItemChange={action('item-change')}
      onItemSubtract={action('item-subtract')}
      withHoverCard
    />
  </Box>
);

export const NoHoverCard = () => (
  <Box padding={5}>
    <RecommendationCarousel
      title='Рекомендованные товары'
      items={items}
      onItemQuickViewClick={action('click:quick-view')}
      onItemAdd={action('item-add')}
      onItemChange={action('item-change')}
      onItemSubtract={action('item-subtract')}
    />
  </Box>
);

export const LinkClickHandle = () => (
  <Box padding={5}>
    <RecommendationCarousel
      title='Рекомендованные товары'
      items={items}
      onItemQuickViewClick={action('click:quick-view')}
      onItemAdd={action('item-add')}
      onItemChange={action('item-change')}
      onItemSubtract={action('item-subtract')}
      onItemLinkClick={(e, item) => {
        e.preventDefault();
        action('redirect prevented for item:')(item.product.name);
      }}
      withHoverCard
    />
  </Box>
);

export const LinkClickHandleNoHover = () => (
  <Box padding={5}>
    <RecommendationCarousel
      title='Рекомендованные товары'
      items={items}
      onItemQuickViewClick={action('click:quick-view')}
      onItemAdd={action('item-add')}
      onItemChange={action('item-change')}
      onItemSubtract={action('item-subtract')}
      onItemLinkClick={(e, item) => {
        e.preventDefault();
        action('redirect prevented for item:')(item.product.name);
      }}
    />
  </Box>
);

Primary.storyName = 'Использование';
