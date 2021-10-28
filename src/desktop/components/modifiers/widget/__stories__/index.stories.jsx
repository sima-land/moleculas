import React from 'react';
import { action } from '@storybook/addon-actions';
import { ModifiersWidget } from '..';
import items from './items';

export default {
  title: 'desktop/Modifiers/ModifiersWidget',
  component: ModifiersWidget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент виджета модификаторов',
      },
    },
  },
};

export const Primary = () => (
  <>
    <h3>Тип &quot;image&quot;:</h3>
    <ModifiersWidget
      title='Варианты'
      items={items.imgItems}
      onSelectItem={action('item selected')}
    />
    <br />
    <h3>Тип &quot;image&quot;, отметки о количестве в корзине и уценке:</h3>
    <ModifiersWidget
      title='Варианты'
      items={items.imgItemsWithMark}
      onSelectItem={action('item selected')}
    />
    <br />
    <h3>Тип &quot;text&quot;, с ссылкой на таблицу размеров:</h3>
    <ModifiersWidget
      title='Размер / рост'
      items={items.textItems}
      onSelectItem={action('item selected')}
      sizesTableUrl='test/url'
    />
    <br />
    <h3>Тип &quot;color&quot;:</h3>
    <ModifiersWidget title='Цвет' items={items.colorItems} onSelectItem={action('item selected')} />
    <br />
    <h3>Тип &quot;image&quot;, в узком блоке:</h3>
    <div style={{ width: 160, marginBottom: 40, padding: 20, border: '1px dashed #ccc' }}>
      <ModifiersWidget
        title='Варианты'
        items={items.imgItems.concat(items.imgItemsWithMark)}
        onSelectItem={action('item selected')}
      />
    </div>
  </>
);
