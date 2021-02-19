import React from 'react';
import Box from '@dev-dep/ui-nucleons/box';
import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import { COLORS } from '@dev-dep/ui-nucleons/constants';
import classnames from 'classnames/bind';
import StarSVG from '../../../common/icons/filled-rate.svg';
import styles from './item-rating.scss';

const cx = classnames.bind(styles);

const reviewsDeclinations = Object.freeze([
  'отзыв',
  'отзыва',
  'отзывов',
]);

/**
 * Компонент оценки товара.
 * @param {Object} props Свойства компонента.
 * @param {number} props.value Оценка товара.
 * @param {number} [props.marginTop] Отступ сверху по дизайн-системе.
 * @param {number} props.reviewsCount Количество отзывов.
 * @return {ReactElement} Компонент оценки товара.
 */
export const ItemRating = ({
  value = 0,
  marginTop,
  reviewsCount,
}) => (
  <Box
    display='flex'
    direction='row'
    marginTop={marginTop}
    alignItems='center'
  >
    <StarSVG
      fill={COLORS.get('additional-amber')}
      value={value}
    />
    {Boolean(reviewsCount) && (
      <>
        <div className={cx('text', 'value')}>
          {value.toFixed(1).replace('.', ',')}
        </div>
        <div className={cx('text', 'count')}>
          {reviewsCount}
          {' '}
          {getDeclination(reviewsCount, reviewsDeclinations)}
        </div>
      </>
    )}
  </Box>
);

export default ItemRating;
