import React, { forwardRef } from 'react';
import styles from './popup.scss';
import classnames from 'classnames';

/**
 * Попап. Базовый вид.
 * @param {Object} props Свойства компонента.
 * @param {*} [props.children] Дочерние элементы.
 * @param {string} [props.additionalClass] Дополнительный класс попапа.
 * @param {Object} ref Реф для DOM-элемента попапа.
 * @return {ReactElement} Попап со скругленными углами, белым фоном и тенью.
 */
const Popup = forwardRef(function Popup ({ children, additionalClass }, ref) {
  return (
    <div ref={ref} className={classnames(styles.popup, additionalClass)}>
      {children}
    </div>
  );
});

export default Popup;
