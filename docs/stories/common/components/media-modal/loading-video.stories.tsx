import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  Preset,
  HeaderLayout,
  Thumbnails,
  Thumbnail,
  ProductBrief,
  MediaView,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'common/MediaLayout',
  title: 'Загрузка видео',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function LoadingVideo() {
  const items = Array(15).fill(0);

  return (
    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>
      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />
      <ModalBody withScrollDisable>
        <MediaLayout>
          <MediaHeader>
            <HeaderLayout>
              <HeaderLayout.Tabs>
                <Tabs {...Preset.headerTabs()}>
                  <Tabs.Item name='Фото ' />
                  <Tabs.Item name='Видео ' />
                  <Tabs.Item name='360 ' />
                  <Tabs.Item name='Фото покупателей' />
                </Tabs>
              </HeaderLayout.Tabs>
            </HeaderLayout>
          </MediaHeader>

          <MediaMain>
            <MediaView loading />
          </MediaMain>

          <MediaAside>
            <Thumbnails>
              {items.map((item, index) => (
                <Thumbnail key={index} type='preview-video' loading />
              ))}
            </Thumbnails>
          </MediaAside>

          <MediaFooter>
            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>
              <ProductBrief loading />
            </Layout>
          </MediaFooter>
        </MediaLayout>
      </ModalBody>
    </Modal>
  );
}
