import { render } from '@testing-library/react';
import { RatingCounter } from '../rating-counter';

describe('Rating', () => {
  it('should renders properly', () => {
    const { container, queryAllByTestId } = render(<RatingCounter value={3.2} reviewCount={54} />);

    expect(queryAllByTestId('rating-counter')).toHaveLength(1);
    expect(container.textContent).toContain('3.2');
    expect(container.textContent).toContain('54 отзыва');
  });

  it('should renders as empty', () => {
    const { container } = render(<RatingCounter value={0} reviewCount={0} />);

    expect(container.textContent).toBe('Нет отзывов');
  });

  it('should handle "data-testid" prop', () => {
    const { queryAllByTestId } = render(
      <RatingCounter value={0} reviewCount={0} data-testid='my-rating-counter' />,
    );

    expect(queryAllByTestId('rating-counter')).toHaveLength(0);
    expect(queryAllByTestId('my-rating-counter')).toHaveLength(1);
  });

  it('should handle "hoverDisabled" prop', () => {
    const { getByTestId } = render(<RatingCounter value={1} reviewCount={2} hoverDisabled />);

    expect(getByTestId('rating-counter').classList.contains('hover-disabled')).toBe(true);
  });
});
