import React, { useState } from 'react';
import { GalleryModal } from '..';
import { action } from '@storybook/addon-actions';
import { data } from '../__mocks__';
import { Link } from '@sima-land/ui-nucleons/link';

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

const longText =
  'Двухшовная, однотонная, без логотипа, без посторонних запахов. На ребенке(1,5г.) сидит #отлично, на глаза не сползает, а взрослому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно))';

export const Primary = () => (
  <GalleryModal
    media={data.media}
    onClose={action('GalleryModal:close')}
    onVideoEvent={e => action('GalleryModal:video-event')(e.type)}
  />
);

export const WithReview = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <GalleryModal
      media={data.media}
      onMediaChange={(_, nextIndex) => setIndex(nextIndex)}
      onClose={action('GalleryModal:close')}
      review={{
        rating: 3.2,
        author: 'Пелагеевская Вероника Сергеевна',
        content: `[${index + 1}] ${index % 2 === 0 ? longText : longText.slice(0, 80)}`,
      }}
      onGoToReview={() => action('GalleryModal:go-to-review')()}
      onVideoEvent={e => action('GalleryModal:video-event')(e.type)}
    />
  );
};

export const WithReviewShort = () => (
  <GalleryModal
    media={data.media}
    onClose={action('GalleryModal:close')}
    review={{
      rating: 3.2,
      author: 'Пелагеевская Вероника Сергеевна',
      content: longText.slice(0, 140),
    }}
    onGoToReview={() => action('GalleryModal:go-to-review')()}
    onVideoEvent={e => action('GalleryModal:video-event')(e.type)}
  />
);

export const WithReviewLoading = () => (
  <GalleryModal
    media={data.media}
    onClose={action('GalleryModal:close')}
    review={{
      rating: 3.2,
      author: 'Пелагеевская Вероника Сергеевна',
      loading: true,
    }}
    onGoToReview={() => action('GalleryModal:go-to-review')()}
    onVideoEvent={e => action('GalleryModal:video-event')(e.type)}
  />
);

export const WithReviewEmpty = () => (
  <GalleryModal
    media={data.media}
    onClose={action('GalleryModal:close')}
    review={{
      rating: 3.2,
      author: 'Пелагеевская Вероника Сергеевна',
    }}
    onGoToReview={() => action('GalleryModal:go-to-review')()}
    onVideoEvent={e => action('GalleryModal:video-event')(e.type)}
  />
);

export const WithReviewNotAffect = () => {
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
      onClose={action('GalleryModal:close')}
      review={{
        notAffectRating: true,
        rating: 3.2,
        author: 'Пелагеевская Вероника Сергеевна',
        content: markup,
      }}
      onGoToReview={() => action('GalleryModal:go-to-review')()}
      onVideoEvent={e => action('GalleryModal:video-event')(e.type)}
    />
  );
};
