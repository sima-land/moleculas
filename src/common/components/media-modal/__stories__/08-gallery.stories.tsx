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
  MediaSlide,
} from '@sima-land/moleculas/common/components/media-modal';
import { CSSProperties, Fragment, useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleCleanGallery() {
  const [targetIndex, setTargetIndex] = useState(0);

  const styles = {
    root: {
      padding: '40px',
      display: 'flex',
      justifyContent: 'center',
      '--media-gallery-width': '600px',
      '--media-gallery-height': '400px',
      '--media-view-width': 'var(--media-gallery-width)',
      '--media-view-height': 'var(--media-gallery-height)',
    } as any,
    item: {
      width: 'var(--media-gallery-width)',
      height: 'var(--media-gallery-height)',
      background: '#ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    } satisfies CSSProperties,
  };

  return (
    <div style={styles.root}>
      <div style={{ background: '#000' }}>
        <MediaGallery targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
          {mixed.map((item, index) => (
            <MediaSlide key={index}>
              {/* <div style={styles.item}>Item #{index}</div> */}
              <MediaView media={item} />
            </MediaSlide>
          ))}
        </MediaGallery>
      </div>
    </div>
  );
}

export function ExampleGallery() {
  const [targetIndex, setTargetIndex] = useState(0);

  const style = {
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
            <div style={{ ...style, width: '100%', height: '40px' }}>Header</div>
          </MediaHeader>

          <MediaMain>
            <MediaGallery targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
              {mixed.map((item, index) => (
                <MediaSlide key={index}>
                  <MediaView media={item} />
                </MediaSlide>
              ))}
            </MediaGallery>
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
                      src={item.data.src}
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
      </Modal.Body>
    </Modal>
  );
}

ExampleGallery.storyName = 'Галерея';
