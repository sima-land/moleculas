import React from 'react';
import { UserAvatar } from '@dev-dep/ui-nucleons/avatar/user';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classes from './person-card.scss';
import classnames from 'classnames/bind';
import { Modal } from '@dev-dep/ui-nucleons/modal';
import Types from 'prop-types';
import { useKeyDownHandler } from '../../../common/hooks/use-key-down-handler';
import isNotEmptyArray from '@dev-dep/isomorph/helpers/utils/is-not-empty-array';

const cx = classnames.bind(classes);

/**
 * Компонент карточки персоны.
 * @param {Object} props Свойства.
 * @param {string} props.name Имя.
 * @param {string} props.appointment Должность.
 * @param {string} [props.photoUrl]  Ссылка на фото.
 * @param {string} [props.email] Почта.
 * @param {string} [props.skype] Skype.
 * @param {Object[]} [props.social] Социальные сети.
 * @param {string} [props.phoneHref] Ссылка на рабочий номер телефона.
 * @param {string} [props.phoneText] Рабочий номер телефона.
 * @param {string} [props.secondPhoneHref] Ссылка на сотовый номер телефона.
 * @param {string} [props.secondPhoneText] Сотовый номер телефона.
 * @param {Object} [props.arbitraryLinkProps] Свойства ссылки под именем.
 * @param {Function} props.onClose Сработает при нажатии на кнопку "Закрыть".
 * @return {React.ReactElement} Компонент.
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
}) => {
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
            {isNotEmptyArray(social) && (
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

PersonModal.propTypes = {
  /**
   * Имя.
   */
  name: Types.string.isRequired,

  /**
   * Специализация.
   */
  appointment: Types.string.isRequired,

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
   * Социальные сети.
   */
  social: Types.arrayOf(Types.object),

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

  /**
   * Сработает при нажатии на кнопку "Закрыть".
   */
  onClose: Types.func.isRequired,
};
