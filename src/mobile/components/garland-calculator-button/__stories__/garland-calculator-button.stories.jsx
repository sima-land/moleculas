import React from 'react';
import GarlandCalculatorButton from '../index';

const Template = args => (
  <div style={{ width: '80%', padding: '0 40px' }}>
    <GarlandCalculatorButton {...args} />
  </div>
);

export const Primary = Template.bind({});
