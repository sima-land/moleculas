import { render } from '@testing-library/react';
import { ModifierButton } from '..';

describe('ModifierButton', () => {
  it('should render selected colored button with count, markdown and text content', () => {
    const { getByTestId } = render(
      <ModifierButton count={23} color='#f00' content='Hello, world!' selected isMarkdown />,
    );

    expect(getByTestId('modifier-button').classList).toContain('selected');
    expect(getByTestId('modifier-button').textContent).toContain('Hello, world!');
    expect(getByTestId('modifier-button').style.background).toBe('rgb(255, 0, 0)');
    expect(getByTestId('modifier-button:badge').textContent).toBe('23(У)');
  });

  it('should render button with markdown and emty text content', () => {
    const { getByTestId } = render(<ModifierButton content='' selected isMarkdown />);

    expect(getByTestId('modifier-button').textContent).toBe('У');
    expect(getByTestId('modifier-button:badge').textContent).toBe('У');
  });

  it('should render  button with image, large count', () => {
    const { container, getByTestId } = render(
      <ModifierButton
        count={1100}
        type='image'
        image='https://www.images.com/123'
        content='Foo Bar'
      />,
    );

    const img = container.querySelector<HTMLImageElement>('img.image');

    expect(img?.getAttribute('src')).toBe('https://www.images.com/123');
    expect(img?.getAttribute('alt')).toBe('Foo Bar');
    expect(getByTestId('modifier-button:badge').textContent).toBe('99+');
  });
});
