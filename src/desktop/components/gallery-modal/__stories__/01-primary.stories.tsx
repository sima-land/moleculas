import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';
import { data } from '../__mocks__';

export default {
  title: 'desktop/GalleryModal',
  component: GalleryModal,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <GalleryModal
      media={data.media}
      onClose={() => {
        console.log('Окно закрыто');
      }}
      onVideoEvent={event => {
        console.log(`Событие видео "${event.type}"`);
      }}
    />
  );
}

Primary.storyName = 'Простой пример';
