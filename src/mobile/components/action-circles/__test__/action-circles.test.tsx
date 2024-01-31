import { render } from '@testing-library/react';
import { ActionCircles } from '../action-circles';

describe('ActionCircles', () => {
  it('should handle circles', () => {
    const spy = jest.fn();

    const { queryAllByTestId } = render(
      <ActionCircles>
        <ActionCircles.Item
          title='Foo'
          icon={<svg data-testid='foo-svg' />}
          href='https://www.sima-land.ru'
        />
        <ActionCircles.Item title='Bar' icon={<svg data-testid='bar-svg' />} onClick={spy} />
      </ActionCircles>,
    );

    expect(queryAllByTestId('action-circles:item')).toHaveLength(2);
  });
});
