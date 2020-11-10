import React from 'react';
import { ListItem } from '../index';
import { data } from '../../../../common/__fixtures__/list-item';

const Template = args => <ListItem {...args} />;

export const ListView = Template.bind({});
export const TileView = args => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    }}
  >
    {Array(4).fill(null).map((_, key) => (
      <ListItem key={key} {...args} />
    ))}
  </div>
);
export const AdultView = Template.bind({});
export const WithoutCartView = Template.bind({});
export const ModifierView = Template.bind({});
export const AddedView = Template.bind({});

ListView.storyName = 'Списком';
ListView.args = {
  ...data,
  hasSid: true,
  hasAddToCartBlock: true,
  hasWishButton: true,
  hasActionsButton: true,
  isWished: true,
};

TileView.storyName = 'Плиткой';
TileView.args = {
  ...data,
  hasSid: true,
  hasAddToCartBlock: true,
  hasWishButton: true,
  asTile: true,
  hasActionsButton: false,
};

AdultView.storyName = 'Товар 18+';
AdultView.args = {
  ...data,
  shouldHideAdultContent: true,
};

WithoutCartView.storyName = 'Без добавления в корзину';
WithoutCartView.args = {
  ...data,
  hasAddToCartBlock: false,
  inStockProps: {
    text: 'Товара нет на складе',
    isGray: true,
  },
};

ModifierView.storyName = 'С модификаторами';
ModifierView.args = {
  ...data,
  hasAddToCartBlock: true,
  modifierProps: {
    currentModifier:
      {
        selected: true,
        name: 'черный',
        priority: 0,
      },
    title: 'Варианты',
    count: 5,
    type: 'image',
  },
};

AddedView.storyName = 'В корзине';
AddedView.args = {
  ...data,
  hasAddToCartBlock: true,
  qty: 5,
  displayedQuantity: 5,
};
