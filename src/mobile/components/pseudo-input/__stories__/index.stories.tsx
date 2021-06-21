import React from 'react';
import PseudoInput from '..';

export default {
  title: 'mobile/PseudoInput',
  component: PseudoInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент псевдо поля',
      },
    },
  },
};

export const Primary = () => (
  <div style={{ width: '20%' }}>
    <PseudoInput text='Example' />
  </div>
);
