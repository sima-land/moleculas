import { fireEvent, render } from '@testing-library/react';
import { ImageOverlay } from '../image-overlay';

describe('ImageOverlay', () => {
  it('should renders correctly', () => {
    const spy = jest.fn();

    const { container } = render(
      <ImageOverlay className='test-class' id='test-id' onClick={spy}>
        <img src='https://images.com/2' />
      </ImageOverlay>,
    );

    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll('#test-id')).toHaveLength(1);
    expect(container.querySelectorAll('.test-class')).toHaveLength(1);

    expect(spy).toHaveBeenCalledTimes(0);

    container.querySelectorAll('#test-id').forEach(el => {
      fireEvent.click(el);
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
