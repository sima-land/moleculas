import { useEffect, useRef, useState } from 'react';
import on from '@dev-dep/ui-nucleons/helpers/on';

/**
 * Управляет расположением и появлением тултипа.
 * @return {Object} Объект с рефом и функциями для управления тултипом.
 */
export const useControlTooltip = () => {
  const [canShowTooltip, setCanShowTooltip] = useState(true);
  const tooltipRef = useRef();

  /**
   * Скрывает тултип.
   */
  const hideTooltip = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = 0;
    }
  };

  useEffect(() => on(document, 'mousedown', () => {
    setCanShowTooltip(false);
    hideTooltip();
  }), []);

  useEffect(() => on(document, 'mouseup', () => setCanShowTooltip(true)), []);

  /**
   * Происходит при наведении на кнопку быстрого просмотра.
   * @param {Event} event Событие при наведении на кнопку быстрого просмотра.
   */
  const onHoverQuickViewButton = event => {
    if (canShowTooltip && tooltipRef.current) {
      const { left, top } = event.currentTarget.getBoundingClientRect();
      tooltipRef.current.style.right = `calc(100% - ${left - 8}px)`; // 8px - отступ от иконки.
      tooltipRef.current.style.top = `${top + window.scrollY + 12}px`; // 12px - половина никонки.
      tooltipRef.current.style.opacity = 1;
    }
  };

  return {
    tooltipRef,
    onHoverQuickViewButton,
    onLeaveQuickViewButton: hideTooltip,
  };
};
