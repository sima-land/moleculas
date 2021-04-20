import { useEffect, useState } from 'react';
import { formatQtyString } from '../../helpers/format-qty-string';

/**
 * Возвращает свойства input, которые фиксируют поведение управления количеством в корзине.
 * @param {{ qty, allowFloat, onApply }} props Свойства.
 * @return {{ value, onChange, onKeyDown, onBlur }} Свойства input.
 */
export const useCartItemInput = ({ qty: qtyArg, allowFloat, onApply }) => {
  const qty = Number.isFinite(qtyArg) ? qtyArg : 0;

  const [value, setValue] = useState(String(qty));

  // eslint-disable-next-line require-jsdoc
  const checkNeedApply = () => {
    const parsedQty = parseFloat(value) || 0; // ноль, так как можно ввести пустую сроку
    const isDifferent = parsedQty !== qty;

    isDifferent && onApply && onApply(parsedQty);
  };

  useEffect(() => setValue(String(qty)), [qty]);

  return {
    value,

    onChange: e => {
      setValue(formatQtyString(e.target.value, { allowFloat }));
    },

    onKeyDown: e => {
      e.key === 'Enter' && checkNeedApply();
    },

    onBlur: checkNeedApply,
  };
};
