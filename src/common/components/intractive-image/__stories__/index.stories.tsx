import { CSSProperties } from 'react';
import { InteractiveImage, Parts } from '..';
import imageSrc from './image.png';

export default {
  title: 'common/InteractiveImage',
  component: InteractiveImage,
  parameters: {
    layout: 'padded',
  },
};

interface TitledPoint {
  x: number;
  y: number;
  title: string;
}

const points: TitledPoint[] = [
  { x: 28, y: 30, title: 'Яйца' },
  { x: 63, y: 35, title: 'Кружка' },
  { x: 49, y: 70, title: 'Тарелка' },
  { x: 83, y: 69, title: 'Приборы' },
];

export function Primary() {
  const style: CSSProperties = {
    borderRadius: '8px',
    width: '600px',
    maxWidth: '100%',
  };

  const onPointClick = (point: TitledPoint) => {
    alert(`Клик по точке "${point.title}"`);
  };

  return (
    <>
      <InteractiveImage style={style}>
        <Parts.Image src={imageSrc} />

        {points.map((point, index) => (
          <Parts.Point key={index} role='button' {...point} onClick={() => onPointClick(point)} />
        ))}
      </InteractiveImage>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function BackgroundAnchor() {
  const style: CSSProperties = {
    borderRadius: '8px',
    width: '600px',
    maxWidth: '100%',
  };

  const onPointClick = (dot: TitledPoint) => {
    alert(`Клик по точке "${dot.title}"`);
  };

  return (
    <InteractiveImage style={style}>
      <Parts.ImageAnchor href='https://sima-land.ru' target='_blank'>
        <Parts.Image src={imageSrc} />
      </Parts.ImageAnchor>

      {points.map((dot, index) => (
        <Parts.Point key={index} role='button' {...dot} onClick={() => onPointClick(dot)} />
      ))}
    </InteractiveImage>
  );
}

BackgroundAnchor.storyName = 'Картинка-ссылка';

export function ImageComparison() {
  const style: CSSProperties = {
    borderRadius: '4px',
    width: '320px',
    maxWidth: '100%',
  };

  const onPointClick = (point: TitledPoint) => {
    alert(`Клик по точке "${point.title}"`);
  };

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <img src={imageSrc} style={style} />

      <InteractiveImage style={style}>
        <Parts.Image src={imageSrc} />

        {points.map((point, index) => (
          <Parts.Point key={index} role='button' {...point} onClick={() => onPointClick(point)} />
        ))}
      </InteractiveImage>
    </div>
  );
}

ImageComparison.storyName = 'Сравнение с обычной картинкой';
