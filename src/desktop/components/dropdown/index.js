import React, { useState } from 'react';
import Icon from '@dev-dep/ui-nucleons/icon';
import Popup from '@dev-dep/ui-nucleons/popups/popup';
import arrowUpIcon from '../../../common/icons/arrow-up.svg';
import arrowDownIcon from '../../../common/icons/arrow-down.svg';
import classnames from 'classnames/bind';
import styles from './dropdown.scss';
import isFunction from 'lodash/isFunction';
import { useOutsideClick } from '../../../common/hooks/use-outside-click';

const cx = classnames.bind(styles);

/**
 * Компонент выпадающего меню.
 * @param {Object} props Пропы компонента.
 * @param {string} props.wrapperClass Класс обертки.
 * @param {string} props.title Заголовок меню.
 * @param {Array} props.items Элементы списка меню.
 * @param {Function} props.renderItem Функция для отрисовки элемента списка. По умолчанию - defaultRenderItem.
 * @param {Function} props.onSelect Функция, вызыаемая при клике на элемент списка.
 * @param {Function} props.renderDropdownHead Функция для заголовка списка.
 * @param {Function} props.popupClasses Класс попапа.
 * @return {ReactElement} Компонент выпадающего списка.
 */
const Dropdown = ({
  wrapperClass = '',
  title,
  items = [],
  renderItem = defaultRenderItem,
  onSelect,
  renderDropdownHead = renderDefaultHead,
  popupClasses = '',
  ...restProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });
  // eslint-disable-next-line require-jsdoc
  const onSelectItem = item => {
    setIsOpen(false);
    onSelect(item);
  };
  return (
    <div className={cx(wrapperClass)} ref={ref}>
      {
        renderDropdownHead({
          title,
          onTitleClick: () => setIsOpen(!isOpen),
          isOpen,
          setIsOpen,
          ...restProps,
        })
      }
      {isOpen
      && (
        <Popup additionalClass={cx('popup', popupClasses)}>
          <ul className={cx('list')}>
            {
              items.map((item, index) => renderItem(item, index, onSelectItem))
            }
          </ul>
        </Popup>
      )
      }
    </div>
  );
};

/**
 * Функция, отрисовки элемента списка по умолчанию.
 * @param {Object} item Элемент списка.
 * @param {number} index Порядковый номер элемента.
 * @param {Function} onSelect Функция, вызываемая при клике на элемент.
 * @return {ReactElement} Элемент списка.
 */
export const defaultRenderItem = (item, index, onSelect) => (
  <li onClick={() => isFunction(onSelect) && onSelect(item)}
    key={index}
    className={cx('list-item')}
  >
    {item.name}
  </li>
);

/**
 * Функция отрисовки элемента заголовка-инициатора выпадающего меню.
 * @param {Object} _ - Параметры для заголовка.
 * @param {string} _.title - Текст заголовка.
 * @param {Function} _.onTitleClick - Функция, вызываемая при клике на заголовок.
 * @param {boolean} _.isOpen - Стрелка в положении вверх.
 * @return {ReactElement} Элемент списка.
 */
export const renderDefaultHead = ({ title, onTitleClick, isOpen }) => (
  <div className={cx('dropdown')} onClick={isFunction(onTitleClick) && onTitleClick}>
    <div className={cx('title')}>{title}</div>
    <Icon inline icon={isOpen ? arrowUpIcon : arrowDownIcon} className={cx('icon')} size={16} />
  </div>
);

export default Dropdown;
