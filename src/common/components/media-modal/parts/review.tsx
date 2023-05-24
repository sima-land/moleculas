import React, { ReactNode } from 'react';
import { Rating } from '@sima-land/ui-nucleons/rating';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import styles from './review.module.scss';

export interface ReviewProps {
  rating?: number;
  ratingPlaceholder?: string;
  author?: string;
  children?: ReactNode;
}

/**
 * Отзыв.
 * @param props Свойства.
 * @return Элемент.
 */
export function Review({ rating, ratingPlaceholder, author, children }: ReviewProps) {
  return (
    <div className={styles.root}>
      <div className={styles.rating}>
        {typeof rating === 'number' ? <Rating size='s' value={rating} /> : ratingPlaceholder}
      </div>

      <div className={styles.author}>{author}</div>

      <div className={styles.link}>
        <TextButton size='s'>Перейти к отзыву</TextButton>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
