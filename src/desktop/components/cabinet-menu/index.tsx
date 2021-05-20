import React from 'react';
import { ReactSVG } from 'react-svg';
import { UserAvatar } from '@dev-dep/ui-nucleons/avatar/user';
import { Link } from '@dev-dep/ui-nucleons/link';
import IconMail from '@dev-dep/ui-quarks/icons/24x24/Stroked/mail';
import classes from './cabinet-menu.scss';
import classnames from 'classnames/bind';
import { map } from 'lodash';

const cx = classnames.bind(classes);

export interface CabinetMenuProps {
  avatar?: string
  userName?: string
  items?: {
    name?: string
    url?: string
    icon: string
    isMarked?: boolean
    isCurrent?: boolean
  }[]
  onReportClick?: (...args: any[]) => any
  settingsLink?: string
}

/**
 * Компонент меню.
 * @param props Свойства компонента.
 * @param props.avatar Фото юзера.
 * @param props.userName Имя юзера.
 * @param props.items Элементы меню.
 * @param props.settingsLink Ссылка, сработает при клике на аватар и на информацию о пользователе.
 * @param props.onReportClick Обработчик нажатия на сообщение о проблеме.
 * @return Компонент меню.
 */
const CabinetMenu = ({ avatar, userName, items, settingsLink, onReportClick }: CabinetMenuProps) => (
  <div className={cx('wrap')}>
    <Link className={cx('avatar-wrap')} href={settingsLink} aria-label='Настройки'>
      <UserAvatar
        size={56}
        imageUrl={avatar}
        title={userName}
      />
    </Link>
    <Link className={cx('user-info')} href={settingsLink}>
      <div className={cx('name')}>{userName || 'Имя не указано'}</div>
      <div className={cx('settings')}>Настройки</div>
    </Link>
    <div className={cx('items')}>
      {
        map(items, ({ isCurrent, icon, isMarked, name, url }, key) => (
          <Link
            className={cx('item', isCurrent && 'active')}
            key={key}
            color='gray38'
            href={isCurrent ? undefined : url}
          >
            <ReactSVG
              src={icon}
              className={cx('icon', isMarked && 'dot')}
              aria-hidden='true'
            />
            <div className={cx('text')}>
              {name}
            </div>
          </Link>
        ))
      }
      <a
        role='button'
        className={cx('item')}
        onClick={onReportClick}
      >
        <IconMail className={cx('icon')} />
        <div className={cx('text')}>
            Сообщить о проблеме
        </div>
      </a>
    </div>
  </div>
);

export default CabinetMenu;
