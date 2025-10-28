import { act, fireEvent, render } from '@testing-library/react';
import { PromotionCard } from '..';

describe('PromotionCard', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should renders correctly', () => {
    const { container, queryAllByTestId } = render(
      <PromotionCard
        title='Hello, world!'
        subtitle='Foo, bar, baz...'
        imageSrc='https://www.images.com/123'
        dueDate={new Date()}
      />,
    );

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('promotion-card')).toHaveLength(1);
  });

  it('should render image stub if image failed to load', () => {
    const { queryAllByText, getAllByText, getByAltText } = render(
      <PromotionCard
        title='Hello, world!'
        subtitle='Foo, bar, baz...'
        imageSrc='https://www.images.com/123'
        type='3-by-2'
        dueDate={new Date()}
      />,
    );
    expect(queryAllByText(/не загрузилось/)).toHaveLength(0);
    expect(getAllByText('1+1=3')).toHaveLength(1);

    act(() => {
      fireEvent.error(getByAltText('Hello, world!'));
    });
    expect(queryAllByText(/не загрузилось/)).toHaveLength(1);
    expect(queryAllByText(/1+1=3/)).toHaveLength(0);
  });

  it('should handle "promotionType" prop', () => {
    const { container, queryAllByTestId } = render(
      <PromotionCard
        title='Hello, world!'
        subtitle='Foo, bar, baz...'
        imageSrc='https://www.images.com/123'
        dueDate={new Date()}
        type='volume-discount'
        volumeDiscount={23}
      />,
    );

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('promotion-card:name')).toHaveLength(1);
    expect(queryAllByTestId('promotion-card:banner-discount')).toHaveLength(1);
  });

  it('should render with "type=special"', () => {
    const { getByAltText } = render(
      <PromotionCard
        title='Hello, world!'
        subtitle='Foo, bar, baz...'
        imageSrc='https://www.images.com/123'
        dueDate={new Date()}
        type='special'
      />,
    );

    expect(getByAltText('Hello, world!').parentElement).toMatchSnapshot();
  });

  it('should have placeholder component property', () => {
    const { container, queryAllByTestId } = render(<PromotionCard.Placeholder />);

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('promotion-card:placeholder')).toHaveLength(1);
  });
});
