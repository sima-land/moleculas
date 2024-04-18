import { Avatar, getUserAvatarProps } from '@sima-land/ui-nucleons/avatar';
import { Box } from '@sima-land/ui-nucleons/box';
import { Text } from '@sima-land/ui-nucleons/text';
import { Link } from '@sima-land/ui-nucleons/link';
import { ModalBodyProps } from '@sima-land/ui-nucleons/modal';
import classnames from 'classnames/bind';
import styles from './person-info.m.scss';

interface PersonInfoProps {
  /** Идентификатор. */
  personId?: number;

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
}

export interface PersonModalProps extends PersonInfoProps {
  /** Сработает при нажатии на кнопку "Закрыть". */
  onClose: () => void;

  /** Нужно ли блокировать прокрутку пока открыто окно. */
  withScrollDisable?: ModalBodyProps['withScrollDisable'];

  /** Опции блокировки прокрутки. */
  scrollDisableOptions?: ModalBodyProps['scrollDisableOptions'];
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
  social,
  phoneHref,
  phoneText,
  secondPhoneHref,
  secondPhoneText,
  arbitraryLinkProps,
}: PersonInfoProps) {
  return (
    <div className={cx('main')}>
      <Box marginBottom={6}>
        <Avatar {...getUserAvatarProps({ id: personId, name, image: photoUrl })} />
      </Box>

      <Box marginBottom={1}>
        <Text color='basic-gray38' size={14} weight={400}>
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
            <Link color='basic-gray87' href={`mailto:${email}`} children={email} />
          </span>
        )}
        {Array.isArray(social) && social.length > 0 && (
          <span className={cx('contacts-item')}>
            Соц. сети:{' '}
            {social.map((props, key) => (
              <Link
                className={cx('inline')}
                key={key}
                color='basic-gray87'
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
            <Link color='basic-gray87' href={`skype:${skype}`} children={skype} />
          </span>
        )}
        {phoneText && (
          <span className={cx('contacts-item')}>
            <Link color='basic-gray87' href={phoneHref} children={phoneText} />
          </span>
        )}
        {secondPhoneText && (
          <span className={cx('contacts-item')}>
            <Link color='basic-gray87' href={secondPhoneHref} children={secondPhoneText} />
          </span>
        )}
      </div>
    </div>
  );
}
