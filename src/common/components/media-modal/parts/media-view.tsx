import React from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { AllRoundView } from '../../../../desktop/components/gallery-modal/components/all-round-view';
import { MediaData } from '../types';
import styles from './media-view.module.scss';

/**
 * Отображает медиа-контент - 360, видео или изображение.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaView({ media }: { media: MediaData }) {
  return (
    <div className={styles.root}>
      {media.type === 'image' && (
        <ImageOverlay className={styles.image}>
          <img src={media.data.src} alt={media.data.alt || ''} />
        </ImageOverlay>
      )}

      {media.type === 'video' && (
        <video autoPlay={false} controls controlsList='nodownload'>
          <source src={media.data.src} />
        </video>
      )}

      {media.type === '360' && <AllRoundView photos={media.data.photos} />}
    </div>
  );
}
