import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  Thumbnails,
  Thumbnail,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { useState } from 'react';
import { videos } from './fixture';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleThumbnailsVideo() {
  const desktop = useBreakpoint('xs+');
  const [target, setTarget] = useState(0);

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.16)',
  };

  const thumbnails = (
    <Thumbnails>
      {videos.map((item, index) => (
        <Thumbnail
          key={index}
          type='preview-video'
          src={item.data.thumbnail}
          checked={target === index}
          onClick={() => setTarget(index)}
          title='Lorem ipsum dolor sit amet.'
          price={15799}
          currency='₽'
        />
      ))}
    </Thumbnails>
  );

  return (
    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>
      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />
      <ModalBody>
        <MediaLayout>
          <MediaHeader>
            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>
          </MediaHeader>

          <MediaMain>
            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
              Main
            </div>
          </MediaMain>

          {desktop && <MediaAside>{thumbnails}</MediaAside>}

          <MediaFooter>
            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>

            {!desktop && (
              <div style={{ marginTop: '24px' }}>
                <MediaAside>{thumbnails}</MediaAside>
              </div>
            )}
          </MediaFooter>
        </MediaLayout>
      </ModalBody>
    </Modal>
  );
}

ExampleThumbnailsVideo.storyName = 'Превью видео';
