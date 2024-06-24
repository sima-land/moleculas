import { ProductRow, ProductRowProps } from '@sima-land/moleculas/mobile/components/product-row';
import { ReactNode } from 'react';

export const meta = {
  category: 'mobile/ProductRow',
  title: 'Перемещен в заказ',
  parameters: {
    layout: 'padded',
  },
};

const productData: ProductRowProps = {
  itemUrl: 'https://www.sima-land.ru',
  imageUrl: 'https://cdn3.static1-sima-land.com/items/4243920/0/280.jpg?v=1584652193',
  name: 'Достаточно длинное тестовое название (возможно оно даже не влезет полностью)',
  sid: 123456,
  count: 12,
  unit: 'шт.',
  currencyGrapheme: 'р',
  commonPrice: 1234 * 12,
  itemPrice: 1234,
};

function Container({ children }: { children: ReactNode }) {
  return <div style={{ width: '480px', margin: '80px auto' }}>{children}</div>;
}

export default function MoveOrder() {
  return (
    <Container>
      <ProductRow {...productData} movedOrderId={20304} />
    </Container>
  );
}
