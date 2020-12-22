import React from 'react';
import CabinetMenu from '../index';
import { noop } from 'lodash';
import { cabinetMenuItems } from '../../../../common/__fixtures__/cabinet-menu';
import SupperEllipseClipPath from '@dev-dep/ui-nucleons/super-ellipse-clip-path';

const Template = args => (
  <div style={{ width: '280px' }}>
    <CabinetMenu {...args} />
    <SupperEllipseClipPath id='header-image-clip-path' />
  </div>
);
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  avatar: 'http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg',
  superEllipseId: 'header-image-clip-path',
  userName: 'Василий Пупкин',
  items: cabinetMenuItems,
  settingsLink: '/',
  onReportClick: noop,
};

Secondary.args = {
  avatar: 'http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg',
  superEllipseId: 'header-image-clip-path',
  userName: 'Василий Пупкин',
  items: cabinetMenuItems,
  settingsLink: '/',
  onReportClick: noop,
};

Secondary.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
