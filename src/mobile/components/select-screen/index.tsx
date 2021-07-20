import React from 'react';
import map from 'lodash/map';
import noop from 'lodash/noop';
import prop from 'lodash/fp/prop';
import { Screen } from '@sima-land/ui-nucleons/screen';
import { Text } from '@sima-land/ui-nucleons/text';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import CheckSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/check';
import styles from './select-screen.module.scss';

export interface SelectScreenProps {
  items?: any[]
  getItemName?: (item: any) => string
  displayItem?: (item: any, options: { getItemName: (i: any) => string, isSelected: boolean }) => React.ReactNode
  isItemSelected?: (item: any) => boolean | void
  onItemClick?: (item: any) => void
}

/**
 * Экран выбора опции.
 * @param props Свойства. Поддерживаются свойства Screen.
 * @param props.items Список опций.
 * @param props.getItemName Вернет имя опции.
 * @param props.displayItem Выведет опцию.
 * @param props.isItemSelected Определит выбрана ли опция.
 * @param props.onItemClick Сработает при клике на опцию.
 * @return Экран выбора опции.
 */
const SelectScreen = ({
  items,
  getItemName = prop('name'),
  displayItem = displayOption,
  isItemSelected = noop,
  onItemClick,
  ...screenProps
}: SelectScreenProps) => (
  <Screen withDivideHeader={false} {...screenProps}>
    <MobileLayout disabledOn={['mxs', 'ms']}>
      <div className={styles.container}>
        {map(items, (item, index) => {
          const isSelected = Boolean(isItemSelected(item));

          return (
            <button
              key={index}
              className={styles.item}
              onClick={() => onItemClick && onItemClick(item)}
            >
              {displayItem(item, { getItemName, isSelected })}
              {isSelected && (
                <CheckSVG fill={COLORS.get('gray87')} />
              )}
            </button>
          );
        })}
      </div>
    </MobileLayout>
  </Screen>
);

/**
 * Выводит опцию в текстовом виде.
 * @param item Элемент списка.
 * @param options Опции вывода.
 * @param options.getItemName Вернет имя опции.
 * @return Опция в текстовом виде.
 */
const displayOption = (item: any, {
  getItemName,
}: any) => (
  <Text
    size={16}
    lineHeight={24}
    color='gray87'
    children={getItemName(item)}
  />
);

export default SelectScreen;
