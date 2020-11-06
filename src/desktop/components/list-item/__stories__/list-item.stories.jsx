import React from 'react';
import { ListItem } from '../index';
import { data } from '../../../../common/__fixtures__/list-item';
import noop from 'lodash/noop';

const Template = args => <ListItem {...args} />;

export const ListView = Template.bind({});
export const TileView = Template.bind({});
export const AdultView = Template.bind({});
export const WithoutCartView = Template.bind({});
export const ModifierView = Template.bind({});
export const SelectedView = Template.bind({});
export const AddedView = Template.bind({});

ListView.storyName = 'Списком';
ListView.args = {
  ...data,
  hasQuickPreview: true,
  hasAddToCartBlock: true,
  hasWishButton: true,

  updateItemViewed: noop,
  onLoadImage: noop,
};

TileView.storyName = 'Плиткой';
TileView.args = {
  ...data,
  hasQuickPreview: true,
  hasAddToCartBlock: true,
  hasSelectionButton: true,
  hasTrashButton: true,
  asTile: true,

  updateItemViewed: noop,
  onLoadImage: noop,
};

AdultView.storyName = 'Товар 18+';
AdultView.args = {
  ...data,
  shouldHideAdultContent: true,

  updateItemViewed: noop,
  onLoadImage: noop,
};

WithoutCartView.storyName = 'Без добавления в корзину';
WithoutCartView.args = {
  ...data,
  hasAddToCartBlock: false,
  hasAnaloguesButton: true,
  inStockText: 'Товара нет на складе',

  updateItemViewed: noop,
  onLoadImage: noop,
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

  updateItemViewed: noop,
  onLoadImage: noop,
};

SelectedView.storyName = 'Выбранный';
SelectedView.args = {
  ...data,
  hasSelectionButton: true,
  selectionProps: {
    isSelected: true,
  },

  updateItemViewed: noop,
  onLoadImage: noop,
};

AddedView.storyName = 'В корзине';
AddedView.args = {
  ...data,
  hasAddToCartBlock: true,
  qty: 5,
  displayedQuantity: 5,

  updateItemViewed: noop,
  onLoadImage: noop,
};
