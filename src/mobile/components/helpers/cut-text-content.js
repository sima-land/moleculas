import isNumber from 'lodash/isNumber';

/**
 * Обрезает textContent переданного элемента, пока его высота не будет соответствовать заданной.
 * @param {HTMLElement} element Элемент для обрезания textContent.
 * @param {number} height Заданная высота.
 */
export const cutTextContent = (element, height) => {
  if (element instanceof HTMLElement && isNumber(height) && height > 0) {
    const selfDisplay = element.style.display;
    const minLength = 15;

    element.style.display = 'block';
    if (element.textContent.length > minLength && element.clientHeight > height) {
      const capacityLength = element.textContent.length / (element.clientHeight / height);

      // удаляем 4 символа и вставляем многоточие
      element.textContent = `${element.textContent.slice(0, capacityLength - 4).trim()}...`;
    }
    element.style.display = selfDisplay;
  }
};
