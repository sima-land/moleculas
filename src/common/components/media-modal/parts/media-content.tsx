import React, {
  Children,
  CSSProperties,
  HTMLAttributes,
  isValidElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import { useClientRect } from '../utils';
import { MediaData } from '../types';
import { MediaView, MediaViewProps } from './media-view';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import styles from './media-content.module.scss';

export interface MediaContentProps {
  children?: ReactNode;
  targetIndex?: number;
  onChangeTargetIndex?: (newIndex: number) => void;
  loading?: boolean;

  /** @deprecated */
  items?: MediaData[];
}

export interface FitSquareProps {
  children?: ReactNode;
  width: number;
  height: number;
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
function MediaCarousel({
  items: itemsProp,
  children,
  targetIndex,
  onChangeTargetIndex,
  loading,
}: MediaContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const area = useClientRect(ref);
  const items = toViewPropsList(itemsProp, children);

  return (
    <div ref={ref} className={styles.carousel}>
      {area.ready && (
        <Carousel
          infinite={false}
          targetIndex={targetIndex}
          onChangeTargetIndex={onChangeTargetIndex}
          draggable
          containerProps={
            {
              className: styles.carousel,

              // в случае если будет работать некорректно - дать возможность задавать пропсы для Carousel
              [BSL_IGNORE_ATTR]: true,
            } as HTMLAttributes<HTMLDivElement>
          }
          withControls={false}
          items={items}
          renderItem={(props: MediaViewProps) => (
            <div className={styles['carousel-item']}>
              <FitSquare {...area}>
                <MediaView loading={loading} {...props} />
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
function MediaSlider({
  items: itemsProp,
  children,
  targetIndex,
  onChangeTargetIndex,
  loading,
}: MediaContentProps) {
  const [position, setPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const area = useClientRect(ref);
  const items = toViewPropsList(itemsProp, children);
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
            <MediaView loading={loading} {...items[position]} />
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
 * Получив пропсы items и children вернет массив пропсов для MediaVuew.
 * @param items Проп items.
 * @param children Проп children.
 * @return Массив пропсов для MediaVuew.
 */
function toViewPropsList(
  items: MediaContentProps['items'],
  children: MediaContentProps['children'],
): MediaViewProps[] {
  return (
    items?.map(media => ({ media })) ??
    Children.toArray(children).reduce<MediaViewProps[]>((acc, item) => {
      isValidElement(item) && item.type === MediaView && acc.push(item.props);
      return acc;
    }, [])
  );
}

/**
 * Вписывает квадрат в заданную прямоугольную область.
 * @param props Свойства.
 * @return Элемент.
 */
function FitSquare({ children, width, height }: FitSquareProps) {
  const size = useMemo(() => Math.min(width, height), [width, height]);

  return (
    <div className={styles.square} style={{ '--square-size': `${size}px` } as CSSProperties}>
      {children}
    </div>
  );
}
