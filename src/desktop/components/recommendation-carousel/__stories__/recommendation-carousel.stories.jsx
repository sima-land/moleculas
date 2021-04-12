import React from 'react';

// Импортируем чистый компонент без HOC, чтобы корректно отображалось имя компонента.
import { RecommendationCarousel } from '../index';
import { Box } from '@dev-dep/ui-nucleons/box';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';

const Template = args => <Box paddingX={12}><RecommendationCarousel {...args} /></Box>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Рекомендованные товары',
  items,
};
