import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { GalleryModal } from '../gallery-modal';
import { data } from '../../__mocks__';

describe('GalleryModal', () => {
  it('should renders', () => {
    const { container } = render(<GalleryModal media={data.media} />);

    expect(container).toMatchSnapshot();
  });

  it('should handle video events', () => {
    const spy = jest.fn();

    const { container } = render(
      <GalleryModal media={data.media.filter(item => item.type === 'video')} onVideoEvent={spy} />,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    // play
    fireEvent.play(container.querySelector('video') as any);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe('play');

    // pause
    fireEvent.pause(container.querySelector('video') as any);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0].type).toBe('pause');

    // ended
    fireEvent.ended(container.querySelector('video') as any);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy.mock.calls[2][0].type).toBe('ended');
  });

  it('should handle video events without callback', () => {
    const { container } = render(
      <GalleryModal media={data.media.filter(item => item.type === 'video')} />,
    );

    expect(() => {
      // play
      fireEvent.play(container.querySelector('video') as any);

      // pause
      fireEvent.pause(container.querySelector('video') as any);

      // ended
      fireEvent.ended(container.querySelector('video') as any);
    }).not.toThrow();
  });

  it('should renders with review footer', () => {
    const spy = jest.fn();

    const { container, getByTestId, getAllByTestId } = render(
      <GalleryModal
        media={data.media}
        review={{
          rating: 3.2,
          author: 'Пелагеевская Вероника Сергеевна',
        }}
        onGoToReview={jest.fn()}
        onMediaChange={spy}
      />,
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(getByTestId('gallery-modal:next-media-button'));

    expect(container).toMatchSnapshot();

    fireEvent.click(getByTestId('gallery-modal:next-media-button'));

    expect(container).toMatchSnapshot();

    fireEvent.click(getAllByTestId('gallery-modal:thumbnail')[5]);

    expect(container).toMatchSnapshot();

    fireEvent.click(getByTestId('gallery-modal:prev-media-button'));

    expect(container).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(5);
  });

  it('should renders with single item media list', () => {
    const { container } = render(
      <GalleryModal
        media={[data.media[0]]}
        review={{
          rating: 3.2,
          author: 'Пелагеевская Вероника Сергеевна',
        }}
        onGoToReview={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should renders without media alt text', () => {
    const { container } = render(
      <GalleryModal
        media={[
          { type: 'image', data: { src: 'https://img.com/1' } },
          { type: 'image', data: { src: 'https://img.com/2' } },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
