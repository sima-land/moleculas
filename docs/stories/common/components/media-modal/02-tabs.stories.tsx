import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  HeaderLayout,
  Preset,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { Tabs } from '@sima-land/ui-nucleons/tabs';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function MediaTabs() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.16)',
  };

  return (
    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>
      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />
      <ModalBody>
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
                  <Tabs.Item name='Раздел 6' />
                  <Tabs.Item name='Раздел 7' />
                </Tabs>
              </HeaderLayout.Tabs>
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
      </ModalBody>
    </Modal>
  );
}

MediaTabs.storyName = 'Вкладки';
