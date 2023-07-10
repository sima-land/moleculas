import { ButtonHTMLAttributes, Children, isValidElement } from 'react';
import { LayoutProps, MobileLayout } from '@sima-land/ui-nucleons/layout';
import CheckSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Check';
import cn from 'classnames';
import styles from './select-screen.module.scss';

export type OptionSize = 's' | 'm' | 'l' | 'xl';

export interface SelectScreenOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: OptionSize;
  selected?: boolean;
  withSelectedIcon?: boolean;
}

/**
 * Отступы для вывода опций в компоненте Screen.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectScreenLayout({ children, ...props }: LayoutProps) {
  return (
    <MobileLayout {...props} disabledOn={['mxs', 'ms']}>
      <div className={styles.container}>
        {Children.toArray(children).filter(x => isValidElement(x) && x.type === SelectScreenOption)}
      </div>
    </MobileLayout>
  );
}

/**
 * Опция.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectScreenOption({
  children,
  className,
  selected,
  withSelectedIcon = selected,
  size = 'm',
  ...props
}: SelectScreenOptionProps) {
  return (
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
}
