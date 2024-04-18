import { ReactNode } from 'react';
import { Rating } from '@sima-land/ui-nucleons/rating';
import classNames from 'classnames/bind';
import styles from './review.m.scss';

export interface ReviewProps {
  rating?: number;
  ratingPlaceholder?: ReactNode;
  author?: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
}

const cx = classNames.bind(styles);

/**
 * Отзыв.
 * @param props Свойства.
 * @return Элемент.
 */
export function Review({
  rating,
  ratingPlaceholder,
  author,
  children,
  loading,
  button,
}: ReviewProps) {
  if (loading) {
    return <ReviewSkeleton button={button} />;
  }

  return (
    <div className={cx('root')}>
      <div className={cx('header')}>
        {(rating || ratingPlaceholder || author) && (
          <div className={cx('col', 'meta')}>
            {(typeof rating === 'number' || ratingPlaceholder) && (
              <div className={cx('col', 'rating')}>
                {rating ? <Rating size='s' value={rating} /> : ratingPlaceholder}
              </div>
            )}

            {author && <div className={cx('col', 'author')}>{author}</div>}
          </div>
        )}

        {button && <div className={cx('col', 'button')}>{button}</div>}
      </div>

      {Boolean(children) && <div className={styles.content}>{children}</div>}
    </div>
  );
}

/**
 * Заглушка отзыва.
 * @param props Свойства.
 * @return Элемент.
 */
function ReviewSkeleton({ button }: { button?: ReactNode }) {
  return (
    <div className={cx('root')}>
      <div className={cx('header')}>
        <div className={cx('col', 'meta')}>
          <div className={cx('skeleton', 'skeleton-meta')} />
        </div>
        {button && <div className={cx('col', 'button')}>{button}</div>}
      </div>

      <div className={cx('content')}>
        <div className={cx('skeleton')} />
        <div className={cx('skeleton')} />
      </div>
    </div>
  );
}
