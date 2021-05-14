import React from 'react';
import { TrackingInfoScreen } from '../';

export default {
  title: 'mobile/TrackingInfoScreen',
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
    { title: 'Трек-номер 1 посылки', trackNumber: '62096122576448448' },
    { title: 'Трек-номер 2 посылки', trackNumber: '62096122576448448' },
    { title: 'Трек-номер 3 посылки', trackNumber: '62096122576448448' },
    { title: 'Трек-номер 4 посылки', trackNumber: '62096122576448448' },
    { title: 'Трек-номер 5 посылки', trackNumber: '62096122576448448' },
    { title: 'Трек-номер 6 посылки', trackNumber: '62096122576448448' },
    { title: 'Трек-номер 7 посылки', trackNumber: '62096122576448448' },
  ],
  deliverySite: 'cdek.ru',
};
Primary.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 700,
  },
};
