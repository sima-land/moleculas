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
  media: MediaData[]
  defaultMediaIndex?: number
  onMediaChange?: (data: MediaData, index: number) => void
  review?: {
    rating: number
    author: string
  }
  onGoToReview?: () => void
  onClose?: () => void
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
                  <Media {...media[currentIndex]} />

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

const Media = (props: MediaData) => (
  <div className={cx('media')}>
    {props.type === 'image' && (
      <ImageOverlay className={cx('media-image-wrap')}>
        <img src={props.data.src} alt={props.data.alt || ''} />
      </ImageOverlay>
    )}
    {props.type === 'video' && (
      <video autoPlay controls controlsList='nodownload'>
        <source src={props.data.src} />
      </video>
    )}
    {props.type === '360' && (
      <AllRoundView photos={props.data.photos} />
    )}
  </div>
);
