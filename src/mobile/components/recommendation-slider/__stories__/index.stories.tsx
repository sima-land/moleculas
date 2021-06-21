import React from 'react';
import { RecommendationSlider } from '../index';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';

export default {
  title: 'mobile/RecommendationSlider',
  component: RecommendationSlider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент слайдера рекомендаций',
      },
    },
  },
};

export const Primary = () => (
  <RecommendationSlider
    title='Рекомендованные товары'
    items={items as any}
  />
);
