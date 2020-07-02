/**
 * Отчищает строку от лишних символов и обрезает от лишних.
 * Если количество не является целым - оставляет только десятичную долю.
 * @param {string} qty Количество товара.
 * @param {boolean} canBeFloat Признак - количество товара может быть float значением.
 * @return {string} Количество товара.
 */
export const cleanQtyString = (qty = '', canBeFloat = false) => {
  const qtyWithDot = String(qty).replace(',', '.');
  let nextQty = '';
  if (!Number.isNaN(parseFloat(qtyWithDot))) {
    const dotIndex = qtyWithDot && qtyWithDot.indexOf('.');
    const isFloatQty = canBeFloat && dotIndex !== -1;
    const qtyLength = isFloatQty ? 6 : 5;
    nextQty = String(parseFloat(qtyWithDot)).slice(0, qtyLength);

    const isFloatWithoutDot = isFloatQty && nextQty.indexOf('.') === -1;
    nextQty = isFloatWithoutDot ? `${nextQty}.` : nextQty;

    const hasDotInEndOfFullStr = nextQty.indexOf('.') === nextQty.length - 1 && nextQty.length === 6;
    nextQty = hasDotInEndOfFullStr
      ? nextQty.slice(0, nextQty.length - 1)
      : nextQty;

    // если float режем до десятичной дроби.
    nextQty = isFloatQty ? nextQty.slice(0, dotIndex + 2) : nextQty;
  }
  return nextQty.replace('.', ',');
};
