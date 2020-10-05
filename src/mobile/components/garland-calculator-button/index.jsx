import React from 'react';
import Box from '@dev-dep/ui-nucleons/box';
import Text from '@dev-dep/ui-nucleons/text';
import Link from '@dev-dep/ui-nucleons/link';
import Icon from '@dev-dep/ui-nucleons/icon';
import TreeIcon from './tree-in-circle.svg';
import classnames from 'classnames/bind';
import styles from './garland-calculator-button.scss';

const cx = classnames.bind(styles);

/**
 * Компонент плашки с кнопкой открытия гирлянды.
 * @return {ReactElement} Плашка с кнопкой открытия гирлянды.
 */
export const GarlandCalculatorButton = () => (
  <div className={cx('wrapper')}>
    <Box padding={6} display='flex' justifyContent='between' marginTop={6}>
      <Box paddingRight={5}>
        <Text size={14} lineHeight={20} weight={400}>
          Сколько метров
          гирлянды покупать?
          Поможем рассчитать
          оптимальную длину
        </Text>
        <Box marginTop={3}>
          <Link>Рассчитать</Link>
        </Box>
      </Box>
      <Box flex='none'>
        <Icon icon={TreeIcon} size={48} />
      </Box>
    </Box>
  </div>
);

export default GarlandCalculatorButton;
