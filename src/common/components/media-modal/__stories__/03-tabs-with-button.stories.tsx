import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  HeaderLayout,
  Preset,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function MediaTabsWithButton() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.24)',
  };

  return (
    <Modal size='fullscreen' footerStub={false}>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaHeader>
            <HeaderLayout>
              <HeaderLayout.Tabs>
                <Tabs {...Preset.headerTabs()}>
                  <Tabs.Item name='Раздел 1' />
                  <Tabs.Item name='Раздел 2' selected />
                  <Tabs.Item name='Раздел 3' />
                  <Tabs.Item name='Раздел 4' />
                  <Tabs.Item name='Раздел 5' />
                </Tabs>
              </HeaderLayout.Tabs>
              <HeaderLayout.Button>
                <TextButton {...Preset.headerButton()} />
              </HeaderLayout.Button>
            </HeaderLayout>
          </MediaHeader>

          <MediaMain>
            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
              Main
            </div>
          </MediaMain>

          <MediaAside>
            <div style={{ ...styles, width: '100%', height: '100%', minHeight: '40px' }}>Aside</div>
          </MediaAside>

          <MediaFooter>
            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

MediaTabsWithButton.storyName = 'Вкладки и кнопка';
