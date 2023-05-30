import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modifier, MoreButton } from '..';

describe('Modifier', () => {
  it('should render text', () => {
    const { container } = render(<Modifier content={{ type: 'text', text: 'Hello, world!' }} />);

    expect(container.textContent).toBe('Hello, world!');
  });

  it('should render color', () => {
    const { container } = render(<Modifier content={{ type: 'color', color: '#f00' }} />);

    const color = container.querySelector<HTMLElement>('span[role="banner"]');

    expect(color?.style.background).toBe('rgb(255, 0, 0)');
  });

  it('should render image', () => {
    const { container } = render(
      <Modifier content={{ type: 'image', src: 'https://image.com/234' }} />,
    );

    const image = container.querySelector<HTMLElement>('span[role="banner"]');

    expect(image?.style.backgroundImage).toBe('url(https://image.com/234)');
  });

  it('should render counter', () => {
    const { container } = render(<Modifier content={{ type: 'text', text: 'Hi' }} count={12} />);

    expect(container.textContent).toContain('Hi');
    expect(container.textContent).toContain('12');
  });

  it('should render counter with large count', () => {
    const { container } = render(<Modifier content={{ type: 'text', text: 'Hi' }} count={123} />);

    expect(container.textContent).toContain('Hi');
    expect(container.textContent).toContain('99+');
  });

  it('should render crossed out', () => {
    const { container } = render(<Modifier content={{ type: 'text', text: 'Hi' }} crossedOut />);

    expect(container.querySelectorAll('svg')).toHaveLength(1);
  });

  it('should render hint on hover for truncated text only', async () => {
    const { container, rerender, queryAllByTestId } = render(
      <Modifier content={{ type: 'text', text: 'Hello' }} />,
    );

    const text = container.querySelector<HTMLElement>('span.text');

    Object.defineProperty(text, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(text, 'clientWidth', {
      value: 100,
    });

    rerender(<Modifier content={{ type: 'text', text: 'Hello, world!' }} />);

    await userEvent.hover(text as any);

    expect(queryAllByTestId('hint')).toHaveLength(1);
  });

  it('should handle markdown prop', () => {
    const { container } = render(<Modifier content={{ type: 'text', text: 'Hi' }} markdown />);

    expect(container.textContent).toContain('У');
  });
});

describe('MoreButton', () => {
  it('should render modifier with specific className', () => {
    const { container } = render(<MoreButton count={46} />);

    expect(container.textContent).toBe('+46');
  });
});
