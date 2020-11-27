import React, { Fragment } from 'react';
import { PersonScreen } from '../';
import { SUPER_ELLIPSE_STYLE, SUPER_ELLIPSE_PATH_ID } from '../../../../common/constants';
import SupperEllipseClipPath from '@dev-dep/ui-nucleons/super-ellipse-clip-path';

const Template = args => (
  <Fragment>
    <PersonScreen {...args} />
    <SupperEllipseClipPath id={SUPER_ELLIPSE_PATH_ID} />
  </Fragment>
);

export const NoArbitraryLinkView = Template.bind({});
export const ArbitraryLinkView = Template.bind({});

NoArbitraryLinkView.storyName = 'Без произвольной ссылки';
NoArbitraryLinkView.args = {
  name: 'Марина Михайловская',
  appointment: 'Менеджер по игрушке',
  email: 'example@email.com',
  skype: 'example@skype.com',
  phoneHref: 'tel:88000000000;postd=8823',
  phoneText: '88000000000 доб. 8823',
  secondPhoneHref: 'tel:+7900000000',
  secondPhoneText: '+7 (900) 000 000',
  superEllipseStyle: SUPER_ELLIPSE_STYLE,
};

ArbitraryLinkView.storyName = 'С произвольной ссылкой';
ArbitraryLinkView.args = {
  name: 'Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга',
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
  superEllipseStyle: SUPER_ELLIPSE_STYLE,
};
