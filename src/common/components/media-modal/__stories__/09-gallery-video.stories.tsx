import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  Thumbnails,
  Thumbnail,
  MediaGallery,
  MediaView,
  MediaArea,
  MediaSlide,
} from '@sima-land/moleculas/common/components/media-modal';
import { useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { videos } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleGalleryVideo() {
  const [targetIndex, setTargetIndex] = useState(0);

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.24)',
  };

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaHeader>
            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>
          </MediaHeader>

          <MediaMain>
            <MediaArea>
              <MediaGallery targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
                {videos.map((item, index) => (
                  <MediaSlide key={index}>
                    <MediaView media={item} />
                  </MediaSlide>
                ))}
              </MediaGallery>
            </MediaArea>
          </MediaMain>

          <MediaAside>
            <Thumbnails targetIndex={targetIndex}>
              {videos.map((item, index) => (
                <Thumbnail
                  key={index}
                  type='preview-video'
                  src={item.data.thumbnail}
                  checked={targetIndex === index}
                  onClick={() => setTargetIndex(index)}
                  title='Lorem ipsum dolor, sit amet consectetur'
                  price={65274}
                  currency='₽'
                />
              ))}
            </Thumbnails>
          </MediaAside>

          <MediaFooter>
            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

ExampleGalleryVideo.storyName = 'Галерея видео';
