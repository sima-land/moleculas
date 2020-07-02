import React, { Fragment } from 'react';
import classnames from 'classnames/bind';
import Box from '@dev-dep/ui-nucleons/box';
import Text from '@dev-dep/ui-nucleons/text';
import ModifierSelect from '../modifier-select';
import styles from './item-modifier.scss';

const cx = classnames.bind(styles);

/**
 * Выбранный модификатор и их количество.
 * @param {Object} props Свойства компонента.
 * @param {'block'|'inline'} props.layout Вид отображения.
 * @param {string} props.name Название модификатора.
 * @param {number} props.count Количество значений модификатора.
 * @param {Function} props.onClick Обработчик клика.
 * @param {import('../modifier-select').ModifierSelectProps} props.modifierProps Свойства выбора модификатора.
 * @return {ReactElement} Выбранный модификатор и их количество.
 */
export const ItemModifier = ({
  layout = 'block',
  title,
  count,
  onClick,
  currentModifier,
}) => count > 1 && (
  <Box marginTop={4}>
    <Box
      marginBottom={2}
      display='flex'
      alignItems='baseline'
      justifyContent={layout === 'block' ? 'between' : 'start'}
    >
      <span
        className={cx('title')}
      >
        {title}
        {layout === 'inline' && Boolean(count) && (
          <Fragment> (всего {count})</Fragment>
        )}
      </span>
      {layout === 'block' && Boolean(count) && (
        <Text size={12} lineHeight={16} color='gray38'>Всего {count}</Text>
      )}
    </Box>
    <ModifierSelect
      className={cx(layout === 'block' && 'wide')}
      onClick={onClick}
      {...currentModifier}
    />
  </Box>
);

export default ItemModifier;
