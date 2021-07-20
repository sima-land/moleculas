import { useCallback, useEffect, useRef, useState } from 'react';
import { formatQtyString } from '../../helpers/format-qty-string';
import { useIdentityRef } from '@sima-land/ui-nucleons/hooks/identity';

/**
 * Возвращает свойства input, которые фиксируют поведение управления количеством в корзине.
 * @param props Свойства.
 * @return Свойства input.
 */
export const useCartItemInput = ({ qty: qtyArg, allowFloat, onApply }: {
  qty: number
  onApply: (newQty: number) => void
  allowFloat?: boolean
}) => {
  const qty = Number.isFinite(qtyArg) ? qtyArg : 0;

  const [value, setValue] = useState(String(qty));

  const focused = useRef(false);

  const checker = useIdentityRef(useCallback(() => {
    const parsedQty = parseFloat(value) || 0; // ноль, так как можно ввести пустую сроку
    const isDifferent = parsedQty !== qty;

    isDifferent && onApply(parsedQty);
  }, [qty, value, onApply]));

  useEffect(() => setValue(String(qty)), [qty]);

  // blur не происходит при размонтировании - учитываем
  useEffect(() => () => {
    focused.current && checker.current();
  }, []);

  return {
    value,

    onChange: useCallback(e => {
      setValue(formatQtyString(e.target.value, { allowFloat }));
    }, [allowFloat]),

    onKeyDown: useCallback(e => {
      e.key === 'Enter' && checker.current();
    }, []),

    onFocus: useCallback(() => {
      focused.current = true;
    }, []),

    onBlur: useCallback(() => {
      focused.current = false;
      checker.current();
    }, []),
  };
};
