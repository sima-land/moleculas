import { fireEvent, render } from '@testing-library/react';
import { SelectScreenLayout, SelectScreenOption } from '..';
import { Screen } from '@sima-land/ui-nucleons/screen';

describe('select screen parts', () => {
  it('should works properly', () => {
    const items = ['Foo', 'Bar', 'Baz'];
    const spy = jest.fn();

    const { container, getAllByTestId } = render(
      <Screen>
        <Screen.Body>
          <SelectScreenLayout style={{ padding: '16px 0' }}>
            {items.map((item, id) => (
              <SelectScreenOption key={id} selected={item === 'Bar'} onClick={spy}>
                {item}
              </SelectScreenOption>
            ))}
          </SelectScreenLayout>
        </Screen.Body>
      </Screen>,
    );

    expect(container).toMatchSnapshot();
    expect(getAllByTestId('select-screen:option')).toHaveLength(3);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getAllByTestId('select-screen:option')[0]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('SelectScreenOption', () => {
  it('should handle size prop', () => {
    const { container } = render(<SelectScreenOption size='xl'>Test option</SelectScreenOption>);

    expect(container).toMatchSnapshot();
  });

  it('should handle selected prop', () => {
    const { container, rerender } = render(
      <SelectScreenOption selected>Test option</SelectScreenOption>,
    );

    expect(container.querySelectorAll('svg')).toHaveLength(1);

    rerender(<SelectScreenOption selected={false}>Test option</SelectScreenOption>);

    expect(container.querySelectorAll('svg')).toHaveLength(0);
  });

  it('should handle withSelectedIcon prop', () => {
    const { container } = render(
      <SelectScreenOption selected withSelectedIcon={false}>
        Test option
      </SelectScreenOption>,
    );

    expect(container.querySelectorAll('svg')).toHaveLength(0);
  });
});
