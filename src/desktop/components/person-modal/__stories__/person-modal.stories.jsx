import React from 'react';
import PersonModal from '../index';
import { action } from '@storybook/addon-actions';

const Template = args => <PersonModal {...args} />;
export const DefaultView = Template.bind({});
export const ArbitraryLinkView = Template.bind({});

DefaultView.storyName = 'Обычное использование';
DefaultView.args = {
  name: 'Марина Михайловская',
  appointment: 'Менеджер по игрушке',
  email: 'example@email.com',
  skype: 'example@skype.com',
  phoneText: '88000000000 доб. 8823',
  secondPhoneText: '+7 (900) 000 000',
  onClose: action('Закрыть'),
};

ArbitraryLinkView.storyName = 'С длинным именем и ссылкой';
ArbitraryLinkView.args = {
  name: 'Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга',
  appointment: 'Менеджер по игрушке',
  email: 'example@email.com',
  skype: 'example@skype.com',
  phoneHref: 'tel:88000000000;postd=8823',
  phoneText: '88000000000 доб. 8823',
  secondPhoneHref: 'tel:+7900000000',
  secondPhoneText: '+7 (900) 000 000',
  social: 'https://vk.com/oks2art https://vk.com/oks2art',
  arbitraryLinkProps: {
    href: 'test',
    children: 'Профиль организатора',
  },
  photoUrl: 'http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg',
  onClose: action('Закрыть'),
};

export default {
  title: 'desktop/PersonModal',
  component: PersonModal,
  parameters: {
    docs: {
      description: {
        component: ' Компонент модального окна сотрудника.',
      },
    },
  },
};
