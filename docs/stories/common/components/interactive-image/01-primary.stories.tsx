import { InteractiveImage, Parts } from '@sima-land/moleculas/common/components/interactive-image';
import { CSSProperties } from 'react';
import imageSrc from './image.png';

export const meta = {
  category: 'common/InteractiveImage',
  title: 'Простой пример',
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

export default function Primary() {
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
