import React from 'react';
import classnames from 'classnames/bind';
import { UserAvatar } from '@sima-land/ui-nucleons/avatar/user';
import { Box } from '@sima-land/ui-nucleons/box';
import { Text } from '@sima-land/ui-nucleons/text';
import { Screen, ScreenProps } from '@sima-land/ui-nucleons/screen';
import { InnerBorder } from '@sima-land/ui-nucleons/styling/borders';
import MailSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/mail';
import SkypeSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/skype';
import PhoneSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/phone';
import MobileSVG from '@sima-land/ui-quarks/icons/24x24/Filled/mobile';
import classes from './person-screen.module.scss';

export interface PersonScreenProps extends ScreenProps {
  name?: string;
  appointment?: string;
  photoUrl?: string;
  email?: string;
  skype?: string;
  phoneHref?: string;
  phoneText?: string;
  secondPhoneHref?: string;
  secondPhoneText?: string;
  arbitraryLinkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const cx = classnames.bind(classes);

/**
 * Компонент экрана персональных данных.
 * @param props Свойства.
 * @param props.name Имя.
 * @param props.appointment Специализация.
 * @param props.photoUrl Ссылка на фото.
 * @param props.email Адрес электронной почты.
 * @param props.skype Адрес Skype-аккаунта.
 * @param props.phoneHref Ссылка на рабочий номер телефона.
 * @param props.phoneText Рабочий номер телефона.
 * @param props.secondPhoneHref Ссылка на сотовый номер телефона.
 * @param props.secondPhoneText Сотовый номер телефона.
 * @param props.arbitraryLinkProps Свойства произвольной ссылки.
 * @return Элемент.
 */
export const PersonScreen = ({
  name,
  appointment,
  photoUrl,
  email,
  skype,
  phoneHref,
  phoneText,
  secondPhoneHref,
  secondPhoneText,
  arbitraryLinkProps,
  ...screenProps
}: PersonScreenProps) => (
  <Screen {...screenProps} withDivideHeader={false}>
    <div className={cx('avatar', 'small')}>
      <UserAvatar
        size={64}
        title={name}
        imageUrl={photoUrl}
      />
    </div>
    <div className={cx('avatar', 'big')}>
      <UserAvatar
        size={104}
        title={name}
        imageUrl={photoUrl}
      />
    </div>
    <span className={cx('name')}>
      {name}
    </span>
    {Boolean(appointment) && (
      <span className={cx('appointment')}>
        {appointment}
      </span>
    )}
    {arbitraryLinkProps && (
      <div
        className={cx('profile-url')}
        children={(
          <a
            className={cx('link')}
            {...arbitraryLinkProps}
          />
        )}
      />
    )}
    <div className={cx('items', InnerBorder.bottom)}>
      {Boolean(email) && (
        <CommunicateLink
          href={`mailto:${email}`}
          primaryText={email}
          secondaryText='Электронная почта'
          icon={<MailSVG />}
        />
      )}
      {Boolean(skype) && (
        <CommunicateLink
          href={`skype:${skype}?chat`}
          primaryText={skype}
          secondaryText='Skype'
          icon={<SkypeSVG />}
        />
      )}
      {Boolean(phoneText) && (
        <CommunicateLink
          href={phoneHref || undefined}
          primaryText={phoneText}
          secondaryText='Рабочий'
          icon={<PhoneSVG />}
        />
      )}
      {Boolean(secondPhoneText) && (
        <CommunicateLink
          href={secondPhoneHref || undefined}
          primaryText={secondPhoneText}
          secondaryText='Сотовый'
          icon={<MobileSVG />}
        />
      )}
    </div>
  </Screen>
);

/**
 * Компонент блока-ссылки для связи.
 * @param props Свойства.
 * @param props.href Ссылка.
 * @param props.primaryText Основной текст.
 * @param props.secondaryText Дополнительный текст.
 * @param props.icon Иконка.
 * @return Компонент блока-ссылки для связи.
 */
export const CommunicateLink = ({
  href,
  primaryText,
  secondaryText,
  icon,
}: {
  href?: string
  primaryText?: string
  secondaryText?: string
  icon?: React.ReactNode
}) => (
  <a href={href} className={cx('item', InnerBorder.top)}>
    <Box flex='grow'>
      <Text size={16} lineHeight={24} color='gray87' weight={600}>
        {primaryText}
      </Text>
      <Box marginTop={1}>
        <Text size={14} lineHeight={20} color='gray38'>
          {secondaryText}
        </Text>
      </Box>
    </Box>
    <div className={cx('icon-circle')}>
      {icon}
    </div>
  </a>
);
