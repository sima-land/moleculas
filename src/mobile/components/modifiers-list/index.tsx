import { ModifierItem, ModifierItemProps } from './modifier-item';
import { Link } from '@sima-land/ui-nucleons/link';
import StatementSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Statement';
import classes from './modifiers-list.module.scss';
import classnames from 'classnames/bind';
import { HTMLAttributes } from 'react';

export interface ModifierListProps {
  /** Массив данных модификаторов. */
  items?: ModifierItemProps[];

  /** Графема валюты пользователя. */
  currencyGrapheme?: string;

  /** Url таблицы размеров. */
  sizesTableUrl?: string;

  /** Свойства блока-обертки. */
  wrapperProps?: HTMLAttributes<HTMLDivElement>;

  /** Свойства блока-обертки списка модификаторов. */
  itemsContainerProps?: HTMLAttributes<HTMLDivElement>;

  /** Обработчик клика на модификатор. */
  onItemClick?: (item: ModifierItemProps) => void;
}

const cx = classnames.bind(classes);

/**
 * Компонент списка модификаторов.
 * @param props Свойства.
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
