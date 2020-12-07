import React from 'react';
import classnames from 'classnames/bind';
import styles from './item-name.scss';
import Link from '@dev-dep/ui-nucleons/link';
import Text from '@dev-dep/ui-nucleons/text';

const cx = classnames.bind(styles);

/**
 * Компонент названия товара.
 * @param {Object} props Свойства компонента.
 * @param {string} props.href Ссылка на товар.
 * @param {string} props.children Название товара.
 * @param {string} [props.className] Дополнительное название класса.
 * @return {ReactElement} Компонент названия товара.
 */
export const ItemName = ({
  href,
  children,
  className,
  textProps,
}) => (
  <div className={cx('wrapper', className)}>
    <Link href={href}>
      <Text {...textProps}>
        <span className={cx('name')} children={children} />
      </Text>
    </Link>
  </div>
);

export default ItemName;
