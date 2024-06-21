import { ProductImage } from '@sima-land/moleculas/common/components/product-image';
import bowl from './images/bowl.jpg';

export default {
  title: 'common/ProductImage',
  component: ProductImage,
  parameters: {
    layout: 'padded',
  },
};

export function Resize() {
  return (
    <>
      <ProductImage
        src={bowl}
        style={{
          '--product-image-width': '480px',
          '--product-image-height': '240px',
          '--product-image-object-fit': 'cover',
        }}
      />
    </>
  );
}

Resize.storyName = 'Размер и заполнение';
