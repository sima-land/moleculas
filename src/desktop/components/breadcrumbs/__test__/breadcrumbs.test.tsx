import { Breadcrumbs } from '../breadcrumbs';
import { render, fireEvent, act } from '@testing-library/react';
import items from './test-items';

describe('Breadcrumbs', () => {
  it('should renders correctly', () => {
    const wrapper = render(<Breadcrumbs items={items} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should open/close siblings popup', () =>
    new Promise<void>(done => {
      const spy = jest.fn();

      const { getByTestId, queryAllByTestId } = render(
        <Breadcrumbs items={items} onSiblingsPopupOpen={spy} />,
      );

      expect(queryAllByTestId('plate')).toHaveLength(0);

      fireEvent.click(queryAllByTestId('breadcrumb:siblings-opener')[0]);

      expect(queryAllByTestId('plate')).toHaveLength(1);
      expect(queryAllByTestId('breadcrumb-sibling')).toHaveLength(7);
      expect(queryAllByTestId('breadcrumb:siblings-closer')).toHaveLength(1);

      fireEvent.click(getByTestId('breadcrumb:siblings-closer'));

      setTimeout(() => {
        expect(queryAllByTestId('plate')).toHaveLength(0);
        done();
      }, 500);
    }));

  it('should close on popup outside mousedown', () =>
    new Promise<void>(resolve => {
      const spy = jest.fn();

      const { queryAllByTestId } = render(<Breadcrumbs items={items} onSiblingsPopupOpen={spy} />);

      expect(queryAllByTestId('plate')).toHaveLength(0);

      fireEvent.click(queryAllByTestId('breadcrumb:siblings-opener')[0]);

      expect(queryAllByTestId('plate')).toHaveLength(1);

      act(() => {
        window.dispatchEvent(new MouseEvent('mousedown'));
      });

      setTimeout(() => {
        expect(queryAllByTestId('plate')).toHaveLength(0);
        resolve();
      }, 500);
    }));

  it('should open siblings popup with fetching state', () => {
    const spy = jest.fn();

    const { container, queryAllByTestId } = render(
      <Breadcrumbs
        items={[
          {
            name: 'Single breadcrumb',
            url: 'https://single.breadcrumb/',
            siblings: {
              state: 'fetching',
            },
          },
        ]}
        onSiblingsPopupOpen={spy}
      />,
    );

    expect(queryAllByTestId('plate')).toHaveLength(0);

    fireEvent.click(queryAllByTestId('breadcrumb:siblings-opener')[0]);

    expect(queryAllByTestId('plate')).toHaveLength(1);
    expect(queryAllByTestId('breadcrumb-sibling"]')).toHaveLength(0);
    expect(container.querySelectorAll('.sibling-placeholder')).toHaveLength(8);
  });

  it('should render active siblings', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Breadcrumbs
        items={[
          {
            name: 'Single breadcrumb',
            url: 'https://single.breadcrumb/',
            siblings: {
              state: 'ready',
              data: [
                {
                  name: 'Sibling 1',
                  url: 'https://siblings.com/1',
                },
                {
                  name: 'Sibling 2',
                  url: 'https://siblings.com/2',
                },
                {
                  name: 'Sibling 3',
                  url: 'https://siblings.com/3',
                },
              ],
            },
          },
        ]}
        isSiblingActive={s => s.name === 'Sibling 2'}
      />,
    );

    expect(queryAllByTestId('plate')).toHaveLength(0);

    fireEvent.click(getByTestId('breadcrumb:siblings-opener'));

    expect(queryAllByTestId('plate')).toHaveLength(1);

    expect(queryAllByTestId('breadcrumb-sibling')).toHaveLength(3);
    expect(queryAllByTestId('breadcrumb-sibling')[0].querySelectorAll('.active')).toHaveLength(0);
    expect(queryAllByTestId('breadcrumb-sibling')[1].querySelectorAll('.active')).toHaveLength(1);
    expect(queryAllByTestId('breadcrumb-sibling')[2].querySelectorAll('.active')).toHaveLength(0);
  });

  it('should handle ready siblings without data', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Breadcrumbs
        items={[
          {
            name: 'Single breadcrumb',
            url: 'https://single.breadcrumb/',
            siblings: {
              state: 'ready',
              data: undefined,
            },
          },
        ]}
        isSiblingActive={s => s.name === 'Sibling 2'}
      />,
    );

    expect(queryAllByTestId('plate')).toHaveLength(0);

    fireEvent.click(getByTestId('breadcrumb:siblings-opener'));

    expect(queryAllByTestId('plate')).toHaveLength(1);
    expect(queryAllByTestId('breadcrumb-sibling"]')).toHaveLength(0);
  });

  it('should render item without url properly', () => {
    const { queryAllByTestId } = render(
      <Breadcrumbs
        items={[
          {
            name: 'First breadcrumb',
            url: 'https://first.breadcrumb/',
            siblings: {
              state: 'ready',
              data: undefined,
            },
          },
          {
            name: 'Second breadcrumb',
            siblings: {
              state: 'ready',
              data: undefined,
            },
          },
        ]}
      />,
    );

    const [first, second] = queryAllByTestId('breadcrumb');

    expect(first.querySelector('a')?.getAttribute('href')).toBe('https://first.breadcrumb/');
    expect(first.querySelector('a')?.getAttribute('role')).toBe(null);

    expect(second.querySelector('a')?.getAttribute('href')).toBe(null);
    expect(second.querySelector('a')?.getAttribute('role')).toBe('button');
  });
});
