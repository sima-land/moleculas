import { useRef, useEffect } from 'react';
import isFunction from 'lodash/isFunction';

/**
 * Хук на клик вне используемого компонента.
 * @param {Function} callback Коллбэк при клике вне рефа.
 * @return {Object} Реф для элемента.
 */
export const useOutsideClick = callback => {
  const ref = useRef(null);

  /**
   * Обработчик клика.
   * @param {MouseEvent} event Событие клика.
   * @return {*} Any.
   */
  const handler = event =>
    isFunction(callback)
    && ref.current
    && !ref.current.contains(event.target)
    && callback();

  useEffect(() => {
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return ref;
};
