import React, { Children, isValidElement } from 'react';
import { map, noop } from 'lodash';
import prop from 'lodash/fp/prop';
import { Screen } from '@sima-land/ui-nucleons/screen';
import { Text } from '@sima-land/ui-nucleons/text';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { LayoutProps, MobileLayout } from '@sima-land/ui-nucleons/layout';
import CheckSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/check';
import cn from 'classnames';
import styles from './select-screen.module.scss';

export interface SelectScreenProps {
  items?: any[];
  getItemName?: (item: any) => string;
  displayItem?: (
    item: any,
    options: { getItemName: (i: any) => string; isSelected: boolean },
  ) => React.ReactNode;
  isItemSelected?: (item: any) => boolean | void;
  onItemClick?: (item: any) => void;
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  onClose?: () => void;
}

/**
 * Экран выбора опции.
 * @deprecated Вместо SelectScreen используйте SelectScreenLayout и SelectScreenOption вместе с Screen.
 * @param props Свойства. Поддерживаются свойства Screen.
 * @param props.items Список опций.
 * @param props.getItemName Вернет имя опции.
 * @param props.displayItem Выведет опцию.
 * @param props.isItemSelected Определит выбрана ли опция.
 * @param props.onItemClick Сработает при клике на опцию.
 * @return Экран выбора опции.
 */
export const SelectScreen = ({
  items,
  getItemName = prop('name'),
  displayItem = displayOption,
  isItemSelected = noop,
  onItemClick,
  title,
  subtitle,
  onBack,
  onClose,
}: SelectScreenProps) => (
  <Screen>
    <Screen.Header title={title} subtitle={subtitle} onBack={onBack} onClose={onClose} />

    <Screen.Body>
      <SelectScreenLayout style={{ padding: '16px 0' }}>
        {map(items, (item, index) => {
          const isSelected = Boolean(isItemSelected(item));

          return (
            <SelectScreenOption key={index} onClick={() => onItemClick && onItemClick(item)}>
              {displayItem(item, { getItemName, isSelected })}
              {isSelected && <CheckSVG fill={COLORS.get('gray87')} />}
            </SelectScreenOption>
          );
        })}
      </SelectScreenLayout>
    </Screen.Body>
  </Screen>
);

export const SelectScreenLayout = ({ children, ...props }: LayoutProps) => (
  <MobileLayout {...props} disabledOn={['mxs', 'ms']}>
    <div className={styles.container}>
      {Children.toArray(children).filter(x => isValidElement(x) && x.type === SelectScreenOption)}
    </div>
  </MobileLayout>
);

export const SelectScreenOption = ({
  children,
  className,
  selected,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean }) => (
  <button
    {...props}
    type='button'
    className={cn(styles.item, className)}
    data-testid='select-screen:option'
  >
    {children}
    {selected && <CheckSVG fill={COLORS.get('gray87')} />}
  </button>
);

/**
 * Выводит опцию в текстовом виде.
 * @deprecated
 * @param item Элемент списка.
 * @param options Опции вывода.
 * @param options.getItemName Вернет имя опции.
 * @return Опция в текстовом виде.
 */
const displayOption = (item: any, { getItemName }: any) => (
  <Text size={16} lineHeight={24} color='gray87' children={getItemName(item)} />
);
