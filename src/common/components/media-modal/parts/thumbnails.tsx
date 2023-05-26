import React, { useRef, createContext, ReactNode, useContext, useEffect } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import PlaySVG from '@sima-land/ui-quarks/icons/24x24/Filled/play';
import AllRoundSVG from '../../../../desktop/components/gallery-modal/icons/360.svg';
import { Range, useMounted } from '../utils';
import { ScrollSection } from './scroll-section';
import classNames from 'classnames/bind';
import styles from './thumbnails.module.scss';

export interface ThumbnailProps {
  size?: 's' | 'l';
  type: 'icon-360' | 'icon-video' | 'preview-image' | 'preview-video';
  src?: string;
  alt?: string;
  checked?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  loading?: boolean;
}

export interface ThumbnailsProps {
  size?: 's' | 'l';
  children?: ReactNode;
  targetIndex?: number;
}

const cx = classNames.bind(styles);

/**
 * Компонент превью медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function Thumbnail({
  size: sizeFromProps,
  type,
  src,
  alt,
  checked,
  onClick,
  className,
  loading,
}: ThumbnailProps) {
  const { size: sizeFromContext } = useContext(ThumbnailsContext);
  const size = sizeFromProps ?? sizeFromContext ?? 'l';

  const rootClassName = cx(
    'thumbnail',
    `size-${size}`,
    type?.startsWith('icon-') && 'iconic',
    checked && 'checked',
    loading && 'loading',
    className,
  );

  if (loading) {
    return <button className={rootClassName} onClick={onClick} data-testid='thumbnail' />;
  }

  return (
    <button className={rootClassName} onClick={onClick} data-testid='thumbnail'>
      {type?.startsWith('preview-') && (
        <ImageOverlay className={cx('image-overlay')}>
          <img src={src} alt={alt} />
        </ImageOverlay>
      )}

      {type === 'preview-video' && <span className={cx('play')}></span>}

      {type === 'icon-360' && <AllRoundSVG fill='currentColor' />}

      {type === 'icon-video' && <PlaySVG width={32} height={32} fill='currentColor' />}
    </button>
  );
}

/**
 * Компонент превью медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function Thumbnails({ children, targetIndex, ...rest }: ThumbnailsProps) {
  const mounted = useMounted();
  const desktop = useBreakpoint('xs+');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = ref.current;

    if (!(mounted && parent && typeof targetIndex === 'number')) {
      return;
    }

    const target = parent?.children[targetIndex];

    if (!target) {
      return;
    }

    if (desktop) {
      parent.scrollTop += Range.getShiftDistance(
        Range.fromRectVertical(parent),
        Range.fromRectVertical(target),
      );
    } else {
      const rect = parent.getBoundingClientRect();
      const style = getComputedStyle(parent);

      parent.scrollLeft += Range.getShiftDistance(
        {
          start: rect.left + parseFloat(style.paddingLeft),
          finish: rect.right - parseFloat(style.paddingRight),
        },
        Range.fromRectHorizontal(target),
      );
    }
  }, [mounted, targetIndex]);

  if (!mounted) {
    return null;
  }

  if (!desktop) {
    return (
      <ThumbnailsContext.Provider value={{ size: 's', ...rest }}>
        <ScrollSection innerRef={ref}>{children}</ScrollSection>
      </ThumbnailsContext.Provider>
    );
  }

  return (
    <ThumbnailsContext.Provider value={{ size: 'l', ...rest }}>
      <div ref={ref} className={cx('list-desktop')}>
        {children}
      </div>
    </ThumbnailsContext.Provider>
  );
}

const ThumbnailsContext = createContext<Pick<ThumbnailsProps, 'size'>>({});
