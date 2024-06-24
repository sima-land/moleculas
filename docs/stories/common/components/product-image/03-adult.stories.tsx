import { ProductImage } from '@sima-land/moleculas/common/components/product-image';
import bowl from './images/bowl.jpg';

export const meta = {
  category: 'common/ProductImage',
  title: 'Изображение 18+',
  parameters: {
    layout: 'padded',
  },
};

export default function Adult() {
  return (
    <>
      <ProductImage src={bowl} adult />
    </>
  );
}
