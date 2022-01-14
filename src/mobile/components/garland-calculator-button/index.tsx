import React from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Plate } from '@sima-land/ui-nucleons/plate';
import SpruceSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/spruce';
import cn from 'classnames';
import styles from './garland-calculator-button.module.scss';

export interface GarlandCalculatorButtonProps {
  /** Обработчик клика. */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;

  /** CSS-класс. */
  className?: string;
}

/**
 * Компонент плашки с кнопкой открытия гирлянды.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const GarlandCalculatorButton = ({ className, onClick }: GarlandCalculatorButtonProps) => (
  <Plate rounds='m' shadow='z3' className={cn(styles.root, className)}>
    <div className={styles.main}>
      <div className={styles.text}>
        Сколько метров гирлянды покупать? Поможем рассчитать оптимальную длину
      </div>
      <Link pseudo onClick={onClick}>
        Рассчитать
      </Link>
    </div>
    <div className={styles.icon}>
      <SpruceSVG className={styles.svg} />
    </div>
  </Plate>
);
