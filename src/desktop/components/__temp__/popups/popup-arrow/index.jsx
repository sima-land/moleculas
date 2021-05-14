import React from 'react';
import { createArrowStyles } from './create-arrow-styles';

/**
 * Стрелка-треугольник.
 * @param {Object} props Свойства компонента.
 * @param {Object} [props.position] Координаты позиционирования.
 * @return {ReactElement} Стрелка-треугольник.
 */
const PopupArrow = ({ position = {}, ...restProps }) =>
  <span className={createArrowStyles(restProps)} style={position} />;

export default PopupArrow;
