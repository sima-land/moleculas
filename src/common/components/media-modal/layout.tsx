import React, { ReactNode } from 'react';
import { defineSlots } from '@sima-land/ui-nucleons/helpers/define-slots';
import { Breakpoint, Layout } from '@sima-land/ui-nucleons/layout';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';

interface ContainerProps {
  /** Содержимое. */
  children?: ReactNode;
}

const cx = classNames.bind(styles);

/**
 * Формирует layout для модального окна медиа товара.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaLayout({ children }: ContainerProps) {
  const { header, main, aside, footer } = defineSlots(children, {
    header: MediaHeader,
    main: MediaMain,
    aside: MediaAside,
    footer: MediaFooter,
  });

  const mobile: Breakpoint[] = ['mxs', 'ms', 'mm', 'ml'];

  return (
    <div className={styles.layout}>
      {header && (
        <Layout disabledOn={mobile} className={styles.header}>
          {header}
        </Layout>
      )}

      <Layout disabledOn={mobile} className={styles.body}>
        {aside && <div className={styles.aside}>{aside}</div>}
        <div className={styles.main}>{main}</div>
      </Layout>

      {footer && (
        <Layout disabledOn={mobile} className={styles.footer}>
          <div className={cx('footer-inner', aside && 'with-aside')}>{footer}</div>
        </Layout>
      )}
    </div>
  );
}

/**
 * Слот шапки MediaLayout.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaHeader({ children }: ContainerProps) {
  return <>{children}</>;
}

/**
 * Слот основного контента MediaLayout.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaMain({ children }: ContainerProps) {
  return <>{children}</>;
}

/**
 * Слот дополнительного контента MediaLayout.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaAside({ children }: ContainerProps) {
  return <>{children}</>;
}

/**
 * Слот футера MediaLayout.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaFooter({ children }: ContainerProps) {
  return <>{children}</>;
}
