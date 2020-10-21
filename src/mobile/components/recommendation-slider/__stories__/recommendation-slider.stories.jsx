import React from 'react';
import { RecommendationSlider } from '../index';
import Box from '@dev-dep/ui-nucleons/box';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';

const Template = args => <Box paddingX={12}><RecommendationSlider {...args} /></Box>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Рекомендованные товары',
  items,
};
