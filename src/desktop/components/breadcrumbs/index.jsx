import React, { useState, useRef, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Popup from '@dev-dep/ui-nucleons/popups/popup';
import on from '@dev-dep/ui-nucleons/helpers/on';
import classnames from 'classnames/bind';
import prop from 'lodash/fp/prop';
import DownSVG from './square-arrow-down.svg';
import styles from './breadcrumbs.scss';

const cx = classnames.bind(styles);

const DEFAULTS = {
  getName: prop('name'),
  getItemURL: prop('url'),
  getItemSiblings: prop('items'),
  isActiveItem: prop('isActive'),
  hasSiblings: breadcrumb => Array.isArray(breadcrumb?.items) && breadcrumb.items.length > 0,
};

/**
 * Список "хлебных крошек".
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список "Хлебных крошек".
 * @param {Function} [props.getItemName] Вернёт имя элемента списка (по умолчанию свойство "name").
 * @param {Function} [props.getItemURL] Вернёт URL элемента списка (по умолчанию свойство "url").
 * @param {Function} [props.getItemSiblings] Вернёт список дочерних ссылок (по умолчанию свойство "items").
 * @param {Function} [props.isItemActive] Вернёт true если элемент представляет активный раздел.
 * @param {Function} [props.hasItemSiblings] Вернёт true если имеются соседние категории.
 * @param {Function} [props.onItemSiblingsShow] Будет вызвана при открытии списка соседних элементов.
 * @param {string} [props.'data-testid'] Идентификатор для систем автоматизированного тестирования.
 * @return {ReactElement} Элемент.
 */
export const Breadcrumbs = ({
  items,
  getItemName = DEFAULTS.getName,
  getItemURL = DEFAULTS.getItemURL,
  getItemSiblings = DEFAULTS.getItemSiblings,
  isItemActive = DEFAULTS.isActiveItem,
  hasItemSiblings = DEFAULTS.hasSiblings,
  onItemSiblingsShow,
  'data-testid': dataTestId,
}) => (
  <ul className={cx('breadcrumbs')} data-testid={dataTestId}>
    {Array.isArray(items) && items.map((breadcrumb, index) => (
      <Breadcrumb
        key={index}
        title={getItemName(breadcrumb)}
        href={getItemURL(breadcrumb)}
        canOpen={hasItemSiblings(breadcrumb)}
        siblings={getItemSiblings(breadcrumb)}
        active={isItemActive(breadcrumb)}
        getSiblingName={getItemName}
        isActiveSibling={isItemActive}
        getSiblingHref={getItemURL}
        onSiblingsShow={() => onItemSiblingsShow?.(breadcrumb)}
        data-testid={`breadcrumb:${index}`}
      />
    ))}
  </ul>
);

/**
 * Элемент списка "хлебных крошек".
 * @param {Object} props Свойства.
 * @return {ReactElement} Элемент.
 */
const Breadcrumb = ({
  title,
  href,
  siblings,
  active,
  getSiblingName,
  isActiveSibling,
  getSiblingHref,
  onSiblingsShow,
  canOpen,
  'data-testid': dataTestId,
}) => {
  const popupRef = useRef();
  const openerRef = useRef();
  const hasSiblings = siblings?.length > 0;
  const breadcrumbName = active
    ? (
      <span className={cx('active')}>{title}</span>
    ) : (
      <a
        className={cx('link')}
        href={href}
        children={title}
      />
    );

  const [withPopup, togglePopup] = useSiblingsPopup(popupRef, openerRef);

  return (
    <li data-testid={dataTestId}>
      {breadcrumbName}
      {canOpen && (
        <span ref={openerRef}>
          <DownSVG
            data-testid='breadcrumb:siblings-opener'
            className={cx('toggle-icon')}
            onClick={() => {
              togglePopup(true);
              onSiblingsShow?.();
            }}
          />
        </span>
      )}
      {hasSiblings && (
        <CSSTransition
          in={withPopup}
          timeout={200}
          unmountOnExit
          classNames={{
            enter: cx('fade-enter'),
            enterActive: cx('fade-enter-active'),
            exit: cx('fade-exit'),
            exitActive: cx('fade-exit-active'),
          }}
        >
          <Popup
            additionalClass={cx('popup')}
            ref={popupRef}
          >
            {breadcrumbName}
            <DownSVG
              data-testid='breadcrumb:siblings-closer'
              className={cx('toggle-icon', 'close')}
              onClick={() => togglePopup(false)}
            />
            <ul className={cx('siblings-list')}>
              {siblings.map((siblingItem, siblingIndex) => {
                const isActive = isActiveSibling(siblingItem);
                const siblingName = getSiblingName(siblingItem);

                return (
                  <li
                    key={siblingIndex}
                    className={cx('sibling-item')}
                    data-testid={`breadcrumbs-item-sibling:${siblingIndex}`}
                  >
                    {isActive ? (
                      <span className={cx('disabled')}>{siblingName}</span>
                    ) : (
                      <a
                        className={cx('link')}
                        color='dark-gray'
                        href={getSiblingHref(siblingItem)}
                        children={siblingName}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </Popup>
        </CSSTransition>
      )}
    </li>
  );
};

/**
 * Хук работы с попапом соседних элементов "крошки".
 * @param {Object} popupRef Ref попапа.
 * @param {Object} openerRef Ref открывающего элемента.
 * @return {Function} Функция-обработчик монтирования компонента.
 */
const useSiblingsPopup = (popupRef, openerRef) => {
  const [withPopup, togglePopup] = useState(false);

  useEffect(() => {
    const offClick = on(window, 'click', ({ target }) => {
      target

        // если клик произошел не по узлу иконки открытия и не внутри popup'а
        && [popupRef.current, openerRef.current].every(node => node && node !== target && !node.contains(target))
        && togglePopup(false);
    });

    const offKeyDown = on(window, 'keydown', ({ code, keyCode }) => {
      (code === 'Escape' || keyCode === 27) && togglePopup(false);
    });

    return () => {
      offClick();
      offKeyDown();
    };
  }, []);

  return [withPopup, togglePopup];
};
