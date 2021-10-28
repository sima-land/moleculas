import React from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Rating } from '@sima-land/ui-nucleons/rating';
import cn from 'classnames';
import styles from './review-info.module.scss';

export interface ReviewInfoProps {
  rating: number;
  author: string;
  onGoToReview?: () => void;
  className?: string;
}

export const ReviewInfo = ({ rating, author, onGoToReview, className }: ReviewInfoProps) => (
  <div className={cn(styles.root, className)}>
    <Rating value={rating} />

    <div className={styles.author}>{author}</div>

    {onGoToReview && (
      <Link
        className={styles.link}
        pseudo
        onClick={onGoToReview}
        data-testid='gallery-modal:go-to-review-link'
      >
        Перейти к отзыву
      </Link>
    )}
  </div>
);
