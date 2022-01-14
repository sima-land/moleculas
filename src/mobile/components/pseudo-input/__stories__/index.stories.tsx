import React from 'react';
import { PseudoInput } from '..';

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

export const Primary = () => <PseudoInput text='Искать туфли' />;
