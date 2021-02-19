import React from 'react';
import Box from '@dev-dep/ui-nucleons/box';
import Text from '@dev-dep/ui-nucleons/text';
import Link from '@dev-dep/ui-nucleons/link';
import TreeSVG from './tree-in-circle.svg';
import classnames from 'classnames/bind';
import styles from './garland-calculator-button.scss';
import Types from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Компонент плашки с кнопкой открытия гирлянды.
 * @param {Object} props Свойства компонента.
 * @param {Function} props.onClick Обработчик нажатия на кнопку рассчитать.
 * @return {ReactElement} Плашка с кнопкой открытия гирлянды.
 */
export const GarlandCalculatorButton = ({ onClick }) => (
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
          <Link onClick={onClick}>Рассчитать</Link>
        </Box>
      </Box>
      <Box flex='none'>
        <TreeSVG width={48} height={48} />
      </Box>
    </Box>
  </div>
);

GarlandCalculatorButton.propTypes = {
  /**
   * Обработчик нажатия на кнопку рассчитать.
   */
  onClick: Types.func.isRequired,
};

export default GarlandCalculatorButton;
