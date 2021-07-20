import React, { useEffect, useState } from 'react';
import on from '@sima-land/ui-nucleons/helpers/on';

/**
 * Хук, вернет true когда все фото будут загружен.
 * @param srcList Список адресов фото.
 * @return Загружены ли все фото.
 */
export const useImagesLoad = (srcList: string[]): boolean => {
  const [loadedCount, setLoadedCount] = useState<number>(0);

  useEffect(() => {
    srcList.forEach(src => {
      const image = new Image();

      image.onload = () => setLoadedCount(c => c + 1);
      image.src = src;
    });

    return () => setLoadedCount(0);
  }, srcList);

  return loadedCount === srcList.length;
};

/**
 * Хук, вернет размер квадрата вписанного в прямоугольную область, определенную заданным элементом.
 * @param areaRef Реф с элементом.
 * @param options Опции.
 * @return Размер или null.
 */
export const useRectFit = (areaRef: React.RefObject<HTMLDivElement | null>, {
  correction,
}: { correction: number }) => {
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const calcSquareSize = () => {
      if (areaRef.current) {
        const availWidth = areaRef.current.clientWidth;
        const availHeight = areaRef.current.clientHeight;

        if (availWidth + correction <= availHeight) {
          setSize(availWidth);
        } else {
          setSize(availHeight - correction);
        }
      }
    };

    calcSquareSize();

    return on(window, 'resize', () => window.requestAnimationFrame(calcSquareSize));
  }, [areaRef]);

  return size;
};
