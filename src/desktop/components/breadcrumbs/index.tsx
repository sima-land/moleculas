import React, { useState, useRef, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import on from '@dev-dep/ui-nucleons/helpers/on';
import classnames from 'classnames/bind';
import prop from 'lodash/fp/prop';
import DownSVG from './square-arrow-down.svg';
import styles from './breadcrumbs.scss';
import { BoxShadow } from '@dev-dep/ui-nucleons/styling/shadows';
import { get } from 'lodash';

type ItemPredicate<T> = (item: any) => T;

export interface BreadcrumbsProps {
  items: any[]
  getItemName: ItemPredicate<string>
  getItemURL: ItemPredicate<string>
  getItemSiblings: ItemPredicate<any[]>
  isItemActive: ItemPredicate<boolean>
  hasItemSiblings: ItemPredicate<boolean>
  onItemSiblingsShow: (item: any) => void
  'data-testid'?: string
}

const cx = classnames.bind(styles);

const DEFAULTS = {
  getName: prop('name'),
  getItemURL: prop('url'),
  getItemSiblings: prop('items'),
  isActiveItem: prop('isActive'),
  hasSiblings: (breadcrumb: any) => Array.isArray(get(breadcrumb, 'items')) && breadcrumb.items.length > 0,
};

/**
 * Список "хлебных крошек".
 * @param props Свойства компонента.
 * @param props.items Список "Хлебных крошек".
 * @param props.getItemName Вернёт имя элемента списка (по умолчанию свойство "name").
 * @param props.getItemURL Вернёт URL элемента списка (по умолчанию свойство "url").
 * @param props.getItemSiblings Вернёт список дочерних ссылок (по умолчанию свойство "items").
 * @param props.isItemActive Вернёт true если элемент представляет активный раздел.
 * @param props.hasItemSiblings Вернёт true если имеются соседние категории.
 * @param props.onItemSiblingsShow Будет вызвана при открытии списка соседних элементов.
 * @return Элемент.
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
}: BreadcrumbsProps) => (
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
        onSiblingsShow={() => onItemSiblingsShow && onItemSiblingsShow(breadcrumb)}
        data-testid={`breadcrumb:${index}`}
      />
    ))}
  </ul>
);

/**
 * Элемент списка "хлебных крошек".
 * @param props Свойства.
 * @return Элемент.
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
}: any) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const openerRef = useRef<HTMLSpanElement | null>(null);
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
              onSiblingsShow && onSiblingsShow();
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
          <div ref={popupRef} className={cx('popup', BoxShadow.z3)}>
            {breadcrumbName}
            <DownSVG
              data-testid='breadcrumb:siblings-closer'
              className={cx('toggle-icon', 'close')}
              onClick={() => togglePopup(false)}
            />
            <ul className={cx('siblings-list')}>
              {siblings.map((siblingItem: any, siblingIndex: any) => {
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
          </div>
        </CSSTransition>
      )}
    </li>
  );
};

/**
 * Хук работы с попапом соседних элементов "крошки".
 * @param popupRef Ref попапа.
 * @param openerRef Ref открывающего элемента.
 * @return Контроль.
 */
const useSiblingsPopup = (popupRef: React.RefObject<HTMLElement>, openerRef: React.RefObject<HTMLElement>) => {
  const [withPopup, togglePopup] = useState<boolean>(false);

  useEffect(() => {
    const offClick = on(window, 'click', ({ target }) => {
      target

        // если клик произошел не по узлу иконки открытия и не внутри popup'а
        && [popupRef.current, openerRef.current].every(node => node && node !== target && !node.contains(target as any))
        && togglePopup(false);
    });

    const offKeyDown = on<KeyboardEvent>(window, 'keydown', ({ code, keyCode }) => {
      (code === 'Escape' || keyCode === 27) && togglePopup(false);
    });

    return () => {
      offClick();
      offKeyDown();
    };
  }, []);

  return [withPopup, togglePopup] as const;
};
