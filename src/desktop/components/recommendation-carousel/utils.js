import { useEffect, useState } from 'react';
import on from '@dev-dep/ui-nucleons/helpers/on';

/**
 * Управляет расположением и появлением тултипа.
 * @param {Object} ref Ref тултипа.
 * @return {Object} Объект с функциями для управления тултипом.
 */
export const useTooltip = ref => {
  const [canShow, setCanShow] = useState(true);

  // eslint-disable-next-line require-jsdoc
  const hide = () => {
    if (ref.current) {
      ref.current.style.opacity = 0;
    }
  };

  // eslint-disable-next-line require-jsdoc
  const show = ({ currentTarget }) => {
    if (canShow && ref.current) {
      const { height, left, top } = currentTarget.getBoundingClientRect();

      ref.current.style.right = `calc(100% - ${left - 8}px)`; // 8px - отступ от иконки.
      ref.current.style.top = `${top + window.scrollY + (height / 2)}px`;
      ref.current.style.opacity = 1;
    }
  };

  useEffect(() => on(document, 'mousedown', () => {
    setCanShow(false);
    hide();
  }), []);

  useEffect(() => on(document, 'mouseup', () => {
    setCanShow(true);
  }), []);

  return { onMouseEnter: show, onMouseLeave: hide };
};

/**
 * Возвращает состояние по media-запросу.
 * @param {string} query Запрос.
 * @return {boolean} Состояние (matches).
 */
export const useMedia = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    return on(mql, 'change', event => {
      setMatches(event.matches);
    });
  }, [query]);

  return matches;
};

/**
 * Вызывает callback когда заданный в ref элемент попал во viewport.
 * @param {Object} ref Ref отслеживаемого элемента.
 * @param {Function} callback Функция обратного вызова.
 * @param {Object} options Опции IntersectionObserver.
 */
export const useViewport = (ref, callback, options = {}) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          entry.target === element && entry.isIntersecting && callback && callback();
          break;
        }
      }, options);

      observer.observe(element);

      return () => observer.disconnect();
    }
  }, []);
};
