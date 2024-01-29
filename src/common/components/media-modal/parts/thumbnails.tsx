import { useRef, ReactNode, useEffect } from 'react';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { Range } from '../utils';
import { useMounted } from '../../../../common/hooks';
import { ScrollSection } from './scroll-section';
import { ThumbnailContext, ThumbnailSize } from './thumbnail';
import classNames from 'classnames/bind';
import styles from './thumbnails.module.scss';

export interface ThumbnailsProps {
  size?: ThumbnailSize;
  children?: ReactNode;
  targetIndex?: number;
}

const cx = classNames.bind(styles);

/**
 * Компонент превью медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function Thumbnails({ children, targetIndex, ...rest }: ThumbnailsProps) {
  const mounted = useMounted();
  const desktop = useBreakpoint('xs+');
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = scrollRef.current;

    if (!(mounted && parent && typeof targetIndex === 'number')) {
      return;
    }

    const target = desktop
      ? scrollRef.current.children[targetIndex]
      : contentRef.current?.children[targetIndex];

    if (!target) {
      return;
    }

    if (desktop) {
      parent.scrollTop += Range.getShiftDistance(
        Range.fromRectVertical(parent),
        Range.fromRectVertical(target),
      );
    } else {
      const parentRange = Range.fromRectHorizontal(parent);

      parent.scrollLeft += Range.getShiftDistance(
        {
          // ВАЖНО: учитываем отступы от края экрана по layout'у
          start: parentRange.start + 16,
          finish: parentRange.finish - 16,
        },
        Range.fromRectHorizontal(target),
      );
    }
  }, [mounted, targetIndex, desktop]);

  if (!mounted) {
    return null;
  }

  if (!desktop) {
    return (
      <ThumbnailContext.Provider value={{ size: 's', ...rest }}>
        <ScrollSection scrollRef={scrollRef} contentRef={contentRef}>
          {children}
        </ScrollSection>
      </ThumbnailContext.Provider>
    );
  }

  return (
    <ThumbnailContext.Provider value={{ size: 'l', ...rest }}>
      <div ref={scrollRef} className={cx('list-desktop')}>
        {children}
      </div>
    </ThumbnailContext.Provider>
  );
}
