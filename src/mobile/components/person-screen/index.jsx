import React from 'react';
import classnames from 'classnames/bind';
import { UserAvatar } from '@dev-dep/ui-nucleons/avatar/user';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Screen } from '@dev-dep/ui-nucleons/screen';
import { InnerBorder } from '@dev-dep/ui-nucleons/styling/borders';
import MailSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/mail';
import SkypeSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/skype';
import PhoneSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/phone';
import MobileSVG from '@dev-dep/ui-quarks/icons/24x24/Filled/mobile';
import classes from './person-screen.scss';
import Types from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Компонент блока-ссылки для связи.
 * @param {Object} props Свойства.
 * @param {string} props.href Ссылка.
 * @param {string} props.primaryText Основной текст.
 * @param {string} props.secondaryText Дополнительный текст.
 * @param {ReactElement} props.icon Иконка.
 * @return {ReactElement} Компонент блока-ссылки для связи.
 */
export const CommunicateLink = ({
  href,
  primaryText,
  secondaryText,
  icon,
}) => (
  <a href={href} className={cx('item', InnerBorder.top)}>
    <Box flex='grow'>
      <Text size={16} lineHeight={24} color='gray87' weight={500}>
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

/**
 * Компонент экрана персональных данных.
 * @param {Object} props Свойства.
 * @param {string} props.name Имя.
 * @param {string} props.appointment Специализация.
 * @param {string} props.photoUrl Ссылка на фото.
 * @param {string} props.email Адрес электронной почты.
 * @param {string} props.skype Адрес Skype-аккаунта.
 * @param {string} props.phoneHref Ссылка на рабочий номер телефона.
 * @param {string} props.phoneText Рабочий номер телефона.
 * @param {string} props.secondPhoneHref Ссылка на сотовый номер телефона.
 * @param {string} props.secondPhoneText Сотовый номер телефона.
 * @param {Object} props.arbitraryLinkProps Свойства произвольной ссылки.
 * @return {ReactElement} Компонент экрана персональных данных.
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
}) => (
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

PersonScreen.propTypes = {
  /**
   * Имя.
   */
  name: Types.string,

  /**
   * Специализация.
   */
  appointment: Types.string,

  /**
   * Ссылка на фото.
   */
  photoUrl: Types.string,

  /**
   * Почта.
   */
  email: Types.string,

  /**
   * Скайп.
   */
  skype: Types.string,

  /**
   * Ссылка на рабочий номер телефона.
   */
  phoneHref: Types.string,

  /**
   * Номер рабочего телефона.
   */
  phoneText: Types.string,

  /**
   * Ссылка на номер сотового телефона.
   */
  secondPhoneHref: Types.string,

  /**
   * Номер сотового телефона.
   */
  secondPhoneText: Types.string,

  /**
   * Свойства произвольной ссылки.
   */
  arbitraryLinkProps: Types.object,
};
