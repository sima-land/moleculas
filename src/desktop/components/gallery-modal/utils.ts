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
 * Хук, вернет размер квадрата вписанного в область окна галереи фото по макетам.
 * @param areaRef Реф с элементом.
 * @param options Опции.
 * @return Размер или null.
 */
export const useSquareFit = (
  areaRef: React.RefObject<HTMLDivElement | null>,
  { hasReview }: { hasReview: boolean },
) => {
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    function calc() {
      if (areaRef.current) {
        const correction = 2 * (104 + 16 + 56 + 24); // ширина превью + отступ + ширина кнопки + отступ

        // доступная область в которую можно вписать **квадрат**
        const availWidth = areaRef.current.clientWidth - correction;
        const availHeight = areaRef.current.clientHeight - (hasReview ? 140 : 40); // вычитаем высоту футера

        setSize(Math.min(availWidth, availHeight));
      }
    }

    calc();

    return on(window, 'resize', () => window.requestAnimationFrame(calc));
  }, [areaRef, hasReview]);

  return size;
};
