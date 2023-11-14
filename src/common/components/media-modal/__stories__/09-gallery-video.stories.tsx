import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  Thumbnails,
  Thumbnail,
  MediaView,
  MediaArea,
  MediaAreaAside,
  MediaAreaMain,
} from '@sima-land/moleculas/common/components/media-modal';
import { MediaGallery, MediaSlide } from '../../media-gallery';
import { useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import { videos } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleGalleryVideo() {
  const desktop = useBreakpoint('xs+');

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
              {!desktop && (
                <MediaGallery
                  targetIndex={targetIndex}
                  onChangeTargetIndex={setTargetIndex}
                  style={{ position: 'absolute' }}
                >
                  {videos.map((item, index) => (
                    <MediaSlide key={index}>
                      <MediaView media={item} />
                    </MediaSlide>
                  ))}
                </MediaGallery>
              )}

              {desktop && (
                <>
                  <MediaAreaAside>
                    <ArrowButton
                      direction='left'
                      onClick={() => setTargetIndex(n => Math.max(0, n - 1))}
                    />
                  </MediaAreaAside>

                  <MediaAreaMain>
                    <MediaView media={videos[targetIndex]} />
                  </MediaAreaMain>

                  <MediaAreaAside>
                    <ArrowButton
                      direction='right'
                      onClick={() => setTargetIndex(n => Math.min(videos.length - 1, n + 1))}
                    />
                  </MediaAreaAside>
                </>
              )}
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
