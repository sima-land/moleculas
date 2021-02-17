import React from 'react';
import { action } from '@storybook/addon-actions';
import { Breadcrumbs } from '..';
import items from '../items';

export default {
  title: 'desktop/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export const Primary = () => (
  <div style={{ width: '500px' }}>
    <Breadcrumbs
      items={items}
      onOpenBreadcrumbs={action('popup was opened')}
    />
  </div>
);
