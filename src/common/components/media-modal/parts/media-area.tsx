import { Layout } from '@sima-land/ui-nucleons/layout';
import { ReactNode, useRef } from 'react';
import { useClientRect } from '../utils';
import classNames from 'classnames/bind';
import styles from './media-area.module.scss';

const cx = classNames.bind(styles);

/**
 * Формирует ограничения высоты и ширины для вывода меда контента по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaArea({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useClientRect(ref);

  return (
    <Layout
      rootRef={ref}
      disabledOn={['mxs', 'ms', 'xs', 's', 'm', 'l', 'xl']}
      className={cx('root')}
      style={
        rect.ready
          ? ({
              '--media-gallery-width': `${rect.width}px`,
              '--media-gallery-height': `${rect.height}px`,
              '--media-view-width': `var(--media-gallery-width)`,
              '--media-view-height': `var(--media-gallery-height)`,
            } as any)
          : undefined
      }
    >
      {children}
    </Layout>
  );
}
