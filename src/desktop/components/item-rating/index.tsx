import React from 'react';
import { Rating } from '@dev-dep/ui-nucleons/rating';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Box } from '@dev-dep/ui-nucleons/box';

export interface ItemRatingProps {
  value?: number
  marginTop?: number
  reviewsCount?: number
}

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
  marginTop = 0,
  reviewsCount,
}: ItemRatingProps) => (
  <Box
    display='flex'
    direction='row'
    marginTop={marginTop}
    alignItems='center'
  >
    <Rating value={value} />
    {Boolean(reviewsCount) && (
      <Box marginLeft={2} dangerouslySetInlineStyle={{ __style: { paddingBottom: '2px' } }}>
        <Text color='gray38' size={12} children={reviewsCount} />
      </Box>
    )}
  </Box>
);

export default ItemRating;
