import React from 'react';
import PersonModal from '..';
import { action } from '@storybook/addon-actions';

export default {
  title: 'desktop/PersonModal',
  component: PersonModal,
  parameters: {
    docs: {
      description: {
        component: 'Компонент модального окна сотрудника.',
      },
    },
  },
};

export const Primary = () => (
  <PersonModal
    name='Марина Михайловская'
    appointment='Менеджер по игрушке'
    email='example@email.com'
    skype='example@skype.com'
    phoneText='88000000000 доб. 8823'
    secondPhoneText='+7 (900) 000 000'
    onClose={action('Закрыть')}
  />
);

export const ArbitraryLink = () => (
  <PersonModal
    name='Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга'
    appointment='Менеджер по игрушке'
    email='example@email.com'
    skype='example@skype.com'
    phoneHref='tel:88000000000;postd=8823'
    phoneText='88000000000 доб. 8823'
    secondPhoneHref='tel:+7900000000'
    secondPhoneText='+7 (900) 000 000'
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
      href: 'test',
      children: 'Профиль организатора',
    }}
    photoUrl='https://picsum.photos/id/342/200/200'
    onClose={action('Закрыть')}
  />
);

ArbitraryLink.storyName = 'С длинным именем и ссылкой';
