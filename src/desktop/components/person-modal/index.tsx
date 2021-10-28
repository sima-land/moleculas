import React from 'react';
import { UserAvatar } from '@sima-land/ui-nucleons/avatar/user';
import { Box } from '@sima-land/ui-nucleons/box';
import { Text } from '@sima-land/ui-nucleons/text';
import { Link } from '@sima-land/ui-nucleons/link';
import { Clean } from '@sima-land/ui-nucleons/clean-buttons';
import classes from './person-modal.module.scss';
import classnames from 'classnames/bind';
import { Modal, ModalProps } from '@sima-land/ui-nucleons/modal';
import { useKeydown } from '@sima-land/ui-nucleons/hooks/keydown';

export interface PersonModalProps {
  /** Имя. */
  name: string;

  /** Должность. */
  appointment: string;

  /** Ссылка на фото. */
  photoUrl?: string;

  /** Почта. */
  email?: string;

  /** Skype. */
  skype?: string;

  /** Социальные сети. */
  social?: any[];

  /** Ссылка на рабочий номер телефона. */
  phoneHref?: string;

  /** Рабочий номер телефона. */
  phoneText?: string;

  /** Ссылка на сотовый номер телефона. */
  secondPhoneHref?: string;

  /** Сотовый номер телефона. */
  secondPhoneText?: string;

  /** Свойства ссылки под именем. */
  arbitraryLinkProps?: any;

  /** Сработает при нажатии на кнопку "Закрыть". */
  onClose: () => void;

  /** Нужно ли блокировать прокрутку пока открыто окно. */
  withScrollDisable?: ModalProps['withScrollDisable'];

  /** Опции блокировки прокрутки. */
  scrollDisableOptions?: ModalProps['scrollDisableOptions'];
}

const cx = classnames.bind(classes);

/**
 * Компонент модального окна сотрудника.
 * @param props Свойства.
 * @return Элемент.
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
  withScrollDisable,
  scrollDisableOptions,
}: PersonModalProps) => {
  useKeydown('Escape', onClose);

  return (
    <Modal
      size='s'
      withScrollDisable={withScrollDisable}
      scrollDisableOptions={scrollDisableOptions}
      onClose={onClose}
    >
      <Modal.Body>
        <div className={cx('main')}>
          <Box marginBottom={6}>
            <UserAvatar title={name} imageUrl={photoUrl} size={104} />
          </Box>

          <Box marginBottom={1}>
            <Text color='gray38' size={14} weight={400}>
              {appointment}
            </Text>
          </Box>

          <div className={cx('name')}>{name}</div>

          {arbitraryLinkProps && (
            <Box marginTop={2}>
              <Text size={12} weight={600}>
                <Link {...arbitraryLinkProps} />
              </Text>
            </Box>
          )}

          <div className={cx('contacts')}>
            {email && (
              <span className={cx('contacts-item')}>
                {'Email: '}
                <Link color='gray87' href={`mailto:${email}`} children={email} />
              </span>
            )}
            {Array.isArray(social) && social.length > 0 && (
              <span className={cx('contacts-item')}>
                Соц. сети:{' '}
                {social.map((props, key) => (
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
                <Link color='gray87' href={`skype:${skype}`} children={skype} />
              </span>
            )}
            {phoneText && (
              <span className={cx('contacts-item')}>
                <Link color='gray87' href={phoneHref} children={phoneText} />
              </span>
            )}
            {secondPhoneText && (
              <span className={cx('contacts-item')}>
                <Link color='gray87' href={secondPhoneHref} children={secondPhoneText} />
              </span>
            )}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer divided>
        <Clean.Group>
          <Clean.Button onClick={onClose}>Закрыть</Clean.Button>
        </Clean.Group>
      </Modal.Footer>
    </Modal>
  );
};

export default PersonModal;
