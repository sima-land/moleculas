import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';
import { Link } from '@sima-land/ui-nucleons/link';
import { data } from '../__mocks__';

export default {
  title: 'desktop/GalleryModal',
  component: GalleryModal,
  parameters: {
    layout: 'padded',
  },
};

const longText =
  'Двухшовная, однотонная, без логотипа, без посторонних запахов. На ребенке(1,5г.) сидит #отлично, на глаза не сползает, а взрослому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно))';

export function WithReviewNotAffect() {
  const markup = (
    <>
      {longText
        .replace(/(#[А-яA-z0-9]+)/g, '{divider}$1{divider}')
        .split('{divider}')
        .map((item, index) =>
          item.startsWith('#') ? (
            <Link key={index} href='https://sima-land.ru/'>
              {item}
            </Link>
          ) : (
            item
          ),
        )}
    </>
  );

  return (
    <GalleryModal
      media={data.media}
      onClose={() => {
        console.log('Окно закрыто');
      }}
      review={{
        notAffectRating: true,
        rating: 3.2,
        author: 'Пелагеевская Вероника Сергеевна',
        content: markup,
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

WithReviewNotAffect.storyName = 'Отзыв не влияет на рейтинг';