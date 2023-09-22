import { CSSProperties, useEffect, useRef, VideoHTMLAttributes } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { MediaData } from '../types';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import { AllRoundView } from './all-round-view';
import { useImageStub } from '../../../hooks';
import { ImgStub } from '../../img-stub';
import classNames from 'classnames/bind';
import styles from './media-view.module.scss';

export interface MediaViewProps {
  media?: MediaData;
  loading?: boolean;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
  style?: CSSProperties;
  className?: string;
}

const cx = classNames.bind(styles);

/**
 * Отображает медиа-контент - 360, видео или изображение.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaView({ media, loading, videoProps, style, className }: MediaViewProps) {
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
    return <div className={cx('root', 'loading')}></div>;
  }

  return (
    <div className={cx('root', className)} style={style}>
      {media?.type === 'image' && (
        <ImageOverlay className={cx('image')}>
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
