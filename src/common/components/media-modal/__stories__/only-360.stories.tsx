import { Modal } from '@sima-land/ui-nucleons/modal';
import { MediaLayout, MediaMain, MediaView } from '..';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Only360() {
  const media = mixed.filter(item => item.type === '360')[0];

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaMain>
            <MediaView media={media} />
          </MediaMain>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

Only360.storyName = 'Только 360';
