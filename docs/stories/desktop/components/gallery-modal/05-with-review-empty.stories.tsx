import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';
import { data } from './fixture';

export default {
  title: 'desktop/GalleryModal',
  component: GalleryModal,
  parameters: {
    layout: 'padded',
  },
};

export function WithReviewEmpty() {
  return (
    <GalleryModal
      media={data.media}
      onClose={() => {
        console.log('Окно закрыто');
      }}
      review={{
        rating: 3.2,
        author: 'Пелагеевская Вероника Сергеевна',
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

WithReviewEmpty.storyName = 'Отзыв без текста';
