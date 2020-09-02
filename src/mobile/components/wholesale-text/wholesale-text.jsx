import React, { useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';
import { cutTextContent } from '../helpers/cut-text-content';

/**
 * @type {number} Максимальная высота текста крупного опта.
 */
const linkMaxHeight = 38;

/**
 * Обрезает текст до нужной высоты.
 * @param {HTMLElement} element Элемент с текстом.
 */
export const cutItemWholesaleText = element => {
  cutTextContent(element, linkMaxHeight);
};

/**
 * Компонент текста крупного опта.
 * @param {Object} props Свойства компонента.
 * @param {string} props.text Текст крупного опта.
 * @param {string} [props.className] Дополнительный класс компонента.
 * @return {ReactElement} Компонент цены крупного опта с описанием.
 */
export const WholesaleText = ({
  text,
  className,
  addGlobalListener,
}) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const { current: element } = linkRef;
    element && cutItemWholesaleText(element);

    const cutItemText = debounce(() => {
      element.textContent = text;
      cutItemWholesaleText(element);
    }, 500);

    return addGlobalListener('resize', cutItemText);
  }, [text]);

  return (
    <span className={className} ref={linkRef}>{text}</span>
  );
};

export default withGlobalListeners(WholesaleText);
