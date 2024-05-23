import {
  MouseEventHandler,
  UIEventHandler,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { HoverSliderProps, HoverSliderItemProps, HoverSliderContextValue } from './types';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import classNames from 'classnames';
import styles from './hover-slider.m.scss';

const HoverSliderContext = createContext<HoverSliderContextValue>({
  itemMounted: () => {},
  itemUnmounted: () => {},
});

/** @inheritdoc */
export function HoverSlider({ children, className, ...restProps }: HoverSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRegistry = useMemo(() => new Set<string>(), []);

  const onMouseMove = useCallback<MouseEventHandler>(
    event => {
      const containerWidth = event.currentTarget.getBoundingClientRect().width;
      const containerX = event.clientX - event.currentTarget.getBoundingClientRect().left;
      const imageIndex = Math.floor(containerX / (containerWidth / itemRegistry.size));

      event.currentTarget.scrollLeft = containerWidth * imageIndex;
      setActiveIndex(imageIndex);
    },
    [itemRegistry.size],
  );

  const onMouseLeave = useCallback<MouseEventHandler>(event => {
    event.currentTarget.scrollLeft = 0;
    setActiveIndex(0);
  }, []);

  const onScroll = useCallback<UIEventHandler>(event => {
    setActiveIndex(
      Math.round(
        event.currentTarget.scrollLeft / event.currentTarget.getBoundingClientRect().width,
      ),
    );
  }, []);

  return (
    <HoverSliderContext.Provider
      value={{
        itemMounted: itemId => itemRegistry.add(itemId),
        itemUnmounted: itemId => itemRegistry.delete(itemId),
      }}
    >
      <div {...restProps} className={classNames(styles.root, className)}>
        <div
          className={styles.list}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onScroll={onScroll}
        >
          {children}
        </div>
        <HoverSliderNav active={activeIndex} total={itemRegistry.size} />
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
  }, [itemId]);

  return (
    <div {...restProps} className={classNames(styles['list-item'], className)}>
      {children}
    </div>
  );
}

/** @inheritdoc */
export function HoverSliderNav({ active, total }: { active: number; total: number }) {
  return (
    <div className={styles.nav}>
      {Array(total)
        .fill(0)
        .map((zero, index) => (
          <div
            key={index}
            className={classNames(
              styles['nav-item'],
              index === active && styles['nav-item-active'],
            )}
          ></div>
        ))}
    </div>
  );
}
