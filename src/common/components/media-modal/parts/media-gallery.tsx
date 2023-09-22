import { Children, HTMLAttributes, isValidElement, ReactNode, useCallback, useRef } from 'react';
import { MediaView, MediaViewProps } from './media-view';
import { MediaArea } from './media-area';
import { useClientRect, useMounted } from '../utils';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import classNames from 'classnames/bind';
import styles from './media-gallery.module.scss';

export interface MediaGalleryProps {
  children?: ReactNode;
  targetIndex?: number;
  onChangeTargetIndex?: (newIndex: number) => void;
  loading?: boolean;
}

const cx = classNames.bind(styles);

/**
 * Отображает медиа-контент в контексте модального окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaGallery({
  children,
  targetIndex = 0,
  onChangeTargetIndex,
}: MediaGalleryProps) {
  const desktop = useBreakpoint('xs+');
  const mounted = useMounted();
  const slideRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const areaRect = useClientRect(areaRef);

  const items = toViewPropsList(children);
  const total = items.length;
  const target = items[targetIndex];

  const moveBackward = useCallback(() => {
    const nextIndex = targetIndex - 1;

    onChangeTargetIndex?.(nextIndex < 0 ? total - 1 : nextIndex);
  }, [total, targetIndex, onChangeTargetIndex]);

  const moveForward = useCallback(() => {
    const nextIndex = targetIndex + 1;

    onChangeTargetIndex?.(nextIndex >= total ? 0 : nextIndex);
  }, [total, targetIndex, onChangeTargetIndex]);

  if (!target) {
    return null;
  }

  return (
    <MediaArea>
      <div
        className={cx('inner')}
        {...{
          ...(!desktop &&
            getSwipeProps({
              onSwipeMove: ({ distanceX }) => {
                if (!slideRef.current) {
                  return;
                }

                slideRef.current.style.setProperty(
                  'transform',
                  `translate3d(${distanceX}px, 0, 0)`,
                );
              },
              onSwipeEnd: () => {
                if (!slideRef.current) {
                  return;
                }

                slideRef.current.style.setProperty('transform', `translate3d(0, 0, 0)`);
              },
              onSwipeLeftEnd: moveBackward,
              onSwipeRightEnd: moveForward,
            })),
        }}
      >
        {desktop && (
          <ArrowButton className={cx('button')} direction='left' onClick={moveBackward} />
        )}
        <div
          ref={areaRef}
          className={cx('area')}
          style={
            areaRect.ready
              ? ({
                  '--media-view-width': `${areaRect.width}px`,
                  '--media-view-height': `${areaRect.height}px`,
                } as any)
              : undefined
          }
        >
          {mounted && <MediaView rootRef={slideRef} {...target} />}
        </div>

        {desktop && (
          <ArrowButton className={cx('button')} direction='right' onClick={moveForward} />
        )}
      </div>
    </MediaArea>
  );
}

/**
 * Получив пропсы items и children вернет массив пропсов для MediaView.
 * @param children Проп children.
 * @return Массив пропсов для MediaView.
 */
function toViewPropsList(children: MediaGalleryProps['children']): MediaViewProps[] {
  return Children.toArray(children).reduce<MediaViewProps[]>((acc, item) => {
    isValidElement(item) && item.type === MediaView && acc.push(item.props);
    return acc;
  }, []);
}

/**
 * Получив пропсы items и children вернет массив пропсов для MediaView.
 * @param props Свойства.
 * @return Пропсы.
 */
function getSwipeProps({
  onSwipeMove,
  onSwipeEnd,
  onSwipeLeftEnd,
  onSwipeRightEnd,
}: {
  onSwipeMove?: (event: { startX: number; distanceX: number }) => void;
  onSwipeEnd?: VoidFunction;
  onSwipeLeftEnd?: VoidFunction;
  onSwipeRightEnd?: VoidFunction;
} = {}): HTMLAttributes<HTMLElement> {
  let startX = 0;
  let capture = false;

  return {
    onPointerDown: event => {
      event.preventDefault();

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      startX = event.clientX;
      capture = true;
    },

    onPointerMove: event => {
      if (!capture) {
        return;
      }

      onSwipeMove?.({ startX, distanceX: event.clientX - startX });
    },

    onPointerUp: event => {
      if (!capture) {
        return;
      }

      const diff = event.clientX - startX;

      if (Math.abs(diff) > 64) {
        if (diff > 0) {
          onSwipeLeftEnd?.();
        }

        if (diff < 0) {
          onSwipeRightEnd?.();
        }
      }

      onSwipeEnd?.();

      capture = false;
    },
  };
}
