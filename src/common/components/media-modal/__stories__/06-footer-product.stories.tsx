import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  ProductBrief,
} from '@sima-land/moleculas/common/components/media-modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Modal } from '@sima-land/ui-nucleons/modal';
import vase from '../__mocks__/thumbnails/vase.jpg';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleFooterProduct() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.24)',
  };

  return (
    <Modal size='fullscreen' footerStub={false}>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
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
                footer={<Button size='s'>В корзину</Button>}
              />
            </Layout>
          </MediaFooter>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

ExampleFooterProduct.storyName = 'Футер с товаром';