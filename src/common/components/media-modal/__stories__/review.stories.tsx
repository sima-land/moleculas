import React, { Fragment, useState } from 'react';
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
  MediaContent,
} from '..';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Review } from '../parts/review';
import { mixed } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function WithReview() {
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
                  <Tabs.Item name='Видео' />
                  <Tabs.Item name='360' />
                  <Tabs.Item name='Фото покупателей' selected />
                </Tabs>
              </HeaderLayout.Tabs>
              <HeaderLayout.Button>
                <TextButton {...Preset.headerButton()} />
              </HeaderLayout.Button>
            </HeaderLayout>
          </MediaHeader>

          <MediaMain>
            <MediaContent
              items={mixed}
              targetIndex={targetIndex}
              onChangeTargetIndex={setTargetIndex}
            />
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
              <Review
                rating={4}
                author='Пелагеевская Вероника Сергеевна'
                button={<TextButton size='s'>Перейти к отзыву</TextButton>}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora tenetur
                sapiente quisquam. Repellendus labore enim dicta natus sunt, saepe ab rem nostrum
                architecto, veritatis porro at harum, est tempora molestiae excepturi? Neque
                excepturi temporibus omnis veniam delectus libero adipisci ipsam quibusdam, nesciunt
                facilis ea quae facere commodi placeat architecto.
              </Review>
            </Layout>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

WithReview.storyName = 'Футер: отзыв';
