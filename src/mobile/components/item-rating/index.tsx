import React from 'react';
import { Box } from '@dev-dep/ui-nucleons/box';
import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import { COLORS } from '@dev-dep/ui-nucleons/colors';
import classnames from 'classnames/bind';
import StarSVG from '../../../common/icons/filled-rate.svg';
import styles from './item-rating.module.scss';

export interface ItemRatingProps {
  value?: number
  marginTop?: number
  reviewsCount?: number
}

const cx = classnames.bind(styles);

/**
 * Компонент оценки товара.
 * @param props Свойства компонента.
 * @param props.value Оценка товара.
 * @param props.marginTop Отступ сверху по дизайн-системе.
 * @param props.reviewsCount Количество отзывов.
 * @return Компонент оценки товара.
 */
export const ItemRating = ({
  value = 0,
  marginTop,
  reviewsCount,
}: ItemRatingProps) => (
  <Box
    display='flex'
    direction='row'
    marginTop={marginTop}
    alignItems='center'
  >
    <StarSVG fill={COLORS.get('additional-amber')} />

    {reviewsCount && (
      <>
        <div className={cx('text', 'value')}>
          {value.toFixed(1).replace('.', ',')}
        </div>
        <div className={cx('text', 'count')}>
          {reviewsCount}
          {' '}
          {getDeclination(reviewsCount, [
            'отзыв',
            'отзыва',
            'отзывов',
          ])}
        </div>
      </>
    )}
  </Box>
);

export default ItemRating;
