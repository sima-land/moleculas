import { ProductImage } from '@sima-land/moleculas/common/components/product-image';

export default {
  title: 'common/ProductImage',
  component: ProductImage,
  parameters: {
    layout: 'padded',
  },
};

export function Broken() {
  return (
    <>
      <ProductImage src='/missing.jpg' />
    </>
  );
}

Broken.storyName = 'Ошибка загрузки';
