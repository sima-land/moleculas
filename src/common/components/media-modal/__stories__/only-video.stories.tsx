import {
  MediaArea,
  MediaLayout,
  MediaMain,
  MediaView,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
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
    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>
      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />
      <ModalBody withScrollDisable>
        <MediaLayout>
          <MediaMain>
            <MediaArea>
              <MediaView media={media} />
            </MediaArea>
          </MediaMain>
        </MediaLayout>
      </ModalBody>
    </Modal>
  );
}

OnlyVideo.storyName = 'Только видео';
