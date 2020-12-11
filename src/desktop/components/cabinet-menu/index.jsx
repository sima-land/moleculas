import React from 'react';
import { ReactSVG } from 'react-svg';
import Avatar from '@dev-dep/ui-nucleons/avatar';
import Link from '@dev-dep/ui-nucleons/link';

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
 * @return {ReactElement} Компонент меню.
 */
const CabinetMenu = ({
  avatar,
  superEllipseId,
  userName,
  items,
  settingsLink,
}) => (
  <div className={cx('wrap')}>
    <Link className={cx('avatar-wrap')} href={settingsLink} aria-label='Настройки'>
      <Avatar
        size={56}
        imageUrl={avatar}
        title={userName}
        monogram={userName}
        clipStyle={{
          clipPath: `url(#${superEllipseId})`,
          WebkitClipPath: `url(#${superEllipseId})`,
        }}
      />
    </Link>
    <Link className={cx('user-info')} href={settingsLink}>
      <div className={cx('name')}>{userName}</div>
      <div className={cx('settings')}>Настройки</div>
    </Link>
    <div className={cx('items')}>
      {
        map(items, ({ onClick, isCurrent, icon, isMarked, name }, key) => (
          <div
            className={cx('item', isCurrent && 'active')}
            key={key}
            onClick={onClick}
          >
            <ReactSVG
              src={icon}
              className={cx('icon', isMarked && 'dot')}
              aria-hidden='true'
            />
            <div className={cx('text')}>
              {name}
            </div>
          </div>
        ))
      }
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
  items: Types.shape({
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
    onClick: Types.func,
  }),

  /**
   * Ссылка, сработает при клике на аватар и на информацию о пользователе.
   */
  settingsLink: Types.string,
};

export default CabinetMenu;
