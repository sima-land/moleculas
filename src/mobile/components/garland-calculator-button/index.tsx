import React from 'react';
import { Box } from '@sima-land/ui-nucleons/box';
import { Text } from '@sima-land/ui-nucleons/text';
import { Link } from '@sima-land/ui-nucleons/link';
import TreeSVG from './tree-in-circle.svg';
import classnames from 'classnames/bind';
import styles from './garland-calculator-button.module.scss';

const cx = classnames.bind(styles);

export interface GarlandCalculatorButtonProps {
  /** Обработчик нажатия на кнопку рассчитать. */
  onClick?: React.MouseEventHandler;

  /** CSS-класс. */
  className?: string;
}

/**
 * Компонент плашки с кнопкой открытия гирлянды.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const GarlandCalculatorButton = ({ className, onClick }: GarlandCalculatorButtonProps) => (
  <div className={cx('wrapper', className)}>
    <Box padding={6} display='flex' justifyContent='between'>
      <Box paddingRight={5}>
        <Text size={14} lineHeight={20} weight={400}>
          Сколько метров гирлянды покупать? Поможем рассчитать оптимальную длину
        </Text>
        <Box marginTop={3}>
          <Link onClick={onClick}>Рассчитать</Link>
        </Box>
      </Box>
      <Box flex='none'>
        <TreeSVG width={48} height={48} />
      </Box>
    </Box>
  </div>
);

export default GarlandCalculatorButton;
