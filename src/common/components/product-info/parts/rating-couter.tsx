import { RatingCounter, type RatingCounterProps } from '../../rating-counter';
import classNames from 'classnames';
import styles from './rating-counter.m.scss';

/**
 * Счетчик рейтинга.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoRatingCounter({
  size = 'unset',
  hoverDisabled = true,
  className,
  ...restProps
}: RatingCounterProps) {
  return (
    <RatingCounter
      {...restProps}
      size={size}
      hoverDisabled={hoverDisabled}
      className={classNames(styles.root, className)}
    />
  );
}
