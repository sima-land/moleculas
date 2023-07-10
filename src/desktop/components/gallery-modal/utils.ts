import { useEffect, useState, RefObject } from 'react';
import on from '@sima-land/ui-nucleons/helpers/on';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';

type Status = 'load' | 'done' | 'fail';

/**
 * Хук, вернет true когда все фото будут загружен.
 * @param srcList Список адресов фото.
 * @return Загружены ли все фото.
 */
export function useImagesLoad(srcList: string[]): Status {
  const [failed, setFailed] = useState(false);
  const [loadedCount, setLoadedCount] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    setFailed(false);
  }, srcList);

  useEffect(() => {
    srcList.forEach(src => {
      const image = new Image();

      image.onload = () => setLoadedCount(c => c + 1);
      image.onerror = () => setFailed(true);
      image.src = src;
    });

    return () => setLoadedCount(0);
  }, srcList);

  if (loadedCount === srcList.length) {
    return 'done';
  }

  if (failed) {
    return 'fail';
  }

  return 'load';
}

/**
 * Хук, вернет размер квадрата вписанного в область окна галереи фото по макетам.
 * @param areaRef Реф с элементом.
 * @param options Опции.
 * @return Размер или null.
 */
export const useSquareFit = (
  areaRef: RefObject<HTMLDivElement | null>,
  { hasReview }: { hasReview: boolean },
) => {
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line require-jsdoc
    const calc = () => {
      if (areaRef.current) {
        const correction = 2 * (104 + 16 + 56 + 24); // ширина превью + отступ + ширина кнопки + отступ

        // доступная область в которую можно вписать **квадрат**
        const availWidth = areaRef.current.clientWidth - correction;
        const availHeight = areaRef.current.clientHeight - (hasReview ? 140 : 40); // вычитаем высоту футера

        setSize(Math.min(availWidth, availHeight));
      }
    };

    calc();

    return on(window, 'resize', () => window.requestAnimationFrame(calc));
  }, [areaRef, hasReview]);

  return size;
};
