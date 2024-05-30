import { ProductImage } from '@sima-land/moleculas/common/components/product-image';
import bowl from './images/bowl.jpg';

export default {
  title: 'common/ProductImage',
  component: ProductImage,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <ProductImage src={bowl} />
    </>
  );
}

Primary.storyName = 'Простой пример';
