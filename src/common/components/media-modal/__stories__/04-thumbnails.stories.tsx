import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  Thumbnails,
  Thumbnail,
} from '@sima-land/moleculas/common/components/media-modal';
import { Fragment, useState } from 'react';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleThumbnails() {
  const desktop = useBreakpoint('xs+');
  const [target, setTarget] = useState(0);

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.24)',
  };

  const thumbnails = (
    <Thumbnails>
      {mixed.map((item, index) => (
        <Fragment key={index}>
          {item.type === '360' && (
            <Thumbnail
              checked={target === index}
              onClick={() => setTarget(index)}
              type='icon-360'
            />
          )}
          {item.type === 'video' && (
            <Thumbnail
              checked={target === index}
              onClick={() => setTarget(index)}
              type='icon-video'
            />
          )}
          {item.type === 'image' && (
            <Thumbnail
              checked={target === index}
              onClick={() => setTarget(index)}
              type='preview-image'
              src={item.data.src}
            />
          )}
        </Fragment>
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

ExampleThumbnails.storyName = 'Превью';
