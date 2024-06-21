import { ProductImage } from '@sima-land/moleculas/common/components/product-image';
import bowl from './images/bowl.jpg';

export const meta = {
  category: 'common/ProductImage',
  title: 'Размер и заполнение',
  parameters: {
    layout: 'padded',
  },
};

export default function Resize() {
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
