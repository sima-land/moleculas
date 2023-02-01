import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ModifiersGroup } from '..';
import { ModifierButton } from '../../button';
import { useViewState, ViewState } from '../utils';

jest.mock('../utils', () => {
  const original = jest.requireActual('../utils');

  return {
    ...original,
    useViewState: jest.fn(original.useViewState),
  };
});

describe('ModifiersGroup', () => {
  it('should ignore non ModifierButton children', () => {
    const definedViewState: ViewState = {
      phase: 'ready',
      lastVisibleIndex: 2,
    };

    (useViewState as jest.Mock<ViewState>).mockReturnValue(definedViewState);

    const { queryAllByTestId } = render(
      <ModifiersGroup>
        <ModifierButton type='text' content='Foo' />
        <ModifierButton type='text' content='Bar' />
        <ModifierButton type='text' content='Baz' />
        <div data-testid='my-spy'>Hello, world!</div>
      </ModifiersGroup>,
    );

    expect(queryAllByTestId('my-spy')).toHaveLength(0);
  });

  it('should mark item as hidden when it is hidden by overflow', () => {
    const definedViewState: ViewState = {
      phase: 'ready',
      lastVisibleIndex: 2,
    };

    (useViewState as jest.Mock<ViewState>).mockReturnValue(definedViewState);

    const { getAllByTestId } = render(
      <ModifiersGroup>
        <ModifierButton type='text' content='Foo' />
        <ModifierButton type='text' content='Bar' />
        <ModifierButton type='text' content='Baz' />
      </ModifiersGroup>,
    );

    expect(getAllByTestId('modifier-group:item')[0].classList.contains('hidden')).toBe(false);
    expect(getAllByTestId('modifier-group:item')[1].classList.contains('hidden')).toBe(false);
    expect(getAllByTestId('modifier-group:item')[2].classList.contains('hidden')).toBe(true);

    (useViewState as jest.Mock<ViewState>).mockClear();
  });

  it('should hide opener by default when "defaultOpened" is true', () => {
    const { queryAllByTestId } = render(
      <ModifiersGroup defaultOpened>
        <ModifierButton type='text' content='Foo' />
        <ModifierButton type='text' content='Bar' />
        <ModifierButton type='text' content='Baz' />
      </ModifiersGroup>,
    );

    expect(queryAllByTestId('modifier-group:show-all-button')).toHaveLength(0);
  });

  it('should show opener by default when "defaultOpened" is falsy', () => {
    const { queryAllByTestId } = render(
      <ModifiersGroup defaultOpened={undefined}>
        <ModifierButton type='text' content='Foo' />
        <ModifierButton type='text' content='Bar' />
        <ModifierButton type='text' content='Baz' />
      </ModifiersGroup>,
    );

    expect(queryAllByTestId('modifier-group:show-all-button')).toHaveLength(1);
  });

  it('should call "onShowAll" on opener click', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ModifiersGroup onShowAll={spy}>
        <ModifierButton type='text' content='Foo' />
        <ModifierButton type='text' content='Bar' />
        <ModifierButton type='text' content='Baz' />
      </ModifiersGroup>,
    );

    expect(spy).toBeCalledTimes(0);
    fireEvent.click(getByTestId('modifier-group:show-all-button'));
    expect(spy).toBeCalledTimes(1);
  });

  it('should do not call "onShowAll" on opener click', () => {
    const { getByTestId } = render(
      <ModifiersGroup onShowAll={undefined}>
        <ModifierButton type='text' content='Foo' />
        <ModifierButton type='text' content='Bar' />
        <ModifierButton type='text' content='Baz' />
      </ModifiersGroup>,
    );

    expect(() => {
      fireEvent.click(getByTestId('modifier-group:show-all-button'));
    }).not.toThrow();
  });
});
