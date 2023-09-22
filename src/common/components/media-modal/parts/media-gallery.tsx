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
  const ref = useRef<HTMLDivElement>(null);
  const rect = useClientRect(ref);

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
              onSwipeLeft: moveBackward,
              onSwipeRight: moveForward,
            })),
        }}
      >
        {desktop && (
          <ArrowButton className={cx('button')} direction='left' onClick={moveBackward} />
        )}
        <div
          ref={ref}
          className={cx('area')}
          style={
            rect.ready
              ? ({
                  '--media-view-width': `${rect.width}px`,
                  '--media-view-height': `${rect.height}px`,
                } as any)
              : undefined
          }
        >
          {mounted && <MediaView {...target} />}
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
  onSwipeLeft,
  onSwipeRight,
}: {
  onSwipeLeft?: VoidFunction;
  onSwipeRight?: VoidFunction;
} = {}): HTMLAttributes<HTMLElement> {
  let start = 0;

  return {
    onPointerDown: event => {
      start = event.clientX;
    },
    onPointerUp: event => {
      const finish = event.clientX;
      const diff = finish - start;

      if (diff > 0) {
        onSwipeLeft?.();
      }

      if (diff < 0) {
        onSwipeRight?.();
      }
    },
  };
}
