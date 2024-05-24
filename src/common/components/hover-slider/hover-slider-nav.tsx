import type { HoverSliderNavProps } from './types';
import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './hover-slider-nav.m.scss';

/**
 * Навигация карусели. Отображает общее количество и текущий элемент.
 * @param props Свойства.
 * @return Элемент.
 */
export function HoverSliderNav({ current, total, className, ...restProps }: HoverSliderNavProps) {
  const indices = useMemo(() => [...Array(total).keys()], [total]);

  return (
    <div {...restProps} className={classNames(styles.nav, className)}>
      {indices.map(index => (
        <div
          key={index}
          className={classNames(styles['nav-item'], index === current && styles['nav-item-active'])}
        />
      ))}
    </div>
  );
}
