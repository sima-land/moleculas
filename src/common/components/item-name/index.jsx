import React from 'react';
import classnames from 'classnames/bind';
import styles from './item-name.scss';
import Link from '@dev-dep/ui-nucleons/link';

const cx = classnames.bind(styles);

/**
 * Компонент названия товара.
 * @param {Object} props Свойства компонента.
 * @param {string} props.href Ссылка на товар.
 * @param {string} props.name Название товара.
 * @param {string} [props.className] Дополнительное название класса.
 * @return {ReactElement} Компонент названия товара.
 */
export const ItemName = ({
  href,
  name,
  className,
}) => (
  <div className={cx('wrapper', className)}>
    <Link href={href} color='black'>
      <span className={cx('name')} children={name} />
    </Link>
  </div>
);

export default ItemName;
