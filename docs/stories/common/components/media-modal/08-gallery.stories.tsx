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
  MediaAreaMain,
  MediaAreaAside,
} from '@sima-land/moleculas/common/components/media-modal';
import { MediaGallery, MediaSlide } from '@sima-land/moleculas/common/components/media-gallery';
import { Fragment, useState } from 'react';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { mixed } from './fixture';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleGallery() {
  const desktop = useBreakpoint('xs+');

  const [targetIndex, setTargetIndex] = useState(0);

  const style = {
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
            <div style={{ ...style, width: '100%', height: '40px' }}>Header</div>
          </MediaHeader>

          <MediaMain>
            <MediaArea>
              {!desktop && (
                <MediaGallery targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
                  {mixed.map((item, index) => (
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
                    <MediaView media={mixed[targetIndex]} />
                  </MediaAreaMain>

                  <MediaAreaAside>
                    <ArrowButton
                      direction='right'
                      onClick={() => setTargetIndex(n => Math.min(mixed.length - 1, n + 1))}
                    />
                  </MediaAreaAside>
                </>
              )}
            </MediaArea>
          </MediaMain>

          <MediaAside>
            <Thumbnails targetIndex={targetIndex}>
              {mixed.map((item, index) => (
                <Fragment key={index}>
                  {item.type === '360' && (
                    <Thumbnail
                      type='icon-360'
                      checked={targetIndex === index}
                      onClick={() => setTargetIndex(index)}
                    />
                  )}
                  {item.type === 'video' && (
                    <Thumbnail
                      type='icon-video'
                      checked={targetIndex === index}
                      onClick={() => setTargetIndex(index)}
                    />
                  )}
                  {item.type === 'image' && (
                    <Thumbnail
                      type='preview-image'
                      src={item.data.thumbnail}
                      checked={targetIndex === index}
                      onClick={() => setTargetIndex(index)}
                    />
                  )}
                </Fragment>
              ))}
            </Thumbnails>
          </MediaAside>

          <MediaFooter>
            <div style={{ ...style, width: '100%', height: '100px' }}>Footer</div>
          </MediaFooter>
        </MediaLayout>
      </ModalBody>
    </Modal>
  );
}

ExampleGallery.storyName = 'Галерея';
