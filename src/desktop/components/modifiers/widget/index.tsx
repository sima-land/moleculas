import React from 'react';
import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import { ModifiersGroup } from '../group';
import prop from 'lodash/fp/prop';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Modifier } from '../button';
import classnames from 'classnames/bind';
import styles from './modifiers-widget.module.scss';

export interface ModifiersWidgetProps {
  title?: string
  items: Modifier[]
  sizesTableUrl?: string
  onSelectItem?: (item: Modifier) => void
}

const cx = classnames.bind(styles);

/**
 * Компонент блока модификаторов.
 * @param props Свойства компонента.
 * @param props.title Название сущности модификатора.
 * @param props.items Данные модификатора товара.
 * @param props.sizesTableUrl Url таблицы размеров.
 * @param props.onSelectItem Будет вызвана при выборе модификатора.
 * @return Элемент.
 */
export const ModifiersWidget = ({
  title,
  items,
  sizesTableUrl,
  onSelectItem,
}: ModifiersWidgetProps) => (
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
      onSelectItem={(item, selected) => {
        !selected && onSelectItem && onSelectItem(item);
      }}
    />

    {Boolean(sizesTableUrl) && (
      <Link
        href={sizesTableUrl}
        className={cx('modifiers-link')}
      >Таблица размеров</Link>
    )}
  </div>
);
