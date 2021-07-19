import React from 'react';
import { GalleryModal } from '..';
import { action } from '@storybook/addon-actions';
import { data } from '../__mocks__';

export default {
  title: 'desktop/GalleryModal',
  component: GalleryModal,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Полноэкранная галерея фото',
      },
    },
  },
};

export const Primary = () => (
  <GalleryModal media={data.media} onClose={action('GalleryModal:close')} />
);

export const WithReview = () => (
  <GalleryModal
    media={data.media}
    onClose={action('GalleryModal:close')}
    review={{
      rating: 3.2,
      author: 'Пелагеевская Вероника Сергеевна',
    }}
    onGoToReview={() => action('GalleryModal:go-to-review')}
  />
);
