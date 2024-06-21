import { HoverSlider, HoverSliderItem } from '@sima-land/moleculas/common/components/hover-slider';
import { CSSProperties } from 'react';
import flacon from './images/flacon.jpg';

export const meta = {
  category: 'common/HoverSlider',
  title: 'Только один слайд',
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  container: {
    display: 'block',
    position: 'relative',
    width: '320px',
    height: '320px',
  } satisfies CSSProperties,

  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } satisfies CSSProperties,
};

export default function SingleSlide() {
  return (
    <>
      <HoverSlider>
        <HoverSliderItem>
          <img src={flacon} alt='' style={styles.image} />
        </HoverSliderItem>
      </HoverSlider>
    </>
  );
}
