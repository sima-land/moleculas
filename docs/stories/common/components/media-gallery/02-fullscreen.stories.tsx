import {
  MediaGallery,
  MediaGalleryStyle,
  MediaSlide,
} from '@sima-land/moleculas/common/components/media-gallery';
import { CSSProperties, useRef, useState } from 'react';
import { mixed } from '../media-modal/fixture';
import { usePageScrollLock } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';

export const meta = {
  category: 'common/MediaGallery',
  title: 'На весь экран',
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#000',
    overflow: 'hidden',
    '--media-gallery-width': '100vw',
    '--media-gallery-height': '100vh',
  } satisfies MediaGalleryStyle as CSSProperties,
  item: {
    objectFit: 'contain',
    width: 'var(--media-gallery-width)',
    height: 'var(--media-gallery-height)',
  } satisfies CSSProperties,
};

export default function ExampleFullscreen() {
  const [index, setIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  usePageScrollLock(ref);

  const items = mixed.filter(item => item.type !== '360').reverse();

  return (
    <div ref={ref} style={styles.root}>
      <MediaGallery targetIndex={index} onChangeTargetIndex={setIndex}>
        {items.map((item, id) => (
          <MediaSlide key={id}>
            {item.type === 'image' && (
              <>
                <img style={styles.item} src={item.data.src} />
              </>
            )}

            {item.type === 'video' && (
              <video style={styles.item} autoPlay={false} controls>
                <source src={item.data.src} />
              </video>
            )}
          </MediaSlide>
        ))}
      </MediaGallery>
    </div>
  );
}
