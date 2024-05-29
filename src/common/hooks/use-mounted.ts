import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import { useState } from 'react';

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
