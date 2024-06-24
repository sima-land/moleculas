import { ProductImage } from '@sima-land/moleculas/common/components/product-image';

export const meta = {
  category: 'common/ProductImage',
  title: 'Ошибка загрузки',
  parameters: {
    layout: 'padded',
  },
};

export default function Broken() {
  return (
    <>
      <ProductImage src='/missing.jpg' />
    </>
  );
}
