import React from 'react';
import { action } from '@storybook/addon-actions';
import { Breadcrumbs } from '..';
import items from '../__test__/test-items';

export default {
  title: 'desktop/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <div style={{ background: '#ddd', height: 32 }} />
    <Breadcrumbs
      items={items}
      onSiblingsPopupOpen={action('popup was opened')}
      isSiblingActive={s => s.isActive}
    />
    <div style={{ background: '#ddd', height: 32 }} />
  </>
);
