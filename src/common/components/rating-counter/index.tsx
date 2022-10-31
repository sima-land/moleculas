import React, { HTMLAttributes } from 'react';
import StarSVG from './star.svg';
import getDeclination from '@sima-land/ui-nucleons/helpers/get-declination';
import classNames from 'classnames/bind';
import styles from './rating-counter.module.scss';

export type RatingCounterSize = 's' | 'm' | 'unset';

interface CustomProps {
  /**
   * Размер.
   * При указании "unset" необходимо определить стили самостоятельно с помощью миксина из rating-counter-util.scss.
   */
  size?: RatingCounterSize;

  /** Значение рейтинга. */
  value: number;

  /** Количество отзывов. */
  reviewCount: number;

  /** Нужно ли отключить эффект при наведении. */
  hoverDisabled?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export type RatingCounterProps = CustomProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CustomProps>;

const cx = classNames.bind(styles);

/**
 * Счетчик рейтинга.
 * @param props Свойства.
 * @return Элемент.
 */
export function RatingCounter({
  size = 's',
  value,
  reviewCount,
  className,
  hoverDisabled,
  'data-testid': testId = 'rating-counter',
  ...restProps
}: RatingCounterProps) {
  return (
    <div
      className={cx(
        'root',
        `size-${size}`,
        !(value > 0) && 'empty',
        hoverDisabled && 'hover-disabled',
        className,
      )}
      data-testid={testId}
      {...restProps}
    >
      <StarSVG className={cx('star')} />

      {value > 0 && <span className={cx('value')}>{String(value).replace('.', ',')}</span>}

      <span className={cx('count')}>
        {reviewCount > 0
          ? `${reviewCount} ${getDeclination(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}`
          : 'Нет отзывов'}
      </span>
    </div>
  );
}
