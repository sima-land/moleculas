import { ReactNode } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { TabsProps } from '@sima-land/ui-nucleons/tabs';
import { TextButtonProps } from '@sima-land/ui-nucleons/text-button';
import { defineSlots } from '@sima-land/ui-nucleons/helpers';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { useMounted } from '../../../../common/hooks';
import { ScrollSection } from './scroll-section';
import LeftSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandLeft';
import styles from './parts.module.scss';

export const Preset = {
  headerTabs: (userProps?: TabsProps): TabsProps => ({
    view: 'clean-underline',
    ...userProps,
  }),

  headerButton: (userProps?: TextButtonProps): TextButtonProps => ({
    size: 's',
    startIcon: LeftSVG,
    iconGutter: 4,
    className: styles['header-button'],
    children: 'Вернуться к основному товару',
    ...userProps,
  }),
} as const;

/**
 * Формирует layout для шапки модального окна медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function HeaderLayout({ children }: { children?: ReactNode }) {
  const mounted = useMounted();
  const desktop = useBreakpoint('xs+');

  const { tabs, button } = defineSlots(children, {
    tabs: HeaderLayoutTabs,
    button: HeaderLayoutButton,
  });

  if (!mounted) {
    return <div className={styles['header-layout']}></div>;
  }

  return (
    <div className={styles['header-layout']}>
      {!desktop && (
        <>
          {tabs && <ScrollSection>{tabs}</ScrollSection>}
          {button && <Layout>{button}</Layout>}
        </>
      )}

      {desktop && (
        <>
          {tabs}
          {button}
        </>
      )}
    </div>
  );
}

HeaderLayout.Tabs = HeaderLayoutTabs;
HeaderLayout.Button = HeaderLayoutButton;

/**
 * Слот вкладок для layout'а шапки модального окна медиа.
 * @param props Свойства.
 * @return Элемент.
 */
function HeaderLayoutTabs({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/**
 * Слот кнопки для layout'а шапки модального окна медиа.
 * @param props Свойства.
 * @return Элемент.
 */
function HeaderLayoutButton({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
