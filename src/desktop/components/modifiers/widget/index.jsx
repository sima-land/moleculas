import React from 'react';
import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import { ModifiersGroup } from '../group';
import prop from 'lodash/fp/prop';
import { Link } from '@dev-dep/ui-nucleons/link';
import classNames from 'classnames/bind';
import classes from './modifiers-widget.scss';
import isFunction from 'lodash/isFunction';

const cx = classNames.bind(classes);

/**
 * Функция-геттер для обработчика клика по модификатору.
 * @param {Function} onSelectItem Функция сменяющая модификатор.
 * @param {Object} item Модификатор.
 * @return {Function} Обработчик клика по модификатору.
 */
export const getSelectItem = (onSelectItem, item) => item.selected
  ? null
  : () => isFunction(onSelectItem) && onSelectItem(item);

/**
 * Компонент блока модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {string} props.title Название сущности модификатора.
 * @param {Array} props.items Данные модификатора товара.
 * @param {string} props.sizesTableUrl Url таблицы размеров.
 * @param {Function} props.onSelectItem Будет вызвана при выборе модификатора.
 * @return {ReactElement} Компонент блока модификаторов.
 */
export const ModifiersWidget = ({ title, items, sizesTableUrl, onSelectItem }) => (
  <div>
    {title && (
      <h3 className={cx('modifiers-title')}>
        {title} ({items.length}&nbsp;
        {getDeclination(items.length, ['вариант', 'варианта', 'вариантов'])}):
      </h3>
    )}

    <ModifiersGroup
      items={items}
      getItemContent={prop('name')}
      getItemCount={prop('inCartQty')}
      onSelectItem={onSelectItem}
      getSelectItem={getSelectItem}
    />

    {Boolean(sizesTableUrl) && (
      <Link
        href={sizesTableUrl}
        className={cx('modifiers-link')}
      >Таблица размеров</Link>
    )}
  </div>
);
