import { HoverSlider, HoverSliderItem } from '@sima-land/moleculas/common/components/hover-slider';
import { CSSProperties, MouseEvent } from 'react';
import { StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ViewQuickSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ViewQuick';
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
  container: {
    display: 'block',
    position: 'relative',
    width: '320px',
    height: '320px',
  } satisfies CSSProperties,

  slider: {
    width: '100%',
    height: '100%',
  } satisfies CSSProperties,

  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } satisfies CSSProperties,

  favorite: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    display: 'block',
    width: '24px',
    height: '24px',
  } satisfies CSSProperties,

  details: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    display: 'block',
    width: '24px',
    height: '24px',
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

export function Secondary() {
  const getButtonClickHandler = (message: string) => (event: MouseEvent) => {
    event.preventDefault(); // предотвращение перехода по ссылке
    alert(message);
  };

  return (
    <>
      <a href='https://sima-land.ru/' target='_blank' rel='noreferrer' style={styles.container}>
        <HoverSlider
          afterList={
            // ВАЖНО: выводим кнопки именно в afterList чтобы они были потомками корневого элемента HoverSlider
            // это нужно для корректной работы отображения текущего слайда при наведении на кнопки
            <>
              <StrokedSVG
                component={FavoriteSVG}
                style={styles.favorite}
                onClick={getButtonClickHandler('Клик: Добавить в избранное')}
              />

              <StrokedSVG
                component={ViewQuickSVG}
                style={styles.details}
                onClick={getButtonClickHandler('Клик: Быстрый просмотр')}
              />
            </>
          }
        >
          {images.map((src, index) => (
            <HoverSliderItem key={index}>
              <img src={src} alt='' style={styles.image} />
            </HoverSliderItem>
          ))}
        </HoverSlider>
      </a>
    </>
  );
}

Secondary.storyName = 'Контейнер-ссылка и кнопки поверх';
