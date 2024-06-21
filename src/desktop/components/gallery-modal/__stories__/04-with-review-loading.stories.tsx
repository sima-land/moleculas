import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';
import { data } from '../__mocks__';

export default {
  title: 'desktop/GalleryModal',
  component: GalleryModal,
  parameters: {
    layout: 'padded',
  },
};

export function WithReviewLoading() {
  return (
    <GalleryModal
      media={data.media}
      onClose={() => {
        console.log('Окно закрыто');
      }}
      review={{
        rating: 3.2,
        author: 'Пелагеевская Вероника Сергеевна',
        loading: true,
      }}
      onGoToReview={() => {
        console.log('Нажата кнопка перехода к отзыву');
      }}
      onVideoEvent={event => {
        console.log(`Событие видео "${event.type}"`);
      }}
    />
  );
}

WithReviewLoading.storyName = 'Загрузка отзыва';
