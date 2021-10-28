import React, { useState, useRef, useEffect } from 'react';
import { MediaData } from '../types';
import { DesktopLayout } from '@sima-land/ui-nucleons/layout';
import { scrollToChild } from '@sima-land/ui-nucleons/helpers/scroll-to-child';
import { Modal, ModalProps } from '@sima-land/ui-nucleons/modal';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { AllRoundView } from './all-round-view';
import { ReviewInfo } from './review-info';
import { ImageOverlay } from './image-overlay';
import { Thumbnail } from './thumbnail';
import { useIdentityRef } from '@sima-land/ui-nucleons/hooks/identity';
import { useRectFit } from '../utils';
import classNames from 'classnames/bind';
import styles from './gallery-modal.module.scss';

export interface GalleryModalProps extends Pick<ModalProps, 'withScrollDisable' | 'scrollDisableOptions'> {

  /** Список медиа. */
  media: MediaData[]

  /** Индекс начального выбранного элемента из списка медиа. */
  defaultMediaIndex?: number

  /** Будет вызвана при переключении элемента из списка медиа. */
  onMediaChange?: (data: MediaData, index: number) => void

  /** Данные отзыва, выводятся внизу окна. */
  review?: {
    rating: number
    author: string
  }

  /** Будет вызвана при попытке перейти к отзыву. */
  onGoToReview?: () => void

  /** Будет вызвана при закрытии. */
  onClose?: () => void

  /** Будет вызвана при событиях проигрывания видео. */
  onVideoEvent?: (event: React.SyntheticEvent<HTMLVideoElement>) => void
}

interface InnerStyles extends React.CSSProperties {
  '--area-height'?: string
  '--all-round-view-size'?: string
}

const cx = classNames.bind(styles);

export const GalleryModal = ({
  media,
  defaultMediaIndex = 0,
  review,
  onClose,
  onGoToReview,
  onMediaChange,
  withScrollDisable,
  scrollDisableOptions,
  onVideoEvent,
}: GalleryModalProps) => {
  const [currentIndex, setCurrent] = useState<number>(defaultMediaIndex);

  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const footerGutter = 40;
  const footerHeight = 20;
  const correction = review ? footerGutter + footerHeight : 0;
  const size = useRectFit(areaRef, { correction });

  const innerStyles: InnerStyles = {
    ...size !== null && {
      '--area-height': `${size + correction}px`,
      '--all-round-view-size': `${size}px`,
    },
  };

  const handlerRef = useIdentityRef(onMediaChange);

  useEffect(() => {
    handlerRef.current?.(media[currentIndex], currentIndex);

    thumbnailsRef.current && scrollToChild(
      thumbnailsRef.current,
      thumbnailsRef.current.children[currentIndex] as HTMLElement
    );
  }, [currentIndex]);

  return (
    <Modal
      size='fullscreen'
      onClose={onClose}
      {...{ withScrollDisable, scrollDisableOptions }}
    >
      <Modal.Header onClose={onClose} />
      <Modal.Body>
        <DesktopLayout className={cx('root')} style={innerStyles}>
          {size !== null && media.length > 1 && (
            <div className={cx('thumbnails')} ref={thumbnailsRef}>
              {media.map((item, index) => (
                <Thumbnail
                  key={index}
                  className={cx('thumbnail')}
                  type={item.type}
                  checked={index === currentIndex}
                  onClick={() => setCurrent(index)}
                  {...item.type === 'image' && {
                    src: item.data.thumbnailSrc,
                    alt: item.data.alt || '',
                  }}
                />
              ))}
            </div>
          )}

          <div ref={areaRef} className={cx('area')}>
            {size !== null && (
              <div className={cx('inner')} style={{ width: `${size}px` }}>
                <div className={cx('square')}>
                  <Media {...media[currentIndex]} onVideoEvent={onVideoEvent} />

                  {media.length > 1 && (
                    <>
                      <ArrowButton
                        direction='left'
                        className={cx('button', 'left')}
                        onClick={() => setCurrent((media.length + currentIndex - 1) % media.length)}
                        data-testid='gallery-modal:prev-media-button'
                      />
                      <ArrowButton
                        direction='right'
                        className={cx('button', 'right')}
                        onClick={() => setCurrent((currentIndex + 1) % media.length)}
                        data-testid='gallery-modal:next-media-button'
                      />
                    </>
                  )}
                </div>

                {review && (
                  <ReviewInfo
                    rating={review.rating}
                    author={review.author}
                    onGoToReview={onGoToReview}
                    className={cx('footer')}
                  />
                )}
              </div>
            )}
          </div>
        </DesktopLayout>
      </Modal.Body>
    </Modal>
  );
};

const Media = ({ onVideoEvent, ...media }: MediaData & {
  onVideoEvent?: (event: React.SyntheticEvent<HTMLVideoElement>) => void
}) => (
  <div className={cx('media')}>
    {media.type === 'image' && (
      <ImageOverlay className={cx('media-image-wrap')}>
        <img src={media.data.src} alt={media.data.alt || ''} />
      </ImageOverlay>
    )}
    {media.type === 'video' && (
      <video
        autoPlay
        controls
        controlsList='nodownload'
        onPlay={onVideoEvent}
        onPause={onVideoEvent}
        onEnded={onVideoEvent}
      >
        <source src={media.data.src} />
      </video>
    )}
    {media.type === '360' && (
      <AllRoundView photos={media.data.photos} />
    )}
  </div>
);
