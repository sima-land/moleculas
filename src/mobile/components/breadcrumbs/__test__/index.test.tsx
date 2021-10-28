import React from 'react';
import { mount } from 'enzyme';
import { Breadcrumbs } from '..';

describe('Breadcrumbs', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
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
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
