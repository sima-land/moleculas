import { createRef } from 'react';
import { render } from '@testing-library/react';
import { Badge, BadgeProps } from '..';
import { addDays, addMonths } from 'date-fns';

describe('Badge', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should handle "shape" prop', () => {
    const { rerender, getByTestId } = render(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
      />,
    );

    expect(getByTestId('badge').classList.contains('shape-round')).toBe(false);
    expect(getByTestId('badge').classList.contains('shape-pill')).toBe(false);

    rerender(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
        shape='round'
      />,
    );

    expect(getByTestId('badge').classList.contains('shape-round')).toBe(true);
    expect(getByTestId('badge').classList.contains('shape-pill')).toBe(false);

    rerender(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
        shape='pill'
      />,
    );

    expect(getByTestId('badge').classList.contains('shape-round')).toBe(false);
    expect(getByTestId('badge').classList.contains('shape-pill')).toBe(true);
  });

  it('should handle "coloring" prop', () => {
    const { rerender, getByTestId } = render(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
      />,
    );

    expect(getByTestId('badge').classList.contains('coloring-outline')).toBe(true);
    expect(getByTestId('badge').classList.contains('coloring-fill')).toBe(false);

    rerender(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
        coloring='outline'
      />,
    );

    expect(getByTestId('badge').classList.contains('coloring-outline')).toBe(true);
    expect(getByTestId('badge').classList.contains('coloring-fill')).toBe(false);

    rerender(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
        coloring='fill'
      />,
    );

    expect(getByTestId('badge').classList.contains('coloring-outline')).toBe(false);
    expect(getByTestId('badge').classList.contains('coloring-fill')).toBe(true);

    rerender(
      <Badge
        href='https://www.ya.ru'
        color='#000'
        fields={[{ type: 'text', value: 'Some text' }]}
        coloring='unset'
      />,
    );

    expect(getByTestId('badge').classList.contains('coloring-outline')).toBe(false);
    expect(getByTestId('badge').classList.contains('coloring-fill')).toBe(false);
  });

  it('should renders correctly', () => {
    const variants: BadgeProps[] = [
      // text view
      {
        color: '#00b8d4',
        href: 'https://sima-land.ru',
        fields: [{ type: 'text', value: 'Система скидок' }],
      },

      // icon only view
      {
        color: '#ff7200',
        href: 'https://sima-land.ru',
        fields: [
          {
            type: 'svg-url',
            value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg',
          },
        ],
      },

      // timer view
      {
        color: '#b52ea8',
        href: 'https://sima-land.ru',
        fields: [{ type: 'timer', value: addDays(new Date(), 7).toISOString() }],
      },

      // timer + text view
      {
        color: '#b52ea8',
        href: 'https://sima-land.ru',
        fields: [
          { type: 'timer', value: addMonths(new Date(), 3).toISOString() },
          { type: 'text', value: ' — Специальные цены на музыкальные инструменты' },
        ],
      },

      // no hover effect
      {
        color: '#607d8b',
        fields: [{ type: 'text', value: 'Уценённый товар' }],
      },
    ];

    variants.forEach(variant => {
      const { container } = render(<Badge {...variant} />);

      expect(container).toMatchSnapshot();
    });
  });

  it('should handle "rel" prop', () => {
    const { getByRole } = render(
      <Badge
        href='https://www.ya.ru'
        rel='nofollow'
        color='#f00'
        fields={[{ type: 'text', value: 'Some text' }]}
      />,
    );

    expect(getByRole('link').getAttribute('rel')).toBe('nofollow');
  });

  it('should handle rootRef', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { getByTestId } = render(
      <Badge
        rootRef={ref}
        href='https://www.ya.ru'
        rel='nofollow'
        color='#f00'
        fields={[{ type: 'text', value: 'Some text' }]}
      />,
    );

    expect(ref.current).toBe(getByTestId('badge'));
  });

  it('should render icon img with alt attribute', () => {
    const { container } = render(
      <Badge
        color='#ff7200'
        href='https://sima-land.ru'
        fields={[
          {
            type: 'svg-url',
            value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg',
          },
        ]}
      />,
    );

    expect(container.querySelector('img')?.hasAttribute('alt')).toBe(true);
  });

  it('should render icon and text', () => {
    const { getByTestId } = render(
      <Badge
        color='#ff7200'
        href='https://sima-land.ru'
        fields={[
          {
            type: 'text',
            value: 'Hello, world!',
          },
          {
            type: 'svg-url',
            value: 'public/icon_notice.svg',
          },
        ]}
      />,
    );

    expect(getByTestId('badge').querySelectorAll('img')).toHaveLength(1);
    expect(getByTestId('badge').textContent).toBe('Hello, world!');
  });

  it('should merge text and text to one span', () => {
    const { getByTestId } = render(
      <Badge
        color='#ff7200'
        href='https://sima-land.ru'
        fields={[
          {
            type: 'text',
            value: 'Hello',
          },
          {
            type: 'text',
            value: 'World',
          },
          {
            type: 'svg-url',
            value: 'public/icon_notice.svg',
          },
        ]}
      />,
    );

    expect(getByTestId('badge').querySelectorAll('img')).toHaveLength(1);
    expect(getByTestId('badge').querySelectorAll('span')).toHaveLength(1);
    expect(getByTestId('badge').textContent).toBe('Hello World');
  });

  it('should merge text and timer to one span', () => {
    const { getByTestId } = render(
      <Badge
        color='#ff7200'
        href='https://sima-land.ru'
        fields={[
          {
            type: 'text',
            value: 'Hello',
          },
          {
            type: 'timer',
            value: addDays(new Date(), 7).toISOString(),
          },
          {
            type: 'svg-url',
            value: 'public/icon_notice.svg',
          },
        ]}
      />,
    );

    expect(getByTestId('badge').querySelectorAll('img')).toHaveLength(1);
    expect(getByTestId('badge').querySelectorAll('span')).toHaveLength(1);
    expect(getByTestId('badge').textContent).toBe('Hello 07:00:00');
  });

  it('should handle children', () => {
    const { getByTestId } = render(
      <Badge color='#ff7200' href='https://sima-land.ru'>
        <b>Some text here</b>
      </Badge>,
    );

    expect(getByTestId('badge').querySelectorAll('b')).toHaveLength(1);
    expect(getByTestId('badge').textContent).toBe('Some text here');
  });

  it('should handle "as" prop', () => {
    const { rerender, getByTestId } = render(
      <Badge as={undefined} href='https://sima-land.ru'>
        <b>Some text here</b>
      </Badge>,
    );

    expect(getByTestId('badge').tagName).toBe('A');
    expect(getByTestId('badge').textContent).toBe('Some text here');

    rerender(
      <Badge as='anchor' href='https://sima-land.ru'>
        <b>Some text here</b>
      </Badge>,
    );

    expect(getByTestId('badge').tagName).toBe('A');
    expect(getByTestId('badge').textContent).toBe('Some text here');

    rerender(
      <Badge as='span'>
        <b>Some text here</b>
      </Badge>,
    );

    expect(getByTestId('badge').tagName).toBe('SPAN');
    expect(getByTestId('badge').textContent).toBe('Some text here');

    rerender(
      <Badge as='div'>
        <b>Some text here</b>
      </Badge>,
    );

    expect(getByTestId('badge').tagName).toBe('DIV');
    expect(getByTestId('badge').textContent).toBe('Some text here');

    rerender(
      <Badge as='button' type='submit'>
        <b>Some text here</b>
      </Badge>,
    );

    expect(getByTestId('badge').tagName).toBe('BUTTON');
    expect(getByTestId('badge').textContent).toBe('Some text here');
  });
});
