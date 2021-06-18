import React from 'react';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import ModifierSelect from '../modifier-select';
import classnames from 'classnames/bind';
import styles from './item-modifier.module.scss';

export interface ItemModifierProps {
  layout?: 'block' | 'inline'
  id?: any // @todo определить тип
  list?: any // @todo определить тип
  title?: string
  count?: number
  onClick?: React.MouseEventHandler
  withTitle?: boolean
}

const cx = classnames.bind(styles);

/**
 * Выбранный модификатор и их количество.
 * @param {Object} props Свойства компонента.
 * @param {'block'|'inline'} props.layout Вид отображения.
 * @param {string} props.title Название модификатора.
 * @param {number} props.count Количество значений модификатора.
 * @param {Function} props.onClick Обработчик клика.
 * @param {boolean} props.withTitle Признак показа заголовка.
 * @return {ReactElement} Выбранный модификатор и их количество.
 */
export const ItemModifier = ({
  layout = 'block',
  id: currentId,
  list,
  title,
  count,
  onClick,
  withTitle,
}: ItemModifierProps) => Number(count || 0) > 1 && (
  <Box marginTop={4} marginBottom={4}>
    {withTitle && (
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
            <> (всего {count})</>
          )}
        </span>
        {layout === 'block' && Boolean(count) && (
          <Text size={12} lineHeight={16} color='gray38'>Всего {count}</Text>
        )}
      </Box>
    )}
    <ModifierSelect
      className={cx(layout === 'block' ? 'block' : 'wide')}
      onClick={onClick}
      {...Object.assign({}, list && list.find(({
        id,
      }: any) => id === currentId))}
    />
  </Box>
);

export default ItemModifier;
