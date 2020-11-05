import React from 'react';
import PseudoInput from '../';
import noop from 'lodash/noop';

const Template = args => (
  <div style={{ width: '20%' }}>
    <PseudoInput {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Example',
  onClick: noop,
};
