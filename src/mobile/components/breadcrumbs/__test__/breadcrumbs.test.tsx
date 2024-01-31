import { render } from '@testing-library/react';
import { Breadcrumbs } from '../breadcrumbs';

describe('Breadcrumbs', () => {
  it('should renders correctly', () => {
    const { container } = render(
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

    expect(container).toMatchSnapshot();
  });

  it('should render item without url properly', () => {
    const { queryAllByTestId } = render(
      <Breadcrumbs
        items={[
          {
            name: 'First breadcrumb',
            url: 'https://first.breadcrumb/',
          },
          {
            name: 'Second breadcrumb',
            url: undefined,
          },
        ]}
      />,
    );

    const [first, second] = queryAllByTestId('breadcrumb');

    expect(first.getAttribute('href')).toBe('https://first.breadcrumb/');
    expect(first.getAttribute('role')).toBe(null);

    expect(second.getAttribute('href')).toBe(null);
    expect(second.getAttribute('role')).toBe('button');
  });
});
