import { useRef, useEffect } from 'react';
import on from '@dev-dep/ui-nucleons/helpers/on';

/**
 * Хук, добавляющий обработчик нажатия на клавишу.
 * @param {KeyboardEvent.key} targetKey Клавиша, для которой отслеживается нажатие.
 * @param {Function} callback Обработчик нажатия.
 */
export const useKeyDownHandler = (targetKey, callback) => {
  const ref = useRef(callback);

  ref.current = callback;

  useEffect(() => on(document, 'keydown', ({ key }) => {
    const fn = ref.current;

    key === targetKey && fn && fn();
  }), [targetKey]);
};
