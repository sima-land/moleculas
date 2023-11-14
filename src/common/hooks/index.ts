import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import { ReactEventHandler, useCallback, useState } from 'react';

/**
 * Хук состояния ошибки загрузки изображения.
 * @param src Ссылка на картинку.
 * @param onError Обработчик ошибки.
 * @return Управление состоянием.
 * @todo Переименовать в useImageError?
 * @todo Объединить с тем что есть в AllRoundView!
 */
export function useImageStub(src?: string, onError?: ReactEventHandler<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setFailed(false);
  }, [src]);

  const handleError = useCallback<ReactEventHandler<HTMLImageElement>>(
    event => {
      setFailed(true);
      onError?.(event);
    },
    [onError],
  );

  return { failed, setFailed, handleError };
}

/**
 * Возвращает true если компонент смонтирован.
 * @return True если компонент смонтирован.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}
