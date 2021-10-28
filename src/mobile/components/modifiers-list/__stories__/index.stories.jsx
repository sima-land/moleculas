import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { ModifiersList } from '..';
import classes from './modifiers-list.module.scss';
import items from './items';

export default {
  title: 'mobile/Modifiers/ModifiersList',
  component: ModifiersList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент списка модификаторов',
      },
    },
  },
};

export const Primary = () => (
  <>
    <div className={classes.list}>
      <div className={classes.title}>Фото</div>
      <ModifiersList items={items.withPhoto} currencyGrapheme='₽' />
    </div>
    <div className={classes.list}>
      <div className={classes.title}>Цвет</div>
      <ModifiersList items={items.withColor} currencyGrapheme='₽' />
    </div>
    <div className={classes.list}>
      <div className={classes.title}>Текст</div>
      <ModifiersList items={items.withText} currencyGrapheme='₽' />
    </div>
  </>
);

export const WithSizeTableURL = () => (
  <div className={classes.list}>
    <div className={classes.title}>С таблицей размеров</div>
    <ModifiersList
      items={[...items.withPhoto, ...items.withColor]}
      currencyGrapheme='₽'
      sizesTableUrl='/'
    />
  </div>
);

export const WithCustomProps = () => (
  <Fragment>
    <div className={classes.list}>
      <div className={classes.title}>Обертка</div>
      <ModifiersList
        items={[...items.withPhoto, ...items.withColor]}
        currencyGrapheme='₽'
        sizesTableUrl='/'
        wrapperProps={{ className: classes.scrollable }}
      />
    </div>
    <div className={classes.list}>
      <div className={classes.title}>Контейнер</div>
      <ModifiersList
        items={[...items.withPhoto, ...items.withColor]}
        currencyGrapheme='₽'
        sizesTableUrl='/'
        itemsContainerProps={{ className: classes.scrollable }}
      />
    </div>
  </Fragment>
);

export const ItemClickHandle = () => (
  <Fragment>
    <div className={classes.list}>
      <div className={classes.title}>onItemClick</div>
      <ModifiersList
        items={[...items.withPhoto, ...items.withColor]}
        currencyGrapheme='₽'
        wrapperProps={{ className: classes.scrollable }}
        onItemClick={action('onClick')}
      />
    </div>
  </Fragment>
);
