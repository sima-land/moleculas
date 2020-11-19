import React from 'react';
import { TrackingInfo } from '../index';

const Template = args => (
  <div style={{ width: '80%', minHeight: '150px', padding: '0 40px' }}>
    <TrackingInfo {...args} />
  </div>
);

const TemplateMobile = args => (
  <div style={{ maxWidth: '500px', minHeight: '150px', padding: '0 40px' }}>
    <TrackingInfo {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  trackNumber: '12345678',
  deliverySite: 'cdek.ru',
  onCopy: () => null,
  isMobile: false,
};

export const Secondary = TemplateMobile.bind({});
Secondary.args = { ...Primary.args, isMobile: true };
