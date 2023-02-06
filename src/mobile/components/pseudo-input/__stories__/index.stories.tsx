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

export function Primary() {
  return (
    <>
      <PseudoInput text='Искать туфли' />;
    </>
  );
}

Primary.storyName = 'Простой пример';
