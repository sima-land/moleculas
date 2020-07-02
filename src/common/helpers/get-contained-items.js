import isElement from 'lodash/isElement';

/**
 * Возвращает количество HTML элементов, размещенных по горизонтали в родительском элементе.
 * @param {HTMLElement} node DOM Элемент.
 * @return {number} Количество дочерних элементов.
 */
const getContainedItems = node => {
  let qty = 0;
  if (isElement(node)) {
    const childs = node.childNodes && Array.from(node.childNodes);
    const farItemIndex = childs.findIndex((item, index, arr) =>
      !arr[index + 1] || item.getBoundingClientRect().right > arr[index + 1].getBoundingClientRect().right);
    qty = farItemIndex + 1;
  }
  return qty;
};

export default getContainedItems;
