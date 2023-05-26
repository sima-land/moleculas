import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import { useClientRect } from '../utils';
import { MediaData } from '../types';
import { MediaView } from './media-view';
import styles from './media-content.module.scss';

export interface MediaContentProps {
  items: MediaData[];
  targetIndex?: number;
  onChangeTargetIndex?: (newIndex: number) => void;
}

/**
 * Отображает медиа-контент в контексте модального окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaContent(props: MediaContentProps) {
  const desktop = useBreakpoint('xs+');

  return (
    <div className={styles.root}>
      {desktop ? <MediaSlider {...props} /> : <MediaCarousel {...props} />}
    </div>
  );
}

/**
 * Отображает медиа-контент в виде карусели.
 * @param props Свойства.
 * @return Элемент.
 */
function MediaCarousel({ items, targetIndex, onChangeTargetIndex }: MediaContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const area = useClientRect(ref);

  return (
    <div ref={ref} className={styles.carousel}>
      {area.ready && (
        <Carousel
          infinite={false}
          targetIndex={targetIndex}
          onChangeTargetIndex={onChangeTargetIndex}
          draggable
          containerProps={{
            className: styles.carousel,
            style: {
              '--item-width': `${area.width}px`,
              '--item-height': `${area.height}px`,
            } as any,
          }}
          withControls={false}
          items={items}
          renderItem={data => (
            <div className={styles['carousel-item']}>
              <FitSquare {...area}>
                <MediaView media={data} />
              </FitSquare>
            </div>
          )}
        />
      )}
    </div>
  );
}

/**
 * Отображает медиа-контент в виде слайдера.
 * @param props Свойства.
 * @return Элемент.
 */
function MediaSlider({ items, targetIndex, onChangeTargetIndex }: MediaContentProps) {
  const [position, setPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const area = useClientRect(ref);
  const total = items.length;
  const controls = total > 1;
  const correction = controls ? -(2 * (56 + 24)) : 0;

  useEffect(() => {
    if (typeof targetIndex === 'number') {
      setPosition(targetIndex);
    }
  }, [targetIndex]);

  return (
    <div ref={ref} className={styles.slider}>
      {area.ready && (
        <>
          {controls && (
            <ArrowButton
              direction='left'
              onClick={() => {
                const next = position - 1 >= 0 ? position - 1 : total - 1;
                setPosition(next);
                onChangeTargetIndex?.(next);
              }}
            />
          )}

          <FitSquare width={area.width + correction} height={area.height}>
            <MediaView media={items[position]} />
          </FitSquare>

          {controls && (
            <ArrowButton
              direction='right'
              onClick={() => {
                const next = (position + 1) % total;
                setPosition(next);
                onChangeTargetIndex?.(next);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

/**
 * Вписывает квадрат в заданную прямоугольную область.
 * @param props Свойства.
 * @return Элемент.
 */
function FitSquare({ children, width, height }: any) {
  const size = useMemo(() => Math.min(width, height), [width, height]);

  return (
    <div className={styles.square} style={{ '--square-size': `${size}px` } as any}>
      {children}
    </div>
  );
}
