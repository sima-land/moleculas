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
import { Stepper } from '@sima-land/ui-nucleons/stepper';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleFooterProductAdded() {
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

ExampleFooterProductAdded.storyName = 'Футер с товаром в корзине';
