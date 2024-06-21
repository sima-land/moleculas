import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  ProductBrief,
} from '@sima-land/moleculas/common/components/media-modal';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import vase from './thumbnails/vase.jpg';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';
import CheckSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Check';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleFooterProductUnavailable() {
  const [added, setAdded] = useState(false);

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
            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>
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
            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>
              <ProductBrief
                href='https://sima-land.ru'
                imageSrc={vase}
                imageProps={{ style: { opacity: 0.44 } }}
                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'
                priceReplacer={
                  <>
                    <div style={{ marginBottom: '8px' }}>Нет в наличии</div>

                    <TextButton
                      size='s'
                      style={{ display: 'flex' }}
                      color={added ? 'additional-teal' : 'basic-blue'}
                      startIcon={added ? CheckSVG : undefined}
                      onClick={() => setAdded(a => !a)}
                    >
                      {added ? 'В листе ожидания' : 'В лист ожидания'}
                    </TextButton>
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

ExampleFooterProductUnavailable.storyName = 'Футер с товаром не в наличии';
