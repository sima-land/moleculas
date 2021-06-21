import React from 'react';
import { ProductActionsAlert, ProductActionsAlertProps } from '..';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import StatementSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/statement';
import ThumbsUpSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/thumbs-up';

export default {
  title: 'mobile/ProductActionsAlert',
  component: ProductActionsAlert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент алерта действий над товаром',
      },
    },
  },
};

const Template: Story<ProductActionsAlertProps> = args => (
  <div style={{ margin: '16px' }}>
    <ProductActionsAlert {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  buttons: [
    {
      text: 'Оформить претензию',
      icon: <StatementSVG />,
      href: 'https://test-domain.test/create-claim-link/',
    },
    {
      text: 'Оставить отзыв',
      icon: <ThumbsUpSVG />,
      onClick: action('Нажато на \'Оставить отзыв\''),
    },
  ],
  onClose: action('Нажато на \'Закрыть\''),
};
