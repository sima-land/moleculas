import { render } from '@testing-library/react';
import { ActionList } from '../action-list';

describe('ActionList', () => {
  it('should render items properly', () => {
    const spy = jest.fn();

    const { queryAllByTestId, container } = render(
      <ActionList>
        <ActionList.Item onClick={spy}>Baz</ActionList.Item>

        <ActionList.Item as='button' onClick={spy}>
          Foo
        </ActionList.Item>

        <ActionList.Item as='anchor' href='https://www.sima-land.ru'>
          Bar
        </ActionList.Item>
      </ActionList>,
    );

    expect(queryAllByTestId('action-list:item')).toHaveLength(3);
    expect(container.querySelectorAll('button')).toHaveLength(2);
    expect(container.querySelectorAll('a')).toHaveLength(1);
  });
});
