import React from 'react';
import { GarlandCalculatorButton } from '..';

export default {
  title: 'mobile/GarlandCalculatorButton',
  component: GarlandCalculatorButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент оповещения о возможности рассчитать параметры гирлянды',
      },
    },
  },
};

export const Primary = () => (
  <div style={{ margin: '0 auto', width: '360px' }}>
    <GarlandCalculatorButton />
  </div>
);
