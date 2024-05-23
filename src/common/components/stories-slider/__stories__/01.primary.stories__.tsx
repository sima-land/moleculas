import { StoriesSlider } from '@sima-land/moleculas/common/components/stories-slider';
import { CSSProperties, useRef, useState } from 'react';
import { useBoundingClientRect, scaleToFit } from '@krutoo/utils';

export default {
  title: 'common/StoriesSlider',
  component: StoriesSlider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Карточка базовой информации о товаре',
      },
    },
  },
};

const items = [...Array(10).keys()].map(id => ({ id }));

const styles = {
  root: {
    width: 'calc(100vw - 64px)',
    height: 'calc(100vh - 64px)',
    margin: '32px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 0 2px #7f8c8d',
  } satisfies CSSProperties,

  slider: {
    width: '100%',
    height: '100%',
  } satisfies CSSProperties,

  item: {
    background: '#7f8c8d',
    color: '#fff',
    borderRadius: '8px',
    transition: `
      width var(--stories-slider-transition-duration, 0.3s) var(--stories-slider-transition-easing, ease-in-out),
      height var(--stories-slider-transition-duration, 0.3s) var(--stories-slider-transition-easing, ease-in-out),
      background var(--stories-slider-transition-duration, 0.3s) var(--stories-slider-transition-easing, ease-in-out)
    `,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    marginRight: '20px',
    cursor: 'pointer',
  } satisfies CSSProperties,

  itemCurrent: {
    background: '#95a5a6',
  } satisfies CSSProperties,
};

export function Primary() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isCurrent = (i: number) => i === currentIndex;

  const rootRef = useRef<HTMLDivElement>(null);
  const rootRect = useBoundingClientRect(rootRef);

  const itemRatio = {
    width: 2,
    height: 3,
  };

  const itemSize = scaleToFit(itemRatio, {
    width: rootRect.width * 0.6,
    height: rootRect.height * 0.6,
  });

  const currentItemSize = scaleToFit(itemRatio, {
    width: rootRect.width * 0.8,
    height: rootRect.height * 0.8,
  });

  return (
    <div ref={rootRef} style={styles.root}>
      {rootRect.ready && (
        <StoriesSlider
          currentIndex={currentIndex}
          sizes={{
            gap: 20,
            item: itemSize.width,
            currentItem: currentItemSize.width,
          }}
          style={styles.slider}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              style={{
                ...styles.item,
                ...itemSize,
                ...(isCurrent(index) && styles.itemCurrent),
                ...(isCurrent(index) && currentItemSize),
              }}
            >
              {item.id}
            </div>
          ))}
        </StoriesSlider>
      )}
    </div>
  );
}

Primary.storyName = 'Простой пример';
