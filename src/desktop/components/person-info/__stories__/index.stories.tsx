import { PersonInfo } from '@sima-land/moleculas/desktop/components/person-info';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'desktop/PersonInfo',
  component: PersonInfo,
  parameters: {
    docs: {
      description: {
        component: 'Компонент модального окна сотрудника.',
      },
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

export function ArbitraryLink() {
  return (
    <Modal size='s'>
      <ModalBody>
        <PersonInfo
          personId={123}
          photoUrl='https://picsum.photos/id/342/200/200'
          name='Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)'
          appointment='Менеджер по игрушке'
          email='example@email.com'
          skype='example@skype.com'
          phoneText='89998887766 доб. 8823'
          phoneHref='tel:89998887766;postd=8823'
          secondPhoneHref='tel:+79005554433'
          secondPhoneText='+7 (900) 555-44-33'
          social={[
            {
              children: 'vk.com/oks2art',
              href: 'https://example.com',
            },
            {
              children: 'twitter.com/oks2art',
              href: 'https://example.com',
            },
            {
              children: 'odnoklassniki.ru/oks2art',
              href: 'https://example.com',
            },
          ]}
          arbitraryLinkProps={{
            children: 'Профиль организатора',
            href: 'test',
          }}
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

ArbitraryLink.storyName = 'С длинным именем и ссылкой';
