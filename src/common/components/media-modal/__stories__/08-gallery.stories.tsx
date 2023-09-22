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
} from '@sima-land/moleculas/common/components/media-modal';
import { Fragment, useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleGallery() {
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
            <MediaGallery targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
              {mixed.map((item, index) => (
                <MediaView key={index} media={item} />
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
            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

ExampleGallery.storyName = 'Галерея';
