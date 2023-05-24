import React, { createContext, ReactNode, useContext } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import PlaySVG from '@sima-land/ui-quarks/icons/24x24/Filled/play';
import AllRoundSVG from '../../../../desktop/components/gallery-modal/icons/360.svg';
import classNames from 'classnames/bind';
import styles from './thumbnails.module.scss';
import { useMounted } from '../utils';
import { ScrollSection } from './scroll-section';

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
export function Thumbnails({ children, ...rest }: ThumbnailsProps) {
  const mounted = useMounted();
  const desktop = useBreakpoint('xs+');

  if (!mounted) {
    return null;
  }

  if (!desktop) {
    return (
      <ThumbnailsContext.Provider value={{ size: 's', ...rest }}>
        <ScrollSection>{children}</ScrollSection>
      </ThumbnailsContext.Provider>
    );
  }

  return (
    <ThumbnailsContext.Provider value={{ size: 'l', ...rest }}>
      <div className={cx('list-desktop')}>{children}</div>
    </ThumbnailsContext.Provider>
  );
}

const ThumbnailsContext = createContext<Pick<ThumbnailsProps, 'size'>>({});
