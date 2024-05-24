import { HoverSlider, HoverSliderItem } from '@sima-land/moleculas/common/components/hover-slider';
import { CSSProperties } from 'react';
import camera from './images/camera.jpg';
import flacon from './images/flacon.jpg';
import coffee from './images/coffee.jpg';
import clock from './images/clock.jpg';
import gamepad from './images/gamepad.jpg';

export default {
  title: 'common/HoverSlider',
  component: HoverSlider,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } satisfies CSSProperties,
};

const images = [
  // ссылки на картинки
  camera,
  flacon,
  coffee,
  clock,
  gamepad,
];

export function Primary() {
  return (
    <>
      <HoverSlider>
        {images.map((src, index) => (
          <HoverSliderItem key={index}>
            <img src={src} alt='' style={styles.image} />
          </HoverSliderItem>
        ))}
      </HoverSlider>
    </>
  );
}

Primary.storyName = 'Простой пример';
