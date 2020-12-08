import React from 'react';
import { RecommendationSlider } from '../index';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';

const Template = args => <RecommendationSlider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Рекомендованные товары',
  items,
};
