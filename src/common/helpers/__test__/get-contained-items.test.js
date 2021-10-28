import getContainedItems from '../get-contained-items';

describe('getContainedItems()', () => {
  it('should return correctly quantity', function () {
    /**
     * Конструктор тестовых дочерних узлов.
     * @param {number} right Ширина до правой стороны.
     */
    function Child(right) {
      this.right = right;
      this.getBoundingClientRect = () => ({ right: this.right });
      this.__proto__ = HTMLElement.prototype;
      this.constructor = HTMLElement;
    }

    const child1 = new Child(50);
    const child2 = new Child(100);
    const child3 = new Child(150);
    const child4 = new Child(50);
    const child5 = new Child(250);

    const testNode = {
      childNodes: [child1, child2, child3, child4, child5],
      __proto__: HTMLElement.prototype,
      constructor: HTMLElement,
    };

    expect(getContainedItems(testNode)).toEqual(3);
    child4.right = 200;
    expect(getContainedItems(testNode)).toEqual(5);
    expect(getContainedItems()).toEqual(0);
  });
});
