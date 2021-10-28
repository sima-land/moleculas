import React from 'react';
import { ModifierItem, ModifierItemProps } from './modifier-item';
import { Link } from '@sima-land/ui-nucleons/link';
import StatementSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/statement';
import classes from './modifiers-list.module.scss';
import classnames from 'classnames/bind';

export interface ModifierListProps {
  items?: ModifierItemProps[];
  currencyGrapheme?: string;
  sizesTableUrl?: string;
  wrapperProps: React.HTMLAttributes<HTMLDivElement>;
  itemsContainerProps: React.HTMLAttributes<HTMLDivElement>;
  onItemClick?: (item: ModifierItemProps) => void;
}

const cx = classnames.bind(classes);

/**
 * Компонент списка модификаторов.
 * @param props Свойства компонента.
 * @param props.items Массив данных модификаторов.
 * @param props.currencyGrapheme Графема валюты пользователя.
 * @param props.sizesTableUrl Url таблицы размеров.
 * @param props.wrapperProps Свойства блока-обертки.
 * @param props.itemsContainerProps Свойства блока-обертки списка модификаторов.
 * @param props.onItemClick Обработчик клика на модификатор.
 * @return Элемент.
 */
export const ModifiersList = ({
  items,
  currencyGrapheme,
  sizesTableUrl,
  wrapperProps,
  itemsContainerProps,
  onItemClick,
}: ModifierListProps) => (
  <div {...wrapperProps}>
    {sizesTableUrl && (
      <div className={cx('sizes-table-wrapper')}>
        <Link className={cx('sizes-table-link')} href={sizesTableUrl}>
          Таблица размеров
          <StatementSVG role='presentation' className={cx('sizes-table-icon')} />
        </Link>
      </div>
    )}

    {Array.isArray(items) && (
      <div {...itemsContainerProps}>
        {items.map((item, index) => (
          <ModifierItem
            key={index}
            {...item}
            onClick={() => onItemClick && onItemClick(item)}
            currencyGrapheme={currencyGrapheme}
          />
        ))}
      </div>
    )}
  </div>
);
