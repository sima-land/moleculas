import React from 'react';
import { Breadcrumbs } from '..';

export default {
  title: 'mobile/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export const Primary = () => (
  <>
    <div style={{ background: '#ddd', height: 32 }} />
    <Breadcrumbs
      items={[
        {
          name: 'Каталог',
          url: '#',
        },
        {
          name: 'Одежда и обувь',
          url: '#',
        },
        {
          name: 'Женская одежда',
          url: '#',
        },
        {
          name: 'Аксессуары',
          url: '#',
        },
        {
          name: 'Брендированные стойки «Этель» и «Доляна» в подарок за покупку кухонного текстиля',
          url: '#',
        },
        {
          name: 'Головные уборы',
          url: '#',
        },
        {
          name: 'Кепки, бейсболки',
          url: '#',
        },
        {
          name: 'Текущая страница',
          url: '#',
        },
      ]}
    />
    <div style={{ background: '#ddd', height: 32 }} />
  </>
);
