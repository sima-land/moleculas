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
} from '@sima-land/moleculas/common/components/media-modal';
import { Fragment, useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function WithProduct() {
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
              {mixed.map((item, index) => (
                <MediaView key={index} media={item} />
              ))}
            </MediaContent>
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

WithProduct.storyName = 'Футер: товар';
