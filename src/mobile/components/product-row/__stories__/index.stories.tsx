import React, { ReactNode } from 'react';
import { ProductRow, ProductRowProps } from '..';

export default {
  title: 'mobile/ProductRow',
  component: ProductRow,
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
  return <div style={{ width: '480px', height: '160px', margin: '80px auto' }}>{children}</div>;
}

export function Primary() {
  return (
    <Container>
      <ProductRow
        {...productData}
        onActionsClick={() => alert('Это всего лишь просто пример')}
        onWishButtonClick={() => alert('Мы учтём, что вам это нравится')}
      />
    </Container>
  );
}

Primary.storyName = 'Простой пример';

export function Wished() {
  return (
    <Container>
      <ProductRow
        {...productData}
        isWished
        onActionsClick={() => alert('Это всего лишь просто пример')}
        onWishButtonClick={() => alert('Мы учтём, что вам это нравится')}
      />
    </Container>
  );
}

Wished.storyName = 'В избранном';

export function InitialCount() {
  return (
    <Container>
      <ProductRow {...productData} initialCount={12} />
    </Container>
  );
}

InitialCount.storyName = 'Было в заказе';

export function MoveOrder() {
  return (
    <Container>
      <ProductRow {...productData} movedOrderId={20304} />
    </Container>
  );
}

MoveOrder.storyName = 'Перемещен в заказ';
