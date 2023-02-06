import React from 'react';
import { ModifiersList } from '..';
import classes from './modifiers-list.module.scss';
import items from './items';

export default {
  title: 'mobile/ModifiersList',
  component: ModifiersList,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export const Primary = () => (
  <>
    <div className={classes.list}>
      <ModifiersList items={items.withPhoto} currencyGrapheme='₽' />
    </div>
  </>
);

Primary.storyName = 'Простой пример';

export const Colors = () => (
  <>
    <div className={classes.list}>
      <ModifiersList items={items.withColor} currencyGrapheme='₽' />
    </div>
  </>
);

Colors.storyName = 'Модификаторы цвета';

export const Text = () => (
  <>
    <div className={classes.list}>
      <ModifiersList items={items.withText} currencyGrapheme='₽' />
    </div>
  </>
);

Text.storyName = 'Текстовые модификаторы';

export const WithSizeTableURL = () => (
  <div className={classes.list}>
    <ModifiersList
      items={[...items.withPhoto, ...items.withColor]}
      currencyGrapheme='₽'
      sizesTableUrl='/'
    />
  </div>
);

WithSizeTableURL.storyName = 'Ссылка на таблицу размеров';
