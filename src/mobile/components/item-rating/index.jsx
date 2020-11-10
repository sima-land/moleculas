import React from 'react';
import Text from '@dev-dep/ui-nucleons/text';
import Box from '@dev-dep/ui-nucleons/box';
import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import Icon from '@dev-dep/ui-nucleons/icon';
import star from '@dev-dep/ui-nucleons/icons/star.svg';

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
  marginTop = 0,
  reviewsCount,
}) => (
  <Box
    display='flex'
    direction='row'
    marginTop={marginTop}
    alignItems='center'
  >
    <Icon
      color='additional-amber'
      icon={star}
      value={value}
      size={11}
    />
    {Boolean(reviewsCount) && (
      <Box dangerouslySetInlineStyle={{ __style: { paddingBottom: '2px', marginLeft: '2px' } }}>
        <Box display='inline' marginRight={2}>
          <Text
            color='additional-amber'
            size={12}
            children={value.toFixed(1)}
            weight={700}
          />
        </Box>
        <Text
          color='gray38'
          size={12}
          children={`${reviewsCount} ${getDeclination(reviewsCount, reviewsDeclinations)}`}
        />
      </Box>
    )}
  </Box>
);

export default ItemRating;
