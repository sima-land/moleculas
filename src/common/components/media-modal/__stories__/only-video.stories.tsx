import {
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
            <div
              style={
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  '--media-width': '100%',
                  '--media-height': '100%',
                } as any
              }
            >
              <MediaView media={media} />
            </div>
          </MediaMain>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

OnlyVideo.storyName = 'Только видео';
