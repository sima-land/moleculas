import React from 'react';
import classes from './modifier-select.scss';
import classnames from 'classnames/bind';
import arrowRight from '../../icons/arrow-right.svg';
import Icon from '@dev-dep/ui-nucleons/icon';
import isFunction from 'lodash/isFunction';

export const cx = classnames.bind(classes);

/**
 * @typedef ModifierSelectProps Свойства компонента селектора модификатора.
 * @param {string} name Название модификатора.
 * @param {string} [className] Дополнительный класс.
 * @param {string} [color] Цвет.
 * @param {string} [img] Ссылка на изображение.
 * @param {Function} onClick Обработчик клика.
 */

/**
 * Компонент модификатора в виде селекта.
 * @param {ModifierSelectProps} props Свойства компонента.
 * @return {ReactElement} Компонент.
 */
const ModifierSelect = ({
  name,
  className,
  color,
  image,
  onClick,
}) => (
  <div
    tabIndex={0}
    role='button'
    className={cx('wrap', className)}
    onClick={onClick}
    onKeyDown={e => isFunction(onClick) && e.keyCode === 13 && onClick()}
  >
    {(color || image) && (
      <div className={cx('adornment')}>
        {color
          ? (
            <div className={cx('color')} style={{ backgroundColor: color }} />
          ) : (
            <img src={image} width={32} height={32} alt='' />
          )
        }
      </div>
    )}
    <div className={cx('name')}>{name}</div>
    <div className={cx('arrow')}>
      <Icon
        icon={arrowRight}
        role='presentation'
        size={16}
        className={cx('arrow-icon')}
      />
    </div>
  </div>
);

export default ModifierSelect;
