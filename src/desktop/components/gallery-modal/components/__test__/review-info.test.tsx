import { ReviewInfo } from '../review-info';
import { fireEvent, render } from '@testing-library/react';

describe('ReviewInfo', () => {
  it('should render loading view', () => {
    const { container } = render(<ReviewInfo rating={3.2} author='John Doe' loading />);

    expect(container).toMatchSnapshot();
  });

  it('should render not affect rating view', () => {
    const { container, queryAllByTestId } = render(
      <ReviewInfo rating={3.2} author='John Doe' notAffectRating />,
    );

    expect(container).toMatchSnapshot();
    expect(container.textContent).toContain('Не влияет на рейтинг');
    expect(queryAllByTestId('rating')).toHaveLength(0);
  });

  it('should regular view', () => {
    const spy = jest.fn();

    const { container, queryAllByTestId } = render(
      <ReviewInfo rating={2.8} author='Hello' content='World' onGoToReview={spy} />,
    );

    expect(container.textContent).not.toContain('Не влияет на рейтинг');
    expect(queryAllByTestId('rating')).toHaveLength(1);
    expect(queryAllByTestId('gallery-modal:go-to-review-link')).toHaveLength(1);
  });

  it('should render expand button when line clamp is active', () => {
    const { getByTestId, queryAllByTestId } = render(
      <ReviewInfo rating={2.8} author='Hello' content='World' />,
    );

    expect(queryAllByTestId('review-info:expand')).toHaveLength(0);

    const element = getByTestId('review-info:collapsed-content');

    jest.spyOn(element, 'clientHeight', 'get').mockReturnValue(40);
    jest.spyOn(element, 'scrollHeight', 'get').mockReturnValue(120);

    fireEvent.resize(window);

    expect(queryAllByTestId('review-info:expand')).toHaveLength(1);

    fireEvent.click(getByTestId('review-info:expand'));
    expect(queryAllByTestId('review-info:expanded-content')).toHaveLength(1);

    fireEvent.click(getByTestId('review-info:collapse'));
    expect(queryAllByTestId('review-info:expanded-content')).toHaveLength(0);
  });
});
