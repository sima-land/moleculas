import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  HeaderLayout,
  MediaGallery,
  MediaView,
  Thumbnails,
  Thumbnail,
  ProductBrief,
  Preset,
} from '@sima-land/moleculas/common/components/media-modal';
import { Fragment, useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { mixed } from '../__mocks__';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { MediaData } from '../types';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function TestImagesBroken() {
  const [targetIndex, setTargetIndex] = useState(0);
  const [broken, setBroken] = useState(false);

  const processSrc = (src: string | undefined) => (broken ? 'http://non-existed-site.com/' : src);

  const processMedia = (media: MediaData): MediaData => ({
    ...media,
    data: {
      ...media.data,
      ...(media.type === '360' && { photos: media.data.photos.map(processSrc) }),
      ...(media.type === 'image' && { src: processSrc(media.data.src) }),
      ...(media.type === 'video' && { thumbnail: processSrc(media.data.thumbnail) }),
    } as any,
  });

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header
        onClose={() => void 0}
        buttons={{
          endSecondary: {
            text: broken ? 'Починить' : 'Сломать',
            onClick: () => setBroken(a => !a),
          },
        }}
      />
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
            </HeaderLayout>
          </MediaHeader>

          <MediaMain>
            <MediaGallery targetIndex={targetIndex} onChangeTargetIndex={setTargetIndex}>
              {mixed.map(processMedia).map((item, index) => (
                <MediaView key={index} media={item} />
              ))}
            </MediaGallery>
          </MediaMain>

          <MediaAside>
            <Thumbnails targetIndex={targetIndex}>
              {mixed.map(processMedia).map((item, index) => (
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
                      type='preview-video'
                      src={item.data.thumbnail}
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
                imageSrc={processSrc('https://loremflickr.com/240/320')}
                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'
                price={60235}
                currency='₽'
                footer={
                  <>
                    <Button size='s' viewType='success' style={{ width: '128px' }}>
                      В корзине
                    </Button>
                    <Stepper
                      size='s'
                      defaultValue={1}
                      style={{ width: '128px', marginLeft: '12px' }}
                    />
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

TestImagesBroken.storyName = 'Тест: ошибка загрузки картинок';
