import { Layout } from '@sima-land/ui-nucleons/layout';
import { CSSProperties, ReactNode, useRef } from 'react';
import { useClientRect } from '../utils';
import classNames from 'classnames/bind';
import styles from './media-area.m.scss';

const cx = classNames.bind(styles);

/**
 * Формирует ограничения высоты и ширины для вывода меда контента по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaArea({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useClientRect(ref);

  const style = rect.ready
    ? ({
        '--media-gallery-width': `${rect.width}px`,
        '--media-gallery-height': `${rect.height}px`,
        '--media-view-width': `var(--media-gallery-width)`,
        '--media-view-height': `var(--media-gallery-height)`,
      } as CSSProperties)
    : undefined;

  return (
    <Layout
      rootRef={ref}
      disabledOn={['mxs', 'ms', 'xs', 's', 'm', 'l', 'xl']}
      className={cx('root')}
      style={style}
    >
      {children}
    </Layout>
  );
}

/**
 * Центральная часть зоны для медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaAreaMain({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useClientRect(ref);

  const style = rect.ready
    ? ({
        '--media-gallery-width': `${rect.width}px`,
        '--media-gallery-height': `${rect.height}px`,
        '--media-view-width': `var(--media-gallery-width)`,
        '--media-view-height': `var(--media-gallery-height)`,
      } as CSSProperties)
    : undefined;

  return (
    <div ref={ref} className={cx('main')} style={style}>
      {children}
    </div>
  );
}

/**
 * Боковая часть зоны для медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaAreaAside({ children }: { children?: ReactNode }) {
  return <div className={cx('aside')}>{children}</div>;
}
