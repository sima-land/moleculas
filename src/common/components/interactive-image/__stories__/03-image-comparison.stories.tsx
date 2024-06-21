import { InteractiveImage, Parts } from '@sima-land/moleculas/common/components/interactive-image';
import { CSSProperties } from 'react';
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
