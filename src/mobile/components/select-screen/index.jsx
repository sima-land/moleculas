import React from 'react';
import Types from 'prop-types';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import noop from 'lodash/noop';
import prop from 'lodash/fp/prop';
import Screen from '@dev-dep/ui-nucleons/screen';
import Text from '@dev-dep/ui-nucleons/text';
import { COLORS } from '@dev-dep/ui-nucleons/constants';
import { MobileLayout } from '@dev-dep/ui-nucleons/layout';
import CheckSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/check';
import styles from './select-screen.scss';

/**
 * Экран выбора опции.
 * @param {Object} props Свойства. Поддерживаются свойства Screen.
 * @param {Array} props.items Список опций.
 * @param {Function} [props.getItemName=prop('name')] Вернет имя опции.
 * @param {Function} [props.displayItem=displayOption] Выведет опцию.
 * @param {Function} [props.isItemSelected=noop] Определит выбрана ли опция.
 * @param {Function} [props.onItemClick] Сработает при клике на опцию.
 * @return {ReactElement} Экран выбора опции.
 */
const SelectScreen = ({
  items,
  getItemName = prop('name'),
  displayItem = displayOption,
  isItemSelected = noop,
  onItemClick,
  ...screenProps
}) => (
  <Screen withDivideHeader={false} {...screenProps}>
    <MobileLayout disabledOn={['xxs']}>
      <div className={styles.container}>
        {map(items, (item, index) => {
          const isSelected = Boolean(isItemSelected(item));

          return (
            <button
              key={index}
              className={styles.item}
              onClick={() => isFunction(onItemClick) && onItemClick(item)}
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
 * @param {{ name: string }} item Элемент списка.
 * @param {Object} options Опции вывода.
 * @param {Function} options.getItemName Вернет имя опции.
 * @return {ReactElement} Опция в текстовом виде.
 */
const displayOption = (item, { getItemName }) => (
  <Text
    size={16}
    lineHeight={24}
    color='gray87'
    children={getItemName(item)}
  />
);

SelectScreen.propTypes = {
  /**
   * Список опций.
   */
  items: Types.array,

  /**
   * Функция для получения имени опции.
   */
  getItemName: Types.func,

  /**
   * Функция для рендеринга опции.
   */
  displayItem: Types.func,

  /**
   * Функция для опредления выбрана ли опция.
   */
  isItemSelected: Types.func,

  /**
   * Сработает при клике на опцию.
   */
  onItemClick: Types.func,
};

export default SelectScreen;
