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
  MediaGallery,
} from '@sima-land/moleculas/common/components/media-modal';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Review } from '../parts/review';
import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function LoadingMixed() {
  const items = Array(15).fill(0);

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
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
            <MediaGallery loading />
          </MediaMain>

          <MediaAside>
            <Thumbnails>
              {items.map((item, index) => (
                <Thumbnail key={index} loading type='preview-image' />
              ))}
            </Thumbnails>
          </MediaAside>

          <MediaFooter>
            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>
              <Review
                loading
                button={
                  <TextButton size='s' disabled>
                    Перейти к отзыву
                  </TextButton>
                }
              />
            </Layout>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

LoadingMixed.storyName = 'Загрузка';
