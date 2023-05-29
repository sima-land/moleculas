import React, { VideoHTMLAttributes } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { AllRoundView } from '../../../../desktop/components/gallery-modal/components/all-round-view';
import { MediaData } from '../types';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import styles from './media-view.module.scss';
import classNames from 'classnames';

export interface MediaViewProps {
  media?: MediaData;
  loading?: boolean;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
}

/**
 * Отображает медиа-контент - 360, видео или изображение.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaView({ media, loading, videoProps }: MediaViewProps) {
  const desktop = useBreakpoint('xs+');

  if (loading) {
    return <div className={classNames(styles.root, styles.loading)}></div>;
  }

  return (
    <div className={classNames(styles.root)}>
      {media?.type === 'image' && (
        <ImageOverlay className={styles.image}>
          <img src={media.data.src} alt={media.data.alt || ''} />
        </ImageOverlay>
      )}

      {media?.type === 'video' && (
        <video autoPlay={false} controls controlsList='nodownload' {...videoProps}>
          <source src={media.data.src} />
        </video>
      )}

      {media?.type === '360' && <AllRoundView photos={media.data.photos} controls={desktop} />}
    </div>
  );
}
