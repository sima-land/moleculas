import { action } from '@storybook/addon-actions';
import React from 'react';
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

export const Primary = () => {
  const points: TitledPoint[] = [
    { x: 28, y: 30, title: 'Яйца' },
    { x: 63, y: 35, title: 'Кружка' },
    { x: 49, y: 70, title: 'Тарелка' },
    { x: 83, y: 69, title: 'Приборы' },
  ];

  const style: React.CSSProperties = {
    borderRadius: '8px',
    width: '600px',
    maxWidth: '100%',
    marginBottom: '32px',
  };

  const ClickHandler = (value: string) => () => {
    action('click')(value);
  };

  return (
    <>
      <h3>Простое изображение</h3>
      <img src={imageSrc} style={style} />

      <h3>Интерактивное изображение</h3>
      <InteractiveImage style={style}>
        <Parts.Image src={imageSrc} />

        {points.map((point, index) => (
          <Parts.Point key={index} role='button' {...point} onClick={ClickHandler(point.title)} />
        ))}
      </InteractiveImage>
    </>
  );
};

Primary.storyName = 'Простой пример';
