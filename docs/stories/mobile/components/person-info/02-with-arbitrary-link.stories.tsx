import { PersonInfo } from '@sima-land/moleculas/mobile/components/person-info';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';

export const meta = {
  category: 'mobile/PersonInfo',
  title: 'С произвольной ссылкой',
  parameters: {
    layout: 'padded',
  },
};

export default function WithArbitraryLink() {
  const [open, setOpen] = useState(false);

  const person = {
    personId: 123,
    name: 'Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)',
    appointment: 'Менеджер по игрушке',
    email: 'example@email.com',
    skype: 'example@skype.com',
    phoneHref: 'tel:88000000000;postd=8823',
    phoneText: '88000000000 доб. 8823',
    secondPhoneHref: 'tel:+7900000000',
    secondPhoneText: '+7 (900) 000 000',
    arbitraryLinkProps: {
      href: 'test',
      children: 'Профиль организатора',
    },
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Показать</Button>

      {open && (
        <Modal size='fullscreen'>
          <TopBar buttons={navigationButtons({ onClose: () => setOpen(false) })} />
          <ModalBody>
            <PersonInfo {...person} />
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
