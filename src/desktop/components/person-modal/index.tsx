import React from 'react';
import { UserAvatar } from '@dev-dep/ui-nucleons/avatar/user';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classes from './person-card.scss';
import classnames from 'classnames/bind';
import { Modal } from '@dev-dep/ui-nucleons/modal';
import { useKeyDownHandler } from '../../../common/hooks/use-key-down-handler';

export interface PersonModalProps {
  name: string
  appointment: string
  photoUrl?: string
  email?: string
  skype?: string
  social?: any[]
  phoneHref?: string
  phoneText?: string
  secondPhoneHref?: string
  secondPhoneText?: string
  arbitraryLinkProps?: any
  onClose: (...args: any[]) => void
}

const cx = classnames.bind(classes);

/**
 * Компонент карточки персоны.
 * @param props Свойства.
 * @param props.name Имя.
 * @param props.appointment Должность.
 * @param props.photoUrl  Ссылка на фото.
 * @param props.email Почта.
 * @param props.skype Skype.
 * @param props.social Социальные сети.
 * @param props.phoneHref Ссылка на рабочий номер телефона.
 * @param props.phoneText Рабочий номер телефона.
 * @param props.secondPhoneHref Ссылка на сотовый номер телефона.
 * @param props.secondPhoneText Сотовый номер телефона.
 * @param props.arbitraryLinkProps Свойства ссылки под именем.
 * @param props.onClose Сработает при нажатии на кнопку "Закрыть".
 * @return Компонент.
 */
export const PersonModal = ({
  name,
  appointment,
  photoUrl,
  email,
  skype,
  social,
  phoneHref,
  phoneText,
  secondPhoneHref,
  secondPhoneText,
  arbitraryLinkProps,
  onClose,
}: PersonModalProps) => {
  useKeyDownHandler('Escape', onClose);

  return (
    <Modal
      size='s'
      withTopBar={false}
      withScrollDisable={false}
      children={(
        <div className={cx('main')}>
          <Box marginBottom={6}>
            <UserAvatar
              title={name}
              imageUrl={photoUrl}
              size={104}
            />
          </Box>

          <Box marginBottom={1}>
            <Text color='gray38' size={14} weight={400}>{appointment}</Text>
          </Box>

          <div className={cx('name')}>
            {name}
          </div>

          {arbitraryLinkProps && (
            <Box marginTop={2}>
              <Text size={12} weight={500}>
                <Link {...arbitraryLinkProps} />
              </Text>
            </Box>
          )}

          <div className={cx('contacts')}>
            {email && (
              <span className={cx('contacts-item')}>
                {'Email: '}
                <Link
                  color='gray87'
                  href={`mailto:${email}`}
                  children={email}
                />
              </span>
            )}
            {Array.isArray(social) && social.length > 0 && (
              <span className={cx('contacts-item')}>
              Соц. сети: {social.map((props, key) => (
                  <Link
                    className={cx('inline')}
                    key={key}
                    color='gray87'
                    target='_blank'
                    rel='nofollow'
                    {...props}
                  />
                ))}
              </span>
            )}
            {skype && (
              <span className={cx('contacts-item')}>
                {'Skype: '}
                <Link
                  color='gray87'
                  href={`skype:${skype}`}
                  children={skype}
                />
              </span>
            )}
            {phoneText && (
              <span className={cx('contacts-item')}>
                <Link
                  color='gray87'
                  href={phoneHref}
                  children={phoneText}
                />
              </span>
            )}
            {secondPhoneText && (
              <span className={cx('contacts-item')}>
                <Link
                  color='gray87'
                  href={secondPhoneHref}
                  children={secondPhoneText}
                />
              </span>
            )}
          </div>
        </div>
      )}
      footer={(
        <Clean.Group size='m'>
          <Clean.Button onClick={onClose}>Закрыть</Clean.Button>
        </Clean.Group>
      )}
      onClose={onClose}
    />
  );
};

export default PersonModal;
