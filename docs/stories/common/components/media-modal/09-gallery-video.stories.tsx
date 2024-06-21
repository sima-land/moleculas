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
import { MediaGallery, MediaSlide } from '@sima-land/moleculas/common/components/media-gallery';
import { useState } from 'react';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { videos } from './fixture';

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
    background: 'rgb(33, 33, 33, 0.16)',
  };

  return (
    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>
      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />
      <ModalBody withScrollDisable>
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
      </ModalBody>
    </Modal>
  );
}

ExampleGalleryVideo.storyName = 'Галерея видео';
