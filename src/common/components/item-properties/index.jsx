import React, { Fragment } from 'react';
import Text from '@dev-dep/ui-nucleons/text';

/**
 * @typedef {Object} ItemProperty Краткая характеристика товара.
 * @property {string} text Значение характеристики.
 * @property {string} [href] URI ссылки.
 */

/**
 * Краткая характеристика товара.
 * @param {Object} props Свойства компонента.
 * @param {ItemProperty[]} props.values Список характеристик.
 * @param {string} [props.specClassName=''] Дополнительный класс для одной характеристики.
 * @param {string} [props.color] Цвет текста.
 * @param {number} [props.lineHeight] Межстрочное расстояние.
 * @param {number} [props.size] Размер шрифта.
 * @return {ReactElement[]} Элемент краткой характеристики товара.
 */
export const ItemProperties = ({
  values,
  specClassName = '',
  color = 'gray38',
  lineHeight = 20,
  size = 14,
}) => Array.isArray(values) && values.map((spec, index) => Boolean(spec.text) && (
  <Fragment key={index}>
    <span className={specClassName}>
      <Text color={color} lineHeight={lineHeight} size={size}>
        {spec.text};
      </Text>
    </span>
  </Fragment>
));

export default ItemProperties;
