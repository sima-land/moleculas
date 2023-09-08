import { fireEvent, render } from '@testing-library/react';
import { Thumbnail } from '../thumbnail';

describe('Thumbnail', () => {
  it('should render 360 icon', () => {
    const spy = jest.fn();

    const { container, getByRole } = render(<Thumbnail type='360' onClick={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    expect(container.querySelectorAll('svg')).toHaveLength(1);

    fireEvent.click(getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render video icon', () => {
    const spy = jest.fn();

    const { container, getByRole } = render(<Thumbnail type='video' onClick={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    expect(container.querySelectorAll('svg')).toHaveLength(1);

    fireEvent.click(getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render image', () => {
    const spy = jest.fn();

    const { container, getByRole } = render(
      <Thumbnail type='image' src='https://image.com/1' onClick={spy} />,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(container.querySelectorAll('img')).toHaveLength(1);

    fireEvent.click(getByRole('button'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
