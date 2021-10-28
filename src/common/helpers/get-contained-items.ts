/**
 * Возвращает количество HTML элементов, размещенных по горизонтали в родительском элементе.
 * @param node DOM Элемент.
 * @return Количество дочерних элементов.
 */
const getContainedItems = (node: any) => {
  let count = 0;

  if (node instanceof HTMLElement) {
    const children = Array.from(node.childNodes) as HTMLElement[];

    const farItemIndex = children.findIndex(
      (item, index, arr) =>
        !arr[index + 1] ||
        item.getBoundingClientRect().right > arr[index + 1].getBoundingClientRect().right,
    );

    count = farItemIndex + 1;
  }

  return count;
};

export default getContainedItems;
