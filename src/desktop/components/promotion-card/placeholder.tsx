import React from 'react';
import styles from './placeholder.module.scss';
import cn from 'classnames';

/**
 * Компонент отображения состояния загрузки карточки акции.
 * @param props Свойства div.
 * @return Элемент.
 */
export const PromotionCardPlaceholder = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-testid='promotion-card:placeholder' {...props}>
    <div className={cn(styles.part, styles.banner)} />
    <div className={cn(styles.part, styles.text)} />
    <div className={cn(styles.part, styles.text)} />
  </div>
);
