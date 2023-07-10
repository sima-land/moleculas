import { useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
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
  MediaContent,
  MediaView,
} from '..';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { videos } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function ManyVideos() {
  const [targetIndex, setTargetIndex] = useState(0);

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaHeader>
            <HeaderLayout>
              <HeaderLayout.Tabs>
                <Tabs {...Preset.headerTabs()}>
                  <Tabs.Item name='Фото' />
                  <Tabs.Item name='Видео' selected />
                  <Tabs.Item name='360' />
                  <Tabs.Item name='Фото покупателей' />
                </Tabs>
              </HeaderLayout.Tabs>
              <HeaderLayout.Button>
                <TextButton {...Preset.headerButton()} />
              </HeaderLayout.Button>
            </HeaderLayout>
          </MediaHeader>

          <MediaMain>
            <MediaContent targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
              {videos.map((item, index) => (
                <MediaView key={index} media={item} />
              ))}
            </MediaContent>
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
            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>
              <ProductBrief
                href='https://sima-land.ru'
                imageSrc='https://loremflickr.com/240/320'
                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'
                price={60235}
                currency='₽'
                footer={
                  <>
                    <Button size='s'>В корзину</Button>
                    <Stepper size='s' defaultValue={1} />
                  </>
                }
              />
            </Layout>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

ManyVideos.storyName = 'Видео';
