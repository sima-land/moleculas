import React from 'react';
import { ProductSlider } from '..';
import { items } from '../__test__/test-items';
import { action } from '@storybook/addon-actions';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { Button } from '@sima-land/ui-nucleons/button';
import { omit } from 'lodash';

export default {
  title: 'mobile/ProductSlider',
  component: ProductSlider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент слайдера рекомендаций',
      },
    },
  },
};

const Placeholder = () => (
  <div
    style={{
      height: '40px',
      borderRadius: '4px',
      background: '#eee',
      marginTop: '20px',
      marginBottom: '20px',
    }}
  />
);

export const Primary = () => (
  <>
    <MobileLayout>
      <Placeholder />
    </MobileLayout>

    <ProductSlider>
      {items.map((item, index) => (
        <ProductSlider.Item
          key={index}
          data={item}
          onLinkClick={event => {
            event.preventDefault();
            action('item:link-click')(item.name);
          }}
          onFavoriteClick={() => {
            action('item:favorite-click')(item.name);
          }}
        />
      ))}
    </ProductSlider>

    <MobileLayout>
      <Placeholder />
    </MobileLayout>
  </>
);

export const ItemFooter = () => (
  <>
    <MobileLayout>
      <Placeholder />
    </MobileLayout>

    <ProductSlider>
      {items.map((item, index) => (
        <ProductSlider.Item
          key={index}
          data={omit(item, 'badges')}
          onLinkClick={event => {
            event.preventDefault();
            action('item:link-click')(item.name);
          }}
          onFavoriteClick={() => {
            action('item:favorite-click')(item.name);
          }}
          footer={(
            <Button size='s'>В корзину</Button>
          )}
        />
      ))}
    </ProductSlider>

    <MobileLayout>
      <Placeholder />
    </MobileLayout>
  </>
);
