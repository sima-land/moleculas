import React from 'react';
import classes from './modifier-select.scss';
import classnames from 'classnames/bind';
import RightSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/right';

export interface ModifierSelectProps {
  name?: string
  className?: string
  color?: string
  image?: string
  onClick?: () => void
}

export const cx = classnames.bind(classes);

/**
 * Компонент модификатора в виде селекта.
 * @param props Свойства компонента.
 * @return Элемент.
 */
const ModifierSelect = ({
  name,
  className,
  color,
  image,
  onClick,
}: ModifierSelectProps) => (
  <div
    tabIndex={0}
    role='button'
    className={cx('wrap', className)}
    onClick={onClick}
    onKeyDown={e => e.keyCode === 13 && onClick && onClick()}
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
      <RightSVG
        role='presentation'
        className={cx('arrow-icon')}
      />
    </div>
  </div>
);

export default ModifierSelect;
