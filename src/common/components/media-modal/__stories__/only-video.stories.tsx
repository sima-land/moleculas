import {
  MediaArea,
  MediaLayout,
  MediaMain,
  MediaView,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function OnlyVideo() {
  const media = mixed.filter(item => item.type === 'video')[0];

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaMain>
            <MediaArea>
              <MediaView media={media} />
            </MediaArea>
          </MediaMain>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

OnlyVideo.storyName = 'Только видео';
