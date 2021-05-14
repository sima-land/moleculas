/**
 * Отчищает строку от лишних символов и обрезает от лишних.
 * Если количество не является целым - оставляет только десятичную долю.
 * @param qty Количество товара.
 * @param options Опции.
 * @param options.allowFloat Признак - количество товара может быть float значением.
 * @return Количество товара.
 */
export const formatQtyString = (qty = '', { allowFloat = false }: { allowFloat?: boolean } = {}) => {
  const qtyWithDot = String(qty).replace(',', '.');
  let nextQty = '';

  if (!Number.isNaN(parseFloat(qtyWithDot))) {
    const dotIndex: number = qtyWithDot.indexOf('.');
    const isFloatQty: boolean = allowFloat && dotIndex !== -1;
    const qtyLength: number = isFloatQty ? 6 : 5;

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
