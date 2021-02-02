import React from 'react';
import { ReactSVG } from 'react-svg';
import { UserAvatar } from '@dev-dep/ui-nucleons/avatar/user';
import Link from '@dev-dep/ui-nucleons/link';

import IconMail from '@dev-dep/ui-quarks/icons/24x24/Stroked/mail';

import classes from './cabinet-menu.scss';
import classnames from 'classnames/bind';

import { map } from 'lodash';

import Types from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Компонент меню.
 * @param {Object} props Свойства компонента.
 * @param {string} props.avatar Фото юзера.
 * @param {string} props.superEllipseId Идентификатор маски для обрезки аватара.
 * @param {string} props.userName Имя юзера.
 * @param {Array} props.items Элементы меню.
 * @param {string} props.settingsLink Ссылка, сработает при клике на аватар и на информацию о пользователе.
 * @param {string} props.onReportClick Обработчик нажатия на сообщение о проблеме.
 * @return {ReactElement} Компонент меню.
 */
const CabinetMenu = ({
  avatar,
  superEllipseId,
  userName,
  items,
  settingsLink,
  onReportClick,
}) => (
  <div className={cx('wrap')}>
    <Link className={cx('avatar-wrap')} href={settingsLink} aria-label='Настройки'>
      <UserAvatar
        size={56}
        imageUrl={avatar}
        title={userName}
        style={{
          clipPath: `url(#${superEllipseId})`,
          WebkitClipPath: `url(#${superEllipseId})`,
        }}
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

CabinetMenu.propTypes = {
  /**
   * Фото юзера.
   */
  avatar: Types.string,

  /**
   * Идентификатор маски для обрезки аватара.
   */
  superEllipseId: Types.string,

  /**
   * Имя юзера.
   */
  userName: Types.string,

  /**
   * Элементы меню.
   */
  items: Types.arrayOf(Types.shape({
    /**
     * Текст элемента меню.
     */
    name: Types.string,

    /**
     * Ссылка, срабатывает при нажатии на элемент меню.
     */
    url: Types.string,

    /**
     * Иконка элемента меню (ссылка на иконку).
     */
    icon: Types.string,

    /**
     * Есть ли маркер.
     */
    isMarked: Types.bool,

    /**
     * Признак активной вкладки.
     */
    isCurrent: Types.bool,

    /**
     * Функция-обработчик клика по элементу меню.
     */
    onReportClick: Types.func,
  })),

  /**
   * Ссылка, сработает при клике на аватар и на информацию о пользователе.
   */
  settingsLink: Types.string,
};

export default CabinetMenu;
