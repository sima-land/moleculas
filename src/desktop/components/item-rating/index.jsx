import React from 'react';
import { Rating } from '@dev-dep/ui-nucleons/rating';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Box } from '@dev-dep/ui-nucleons/box';

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
    <Rating value={value} />
    {Boolean(reviewsCount) && (
      <Box marginLeft={2} dangerouslySetInlineStyle={{ __style: { paddingBottom: '2px' } }}>
        <Text color='gray38' size={12} children={reviewsCount} />
      </Box>
    )}
  </Box>
);

export default ItemRating;
