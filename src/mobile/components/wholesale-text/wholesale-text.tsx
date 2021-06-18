import React from 'react';
import classnames from 'classnames';
import styles from './wholesale-text.module.scss';

/**
 * Компонент текста крупного опта.
 * @param props Свойства компонента.
 * @param props.text Текст крупного опта.
 * @param props.className Дополнительный класс компонента.
 * @return Элемент.
 */
const WholesaleText = ({
  text,
  className,
}: {
  text?: string
  className?: string
}) => (
  <span className={classnames(styles.root, className)}>{text}</span>
);

export default WholesaleText;
