import React, { Children, isValidElement } from 'react';
import { LayoutProps, MobileLayout } from '@sima-land/ui-nucleons/layout';
import CheckSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Check';
import cn from 'classnames';
import styles from './select-screen.module.scss';

export type OptionSize = 's' | 'm' | 'l' | 'xl';

export interface SelectScreenOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: OptionSize;
  selected?: boolean;
  withSelectedIcon?: boolean;
}

/**
 * Отступы для вывода опций в компоненте Screen.
 * @param props Свойства.
 * @return Элемент.
 */
export const SelectScreenLayout = ({ children, ...props }: LayoutProps) => (
  <MobileLayout {...props} disabledOn={['mxs', 'ms']}>
    <div className={styles.container}>
      {Children.toArray(children).filter(x => isValidElement(x) && x.type === SelectScreenOption)}
    </div>
  </MobileLayout>
);

/**
 * Опция.
 * @param props Свойства.
 * @return Элемент.
 */
export const SelectScreenOption = ({
  children,
  className,
  selected,
  withSelectedIcon = selected,
  size = 'm',
  ...props
}: SelectScreenOptionProps) => (
  <button
    {...props}
    type='button'
    className={cn(styles.item, className, styles[`size-${size}`])}
    data-testid='select-screen:option'
  >
    {children}
    {selected && withSelectedIcon && <CheckSVG role='presentation' className={styles.icon} />}
  </button>
);
