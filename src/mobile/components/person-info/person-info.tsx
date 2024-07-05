import { AnchorHTMLAttributes, ReactNode } from 'react';
import { Avatar, getUserAvatarProps } from '@sima-land/ui-nucleons/avatar';
import MailSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Mail';
import SkypeSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/LogoSkype';
import PhoneSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Phone';
import MobileSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Mobile';
import classnames from 'classnames/bind';
import styles from './person-info.m.scss';

export interface PersonInfoProps {
  /** Идентификатор. */
  personId?: number;

  /** Специализация. */
  appointment?: string;

  /** Свойства произвольной ссылки. */
  arbitraryLinkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;

  /** Адрес электронной почты. */
  email?: string;

  /** Имя. */
  name?: string;

  /** Ссылка на рабочий номер телефона. */
  phoneHref?: string;

  /** Рабочий номер телефона. */
  phoneText?: string;

  /** Ссылка на фото. */
  photoUrl?: string;

  /** Ссылка на сотовый номер телефона. */
  secondPhoneHref?: string;

  /** Сотовый номер телефона. */
  secondPhoneText?: string;

  /** Адрес Skype-аккаунта. */
  skype?: string;
}

const cx = classnames.bind(styles);

/**
 * Информация о персоне.
 * @param props Свойства.
 * @return Элемент.
 */
export function PersonInfo({
  personId,
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
}: PersonInfoProps) {
  return (
    <>
      <div className={cx('avatar')}>
        <Avatar {...getUserAvatarProps({ id: personId, name, image: photoUrl })} />
      </div>

      <span className={cx('name')}>{name}</span>

      {Boolean(appointment) && <span className={cx('appointment')}>{appointment}</span>}

      {arbitraryLinkProps && (
        <div
          className={cx('profile-url')}
          children={<a className={cx('link')} {...arbitraryLinkProps} />}
        />
      )}

      <div className={cx('items')}>
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
            href={phoneHref}
            primaryText={phoneText}
            secondaryText='Рабочий'
            icon={<PhoneSVG />}
          />
        )}
        {Boolean(secondPhoneText) && (
          <CommunicateLink
            href={secondPhoneHref}
            primaryText={secondPhoneText}
            secondaryText='Сотовый'
            icon={<MobileSVG />}
          />
        )}
      </div>
    </>
  );
}

/**
 * Компонент блока-ссылки для связи.
 * @param props Свойства.
 * @param props.href Ссылка.
 * @param props.primaryText Основной текст.
 * @param props.secondaryText Дополнительный текст.
 * @param props.icon Иконка.
 * @return Элемент.
 */
export function CommunicateLink({
  href,
  primaryText,
  secondaryText,
  icon,
}: {
  href?: string;
  primaryText?: string;
  secondaryText?: string;
  icon?: ReactNode;
}) {
  return (
    <a href={href} className={cx('item')}>
      <div className={cx('item-main-col')}>
        <div className={cx('item-title')}>{primaryText}</div>
        <div className={cx('item-description')}>{secondaryText}</div>
      </div>
      <div className={cx('icon-circle')}>{icon}</div>
    </a>
  );
}
