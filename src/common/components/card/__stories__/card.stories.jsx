import React from 'react';
import { noop } from 'lodash';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import Card from '../index';

const Template = args => (
  <div style={{ width: '480px', height: '160px', margin: '80px auto' }}>
    <Card {...args} />
  </div>
);
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  children: (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Iusto repudiandae numquam, assumenda illum expedita culpa
      atque veniam magnam perferendis deserunt reiciendis nisi
      qui facilis sed nihil beatae hic architecto aliquam.
    </div>
  ),
  contentProps: {
    style: {
      padding: '24px',
    },
  },
};

Secondary.args = {
  title: 'Lorem ipsum dolor',
  children: (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Iusto repudiandae numquam, assumenda illum expedita culpa
      atque veniam magnam perferendis deserunt reiciendis nisi
      qui facilis sed nihil beatae hic architecto aliquam.
    </div>
  ),
  contentProps: {
    style: {
      padding: '24px',
    },
  },
  footer: (
    <Clean.Group size='s'>
      <Clean.Button>Кнопка</Clean.Button>
      <Clean.Button>Кнопка</Clean.Button>
    </Clean.Group>
  ),
  withCloseButton: true,
  onClose: noop,
};
