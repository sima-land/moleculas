import React from 'react';
import classnames from 'classnames';
import styles from './image.scss';

/**
 * Компонент изображения с наложением по гайдам.
 * @param {Object} props Свойства.
 * @return {ReactElement} Элемент.
 */
export const Image = ({ src, alt, width, height, className, ...restProps }) => (
  <div {...restProps} className={classnames(styles.root, className)}>
    <img {...{ src, alt, width, height }} />
  </div>
);
