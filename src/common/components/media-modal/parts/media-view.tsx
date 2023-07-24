import { useEffect, useRef, VideoHTMLAttributes } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { MediaData } from '../types';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import classNames from 'classnames';
import { AllRoundView } from './all-round-view';
import styles from './media-view.module.scss';
import { useImageStub } from '../../../hooks';
import { ImgStub } from '../../img-stub';

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
  let imageSrc: string | undefined = undefined;

  if (media?.type === 'image') {
    imageSrc = media.data.src;
  } else if (media?.type === 'video') {
    imageSrc = media.data.thumbnail;
  }

  const { failed, handleError } = useImageStub(imageSrc);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = media?.type === 'video' ? media.data.src : null;

  useEffect(() => {
    // ВАЖНО: при смене src у элемента source видео не меняется автоматически - перезапускаем явно
    if (videoSrc) {
      videoRef.current?.load();
    }
  }, [loading, videoSrc]);

  if (loading) {
    return <div className={classNames(styles.root, styles.loading)}></div>;
  }

  return (
    <div className={classNames(styles.root)}>
      {media?.type === 'image' && (
        <ImageOverlay className={styles.image}>
          {failed && <ImgStub className={styles.stub} />}
          {!failed && <img src={media.data.src} alt={media.data.alt || ''} onError={handleError} />}
        </ImageOverlay>
      )}

      {media?.type === 'video' && (
        <video autoPlay={false} controls controlsList='nodownload' {...videoProps} ref={videoRef}>
          <source src={media.data.src} />
        </video>
      )}

      {media?.type === '360' && <AllRoundView photos={media.data.photos} controls={desktop} />}
    </div>
  );
}
