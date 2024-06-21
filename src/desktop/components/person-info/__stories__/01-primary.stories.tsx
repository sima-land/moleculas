import { PersonInfo } from '@sima-land/moleculas/desktop/components/person-info';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'desktop/PersonInfo',
  component: PersonInfo,
  parameters: {
    parameters: {
      layout: 'padded',
    },
  },
};

export function Primary() {
  return (
    <Modal size='s'>
      <ModalBody>
        <PersonInfo
          personId={123}
          name='Марина Михайловская'
          appointment='Менеджер по игрушке'
          email='example@email.com'
          skype='example@skype.com'
          phoneText='+7 (999) 888-77-66'
          phoneHref='tel:89998887766'
          secondPhoneHref='tel:+79005554433'
          secondPhoneText='+7 (900) 555-44-33'
        />
      </ModalBody>

      <BottomBar divided>
        <CleanGroup>
          <CleanButton>Закрыть</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Modal>
  );
}

Primary.storyName = 'Простой пример';
