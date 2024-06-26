import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  HeaderLayout,
  MediaView,
  Thumbnails,
  Thumbnail,
  ProductBrief,
  Preset,
} from '@sima-land/moleculas/common/components/media-modal';
import { Fragment, useState } from 'react';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { mixed } from './fixture';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { MediaGallery, MediaSlide } from '@sima-land/moleculas/common/components/media-gallery';
import { MediaData } from '@sima-land/moleculas/common/components/media-modal/types';
import plant from './images/plant.jpg';

export const meta = {
  category: 'common/MediaLayout',
  title: 'Тест: ошибка загрузки картинок',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function TestImagesBroken() {
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
    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>
      <TopBar
        size='unset'
        buttons={{
          ...navigationButtons({ onClose: () => void 0 }),
          endSecondary: {
            text: broken ? 'Починить' : 'Сломать',
            onClick: () => setBroken(a => !a),
          },
        }}
      />
      <ModalBody withScrollDisable>
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
                <MediaSlide key={index}>
                  <MediaView media={item} />
                </MediaSlide>
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
                imageSrc={processSrc(plant)}
                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'
                price={60235}
                currency='₽'
                footer={
                  <>
                    <Stepper size='s' defaultValue={1} style={{ width: '122px' }} />
                  </>
                }
              />
            </Layout>
          </MediaFooter>
        </MediaLayout>
      </ModalBody>
    </Modal>
  );
}
