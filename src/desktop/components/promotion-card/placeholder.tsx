import { HTMLAttributes } from 'react';
import styles from './placeholder.m.scss';
import cn from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PromotionCardPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  //
}

/**
 * Компонент отображения состояния загрузки карточки акции.
 * @param props Свойства div.
 * @return Элемент.
 */
export const PromotionCardPlaceholder = (props: PromotionCardPlaceholderProps) => (
  <div data-testid='promotion-card:placeholder' {...props}>
    <div className={cn(styles.part, styles.banner)} />
    <div className={cn(styles.part, styles.text)} />
    <div className={cn(styles.part, styles.text)} />
  </div>
);
