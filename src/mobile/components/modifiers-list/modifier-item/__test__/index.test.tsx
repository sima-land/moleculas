import { render } from '@testing-library/react';
import { ModifierItem } from '..';

describe('ModifierItem', () => {
  it('should render item with default type and additional text', () => {
    const { container } = render(
      <ModifierItem name='Foo bar baz!' price={400} additionalText='Extra info' />,
    );

    expect(container.textContent).toContain('Foo bar baz!');
    expect(container.textContent).toContain('400');
    expect(container.textContent).toContain('Extra info');
  });

  it('should render item with color', () => {
    const { container } = render(
      <ModifierItem type='color' color='#0f0' name='Color item!' price={800} />,
    );

    const img = container.querySelector<HTMLElement>('.adornment.color');

    expect(img?.style.backgroundColor).toBe('rgb(0, 255, 0)');
    expect(container.textContent).toContain('Color item!');
    expect(container.textContent).toContain('800');
  });

  it('should render selected item with image and price', () => {
    const { container } = render(
      <ModifierItem
        type='image'
        image='https://www.images.com/234'
        name='Hello, world!'
        price={400}
        currencyGrapheme='$'
        selected
      />,
    );

    expect(container.querySelectorAll('svg[role="presentation"]')).toHaveLength(1);
    expect(container.textContent).toContain('Hello, world!');
    expect(container.textContent).toContain('400\u2009$');
    expect(container.querySelector('img')?.getAttribute('src')).toBe('https://www.images.com/234');
  });
});
