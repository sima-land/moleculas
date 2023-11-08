import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useMounted } from '../../hooks';
import { MediaGalleryProps } from './types';
import { createSwipe, LoopUtil } from './utils';
import classNames from 'classnames/bind';
import styles from './media-gallery.module.scss';

const cx = classNames.bind(styles);

/**
 * Блок просмотра медиа (фото/видео) с возможностью прокрутки с помощью свайпа.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaGallery({
  className,
  style,
  children,
  targetIndex = 0,
  onChangeTargetIndex,
}: MediaGalleryProps) {
  const mounted = useMounted();
  const slidesRef = useRef<HTMLDivElement>(null);

  const items = Children.toArray(children).filter(
    item => isValidElement(item) && item.type === MediaSlide,
  ) as ReactElement[];

  const total = items.length;

  const totalRef = useRef(total);
  totalRef.current = total;

  const targetIndexRef = useRef(targetIndex);
  targetIndexRef.current = targetIndex;

  const onChangeTargetIndexRef = useRef(onChangeTargetIndex);
  onChangeTargetIndexRef.current = onChangeTargetIndex;

  const moveBackward = useCallback(() => {
    onChangeTargetIndexRef.current?.(
      LoopUtil.getPrevIndex(targetIndexRef.current, totalRef.current),
    );
  }, []);

  const moveForward = useCallback(() => {
    onChangeTargetIndexRef.current?.(
      LoopUtil.getNextIndex(targetIndexRef.current, totalRef.current),
    );
  }, []);

  const target = items[targetIndex];
  const next = items[LoopUtil.getNextIndex(targetIndex, total)];
  const prev = items[LoopUtil.getPrevIndex(targetIndex, total)];

  const { init, getProps } = useMemo(
    () =>
      createSwipe({
        onSwipeStart: () => {
          if (!slidesRef.current) {
            return;
          }

          slidesRef.current.classList.remove(cx('transition'));
        },
        onSwipeMove: ({ distanceX }) => {
          if (!slidesRef.current) {
            return;
          }

          // @todo линейная интерполяция для того чтобы не докручивать до тех слайдов которые не смонтированы
          slidesRef.current.style.setProperty('transform', `translate3d(${distanceX}px, 0, 0)`);
        },
        onSwipeEnd: ({ distanceX, isLeft, isRight }) => {
          const slides = slidesRef.current;

          if (!slides) {
            return;
          }

          if (isLeft) {
            slides.style.setProperty(
              'transform',
              `translate3d(calc(${distanceX}px - var(--media-gallery-width)), 0, 0)`,
            );
            moveBackward();
          }

          if (isRight) {
            slides.style.setProperty(
              'transform',
              `translate3d(calc(${distanceX}px + var(--media-gallery-width)), 0, 0)`,
            );
            moveForward();
          }

          // ВАЖНО: здесь должны быть именно два requestAnimationFrame, один внутри другого
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              slides.classList.add(cx('transition'));
              slides.style.setProperty('transform', `translate3d(0px, 0, 0)`);
            });
          });
        },
      }),
    [moveBackward, moveBackward],
  );

  useEffect(init, [init]);

  return (
    <div className={cx('root', className)} style={style} {...getProps()}>
      {mounted && (
        <>
          <div ref={slidesRef} className={cx('slides')}>
            {/* ВАЖНО: прокидываем key чтобы предотвратить размонтирование слайдов */}
            {prev && (
              <div key={prev.key} className={cx('slide', 'prev')}>
                {prev}
              </div>
            )}
            {target && (
              <div key={target.key} className={cx('slide')}>
                {target}
              </div>
            )}
            {next && (
              <div key={next.key} className={cx('slide', 'next')}>
                {next}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Слот слайда галереи.
 * @param props Свойства.
 * @return Элемент.
 */
export function MediaSlide({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
