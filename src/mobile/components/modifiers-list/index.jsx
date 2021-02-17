import React from 'react';
import isFunction from 'lodash/isFunction';
import { ModifierItem } from './modifier-item';
import Link from '@dev-dep/ui-nucleons/link';
import StatementSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/statement';
import classes from './modifiers-list.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

/**
 * Компонент списка модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Массив данных модификаторов.
 * @param {string} props.currencyGrapheme Графема валюты пользователя.
 * @param {string} props.sizesTableUrl Url таблицы размеров.
 * @param {Object} props.wrapperProps Свойства блока-обертки.
 * @param {Object} props.itemsContainerProps Свойства блока-обертки списка модификаторов.
 * @param {Function} props.onItemClick Обработчик клика на модификатор.
 * @return {ReactElement} Компонент списка модификаторов.
 */
export const ModifiersList = ({
  items,
  currencyGrapheme,
  sizesTableUrl,
  wrapperProps,
  itemsContainerProps,
  onItemClick,
}) => (
  <div {...wrapperProps}>
    {sizesTableUrl && (
      <div className={cx('sizes-table-wrapper')}>
        <Link
          className={cx('sizes-table-link')}
          href={sizesTableUrl}
        >
          Таблица размеров
          <StatementSVG
            role='presentation'
            className={cx('sizes-table-icon')}
          />
        </Link>
      </div>
    )}
    {Array.isArray(items) && (
      <div {...itemsContainerProps}>
        {items.map((item, index) => (
          <ModifierItem
            key={index}
            onClick={() => isFunction(onItemClick) && onItemClick(item)}
            {...item}
            currencyGrapheme={currencyGrapheme}
          />
        ))}
      </div>
    )}
  </div>
);
