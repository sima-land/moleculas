import { CSSProperties, ReactNode, useRef, useState } from 'react';
import { defineSlots } from '@sima-land/ui-nucleons/helpers/define-slots';
import { Breakpoint, Layout } from '@sima-land/ui-nucleons/layout';
import { useClientRect, useVisualViewport } from './utils';
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
  const mobile: Breakpoint[] = ['mxs', 'ms', 'mm', 'ml'];

  const { header, main, aside, footer } = defineSlots(children, {
    header: MediaHeader,
    main: MediaMain,
    aside: MediaAside,
    footer: MediaFooter,
  });

  const [vh, setVh] = useState<number | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const mainRect = useClientRect(mainRef);

  useVisualViewport(viewport => {
    setVh(viewport.height / 100);
  });

  const mainStyle = {
    '--vh': `${vh}px` ?? '1vh',
    '--media-gallery-width': `${mainRect.width}px`,
    '--media-gallery-height': `${mainRect.height}px`,
    '--media-view-width': `var(--media-gallery-width)`,
    '--media-view-height': `var(--media-gallery-height)`,
  } as CSSProperties;

  return (
    <div className={cx('layout')}>
      {header && (
        <Layout disabledOn={mobile} className={cx('header')}>
          {header}
        </Layout>
      )}

      <Layout disabledOn={mobile} className={cx('body')}>
        {aside && <div className={cx('aside')}>{aside}</div>}
        <div ref={mainRef} className={cx('main')} style={mainStyle}>
          {main}
        </div>
      </Layout>

      {footer && (
        <Layout disabledOn={mobile} className={cx('footer')}>
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
