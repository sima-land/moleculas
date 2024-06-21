import {
  MediaGallery,
  MediaGalleryStyle,
  MediaSlide,
} from '@sima-land/moleculas/common/components/media-gallery';
import { CSSProperties, useState } from 'react';
import { mixed } from '../media-modal/fixture';

export const meta = {
  category: 'common/MediaGallery',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  root: {
    width: '640px',
    height: '360px',
    background: '#000',
    borderRadius: '8px',
    overflow: 'hidden',
    '--media-gallery-width': '640px',
    '--media-gallery-height': '360px',
  } satisfies MediaGalleryStyle as CSSProperties,
  item: {
    objectFit: 'contain',
    width: 'var(--media-gallery-width)',
    height: 'var(--media-gallery-height)',
  } satisfies CSSProperties,
};

export default function Primary() {
  const [index, setIndex] = useState(0);

  const items = mixed.filter(item => item.type !== '360').reverse();

  return (
    <MediaGallery style={styles.root} targetIndex={index} onChangeTargetIndex={setIndex}>
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
  );
}
