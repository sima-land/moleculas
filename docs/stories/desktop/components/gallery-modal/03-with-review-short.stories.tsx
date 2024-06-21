import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';
import { data } from './fixture';

export default {
  title: 'desktop/GalleryModal',
  component: GalleryModal,
  parameters: {
    layout: 'padded',
  },
};

const shortText =
  'Двухшовная, однотонная, без логотипа, без посторонних запахов. На ребенке(1,5г.) сидит #отлично, на глаза не сползает, а взрослому-мала';

export function WithReviewShort() {
  return (
    <GalleryModal
      media={data.media}
      onClose={() => {
        console.log('Окно закрыто');
      }}
      review={{
        rating: 3.2,
        author: 'Пелагеевская Вероника Сергеевна',
        content: shortText.slice(0, 140),
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

WithReviewShort.storyName = 'С коротким отзывом';
