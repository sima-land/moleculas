import {
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  Review,
} from '@sima-land/moleculas/common/components/media-modal';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/MediaLayout',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ExampleFooterReview() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(33, 33, 33, 0.24)',
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
      </ModalBody>
    </Modal>
  );
}

ExampleFooterReview.storyName = 'Футер с отзывом';
