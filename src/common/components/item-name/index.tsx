import React from 'react';
import classnames from 'classnames/bind';
import styles from './item-name.module.scss';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Text, Props as TextProps } from '@dev-dep/ui-nucleons/text';

export interface ItemNameProps {
  href?: string
  children?: React.ReactNode
  className?: string
  textProps?: TextProps
}

const cx = classnames.bind(styles);

/**
 * Компонент названия товара.
 * @param props Свойства компонента.
 * @param props.href Ссылка на товар.
 * @param props.children Название товара.
 * @param props.className Дополнительное название класса.
 * @return Элемент.
 */
export const ItemName = ({
  href,
  children,
  className,
  textProps,
}: ItemNameProps) => (
  <div className={cx('wrapper', className)}>
    <Link href={href}>
      <Text {...textProps}>
        <span className={cx('name')} children={children} />
      </Text>
    </Link>
  </div>
);

export default ItemName;
