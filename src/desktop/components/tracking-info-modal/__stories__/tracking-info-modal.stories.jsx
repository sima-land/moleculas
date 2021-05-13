import React from 'react';
import { TrackingInfoModal } from '../index';
import { action } from '@storybook/addon-actions';

const Template = args => <TrackingInfoModal {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Модальное окно отслеживания';
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
  onCopy: action('copy'),
};
Primary.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 700,
  },
};
