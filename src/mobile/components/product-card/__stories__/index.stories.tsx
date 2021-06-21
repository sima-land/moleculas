import { Story } from '@storybook/react';
import { noop } from 'lodash';
import React from 'react';
import ProductCard, { Props } from '..';

export default {
  title: 'mobile/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент информации о товаре',
      },
    },
  },
};

const Template: Story<Props> = props => (
  <div style={{ width: '480px', height: '160px', margin: '80px auto' }}>
    <ProductCard {...props} />
  </div>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Thirdy = Template.bind({});
export const WithoutHeart = Template.bind({});

const baseArgs: Props = {
  itemUrl: '/',
  imageUrl: 'https://cdn3.static1-sima-land.com/items/4243920/0/280.jpg?v=1584652193',
  name: 'Тестовое название',
  sid: 123456,
  isWished: false,
  count: 1,
  unit: 'шт.',
  initialCount: 1,
  movedOrderId: 1,
  notInStock: false,
  currencyGrapheme: 'р',
  commonPrice: 1234,
  itemPrice: 1234,
  onWishButtonClick: noop,
  onActionsClick: noop,
  isFetchingWishItems: false,
};

Primary.args = {
  ...baseArgs,
  notInStock: true,
  movedOrderId: 0,
  initialCount: 0,
};

Secondary.args = {
  ...baseArgs,
  initialCount: 0,
};

Thirdy.args = {
  ...baseArgs,
  commonPrice: 0,
  itemPrice: 0,
  movedOrderId: undefined,
};

WithoutHeart.args = {
  ...baseArgs,
  commonPrice: 0,
  itemPrice: 0,
  movedOrderId: undefined,
  onWishButtonClick: undefined,
};
