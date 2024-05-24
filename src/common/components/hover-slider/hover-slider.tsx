import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { HoverSliderProps, HoverSliderItemProps, HoverSliderContextValue } from './types';
import { HoverSliderNav } from './hover-slider-nav';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import { on } from '@sima-land/ui-nucleons/helpers';
import classNames from 'classnames';
import styles from './hover-slider.m.scss';

const HoverSliderContext = createContext<HoverSliderContextValue>({
  itemMounted: () => {},
  itemUnmounted: () => {},
});

/**
 * Блок карусели с прокруткой при движении мыши над ним.
 * @param props Свойства.
 * @return Элемент.
 */
export function HoverSlider({
  withNav = true,
  children,
  beforeList,
  afterList,
  className,
  ...restProps
}: HoverSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideIds, setSlideIds] = useState<string[]>(() => []);

  // ВАЖНО: подписываемся напрямую через ref так как React вызывает onMouseLeave не на mouseleave а на mouseout
  useEffect(() => {
    const list = listRef.current;
    const root = rootRef.current;

    if (!root || !list) {
      return;
    }

    /** @inheritdoc */
    const onMouseMove = (event: MouseEvent) => {
      const rootRect = root.getBoundingClientRect();
      const rootClientX = event.clientX - rootRect.left;
      const imageIndex = Math.floor(rootClientX / (rootRect.width / slideIds.length));

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
  }, [slideIds.length]);

  useEffect(() => {
    const list = listRef.current;

    if (!list) {
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
  }, []);

  const contextValue = useMemo<HoverSliderContextValue>(
    () => ({
      itemMounted: itemId => {
        setSlideIds(list => (list.includes(itemId) ? list : [...list, itemId]));
      },
      itemUnmounted: itemId => {
        setSlideIds(list => (list.includes(itemId) ? list.filter(item => item !== itemId) : list));
      },
    }),
    [],
  );

  return (
    <HoverSliderContext.Provider value={contextValue}>
      <div {...restProps} ref={rootRef} className={classNames(styles.root, className)}>
        {beforeList}

        <div ref={listRef} className={classNames(styles.list)}>
          {children}
        </div>

        {afterList}

        {withNav && (
          <HoverSliderNav current={activeIndex} total={slideIds.length} className={styles.nav} />
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
