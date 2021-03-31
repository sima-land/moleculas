import { useRef, useEffect } from 'react';
import isFunction from 'lodash/isFunction';
import on from '@dev-dep/ui-nucleons/helpers/on';

/**
 * Хук, добавляющий обработчик нажатия на клавишу.
 * @param {KeyboardEvent.key} key Клавиша, для которой отслеживается нажатие.
 * @param {Function} callback Обработчик нажатия.
 */
export const useKeyDownHandler = (key, callback) => {
  const handlerRef = useRef(callback);

  useEffect(() => on(document, 'keydown', event => {
    const handler = handlerRef.current;
    event.key === key
        && isFunction(handler)
        && handler();
  }), []);
};
