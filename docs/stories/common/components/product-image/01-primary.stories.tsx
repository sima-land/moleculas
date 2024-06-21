import { ProductImage } from '@sima-land/moleculas/common/components/product-image';
import bowl from './images/bowl.jpg';

export const meta = {
  category: 'common/ProductImage',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <>
      <ProductImage src={bowl} />
    </>
  );
}
