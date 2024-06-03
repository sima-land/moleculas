import { useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { HoverSliderProps, HoverSliderItemProps } from './types';
import { HoverSliderContext, useSlideCount } from './utils';
import { HoverSliderNav } from './hover-slider-nav';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import { on } from '@sima-land/ui-nucleons/helpers';
import classNames from 'classnames';
import styles from './hover-slider.m.scss';

/**
 * Блок карусели с прокруткой при движении мыши над ним.
 * @param props Свойства.
 * @return Элемент.
 */
export function HoverSlider({
  rootRef: rootRefProp,
  withNav = true,
  children,
  beforeList,
  afterList,
  className,
  'data-testid': testId = 'hover-slider',
  ...restProps
}: HoverSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { count, contextValue } = useSlideCount();

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    rootRefProp,
    () => rootRef.current,
  );

  // ВАЖНО: подписываемся напрямую через ref так как React вызывает onMouseLeave не на mouseleave а на mouseout
  useEffect(() => {
    const list = listRef.current;
    const root = rootRef.current;

    if (!root || !list || count < 2) {
      return;
    }

    /** @inheritdoc */
    const onMouseMove = (event: MouseEvent) => {
      const rootRect = root.getBoundingClientRect();
      const rootClientX = event.clientX - rootRect.left;
      const imageIndex = Math.floor(rootClientX / (rootRect.width / count));

      list.scrollLeft = rootRect.width * imageIndex;
      setActiveIndex(imageIndex);
    };

    /** @inheritdoc */
    const onMouseLeave = () => {
      list.scrollLeft = 0;
      setActiveIndex(0);
    };

    const off = [
      //
      on(root, 'mousemove', onMouseMove),
      on(root, 'mouseleave', onMouseLeave),
    ];

    return () => {
      off.forEach(fn => fn());
    };
  }, [count]);

  useEffect(() => {
    const list = listRef.current;

    if (!list || count < 2) {
      return;
    }

    /** @inheritdoc */
    const onScroll = () => {
      setActiveIndex(Math.round(list.scrollLeft / list.getBoundingClientRect().width));
    };

    const off = [
      //
      on(list, 'scroll', onScroll),
    ];

    return () => {
      off.forEach(fn => fn());
    };
  }, [count]);

  return (
    <HoverSliderContext.Provider value={contextValue}>
      <div
        {...restProps}
        ref={rootRef}
        className={classNames(styles.root, className)}
        data-testid={testId}
      >
        {beforeList}

        <div ref={listRef} className={styles.list}>
          {children}
        </div>

        {afterList}

        {withNav && count > 1 && (
          <HoverSliderNav current={activeIndex} total={count} className={styles.nav} />
        )}
      </div>
    </HoverSliderContext.Provider>
  );
}

/** @inheritdoc */
export function HoverSliderItem({ children, className, ...restProps }: HoverSliderItemProps) {
  const { itemMounted, itemUnmounted } = useContext(HoverSliderContext);
  const itemId = useMemo(() => Math.random().toString(16).slice(2), []);

  useIsomorphicLayoutEffect(() => {
    itemMounted(itemId);

    return () => {
      itemUnmounted(itemId);
    };
  }, [itemId, itemMounted, itemUnmounted]);

  return (
    <div {...restProps} className={classNames(styles['list-item'], className)}>
      {children}
    </div>
  );
}
