import { PersonInfo } from '..';
import { Screen } from '@sima-land/ui-nucleons/screen';

export default {
  title: 'mobile/PersonInfo',
  component: PersonInfo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент экрана информации о сотруднике',
      },
    },
  },
};

export function Primary() {
  const person = {
    name: 'Марина Михайловская',
    appointment: 'Менеджер по игрушке',
    email: 'mari-mikh@email.com',
    skype: '@mari-mikh',
    phoneHref: 'tel:88000000000;postd=8823',
    phoneText: '88000000000 доб. 8823',
    secondPhoneHref: 'tel:+7900000000',
    secondPhoneText: '+7 (900) 000 000',
  };

  return (
    <Screen>
      <Screen.Header onClose={() => alert('Пока не будем закрывать, хорошо?')} />
      <Screen.Body>
        <PersonInfo {...person} />
      </Screen.Body>
    </Screen>
  );
}

Primary.storyName = 'Простой пример';

export function WithArbitraryLink() {
  const person = {
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
    <Screen>
      <Screen.Header onClose={() => alert('Пока не будем закрывать, хорошо?')} />
      <Screen.Body>
        <PersonInfo {...person} />
      </Screen.Body>
    </Screen>
  );
}

WithArbitraryLink.storyName = 'С произвольной ссылкой';
