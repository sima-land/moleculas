import React from 'react';
import { TrackingInfoScreen } from '../';

export default {
  title: 'mobile/Tracking-info-screen',
  component: TrackingInfoScreen,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент экрана отслеживания',
      },
    },
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

const Template = args => <TrackingInfoScreen {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Экран отслеживания';
Primary.args = {
  trackNumbers: [
    { title: 'title', trackNumber: '1234567' },

  ],
  deliverySite: 'cdek.ru',
};
Primary.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 700,
  },
};
