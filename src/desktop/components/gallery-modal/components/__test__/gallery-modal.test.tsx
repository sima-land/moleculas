import React from 'react';
import { mount } from 'enzyme';
import { GalleryModal } from '../gallery-modal';
import { act } from 'react-dom/test-utils';
import { data } from '../../__mocks__';

describe('GalleryModal', () => {
  it('should renders', () => {
    const wrapper = mount(
      <GalleryModal media={data.media} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with review footer', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <GalleryModal
        media={data.media}
        review={{
          rating: 3.2,
          author: 'Пелагеевская Вероника Сергеевна',
        }}
        onGoToReview={jest.fn()}
        onMediaChange={spy}
      />
    );

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.find('button[data-testid="gallery-modal:next-media-button"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.find('button[data-testid="gallery-modal:next-media-button"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.find('button[data-testid="gallery-modal:thumbnail"]').at(5).simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.find('button[data-testid="gallery-modal:prev-media-button"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(5);
  });

  it('should renders with single item media list', () => {
    const wrapper = mount(
      <GalleryModal
        media={[data.media[0]]}
        review={{
          rating: 3.2,
          author: 'Пелагеевская Вероника Сергеевна',
        }}
        onGoToReview={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders without media alt text', () => {
    const wrapper = mount(
      <GalleryModal
        media={[
          { type: 'image', data: { src: 'https://img.com/1' } },
          { type: 'image', data: { src: 'https://img.com/2' } },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
