import { noop } from 'lodash';
import React from 'react';
import ProductCard from '../';

const Template = args => (
  <div style={{ width: '480px', height: '160px', margin: '80px auto' }}>
    <ProductCard {...args} />
  </div>
);
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Thirdy = Template.bind({});

const baseArgs = {
  itemUrl: '/',
  imageUrl: 'https://cdn3.static1-sima-land.com/items/4243920/0/280.jpg?v=1584652193',
  name: 'Тестовое название',
  sid: 123456,
  isWished: false,
  count: 1,
  initialCount: 1,
  movedOrderId: 1,
  notInStock: false,
  currencyGrapheme: 'р',
  commonPrice: 1234,
  itemPrice: 1234,
  onWishButtonClick: noop,
  onActionsClick: noop,
  isFetchingWishItems: noop,
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
  movedOrderId: null,
};
