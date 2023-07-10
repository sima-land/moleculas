import { Modal } from '@sima-land/ui-nucleons/modal';
import { MediaLayout, MediaHeader, MediaMain, MediaAside, MediaFooter } from '..';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Areas() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Modal size='fullscreen' footerStub={false}>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaHeader>
            <div
              style={{
                ...styles,
                width: '100%',
                height: '40px',
                background: 'rgb(0, 89, 157, 0.24)',
              }}
            >
              Header
            </div>
          </MediaHeader>

          <MediaMain>
            <div
              style={{
                ...styles,
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'rgb(33, 33, 33, 0.08)',
              }}
            >
              Main
            </div>
          </MediaMain>

          <MediaAside>
            <div
              style={{
                ...styles,
                width: '100%',
                height: '100%',
                minHeight: '40px',
                background: 'rgb(255, 214, 0, 0.24)',
              }}
            >
              Aside
            </div>
          </MediaAside>

          <MediaFooter>
            <div
              style={{
                ...styles,
                width: '100%',
                height: '100px',
                background: 'rgb(144, 43, 208, 0.12)',
              }}
            >
              Footer
            </div>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

Areas.storyName = 'Области';
