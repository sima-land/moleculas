import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ProductCard } from '..';
import { ProductInfo, Parts } from '../../../../common/components/product-info';
import { Button } from '@sima-land/ui-nucleons/button';

const data = {
  name: 'Some product',
  url: 'https://www.products.com/some-product',
  imageSrc: 'https://www.images.com/some-product/1',
  price: 23476.23,
  oldPrice: 25000,
  currencyGrapheme: '$',
  trademark: { name: 'Test Trademark', url: 'https://www.test-trademark.ru/' },
  cart: {
    stepInfo: 'По 7 шт',
    markupInfo: 'Комплектация + 50 ₽ при покупке до 20 шт',
  },
} as const;

describe('ProductCard', () => {
  it('should render base info correctly', () => {
    const { container, queryByTestId } = render(
      <ProductCard>
        <ProductInfo>
          <Parts.Image src={data.imageSrc} href={data.url} />

          <Parts.Prices
            price={data.price}
            oldPrice={data.oldPrice}
            currencyGrapheme={data.currencyGrapheme}
          />

          <Parts.Title href={data.url}>{data.name}</Parts.Title>

          <Parts.Footer>
            <Parts.CartControl>
              <Button>В корзину</Button>
            </Parts.CartControl>
          </Parts.Footer>
        </ProductInfo>
      </ProductCard>,
    );

    expect(container).toMatchSnapshot();

    expect(queryByTestId('product-info:footer')).toBe(null);
  });

  it('should render hover card correctly', () => {
    const { container, getByTestId, queryByTestId } = render(
      <ProductCard>
        <ProductInfo>
          <Parts.Image src={data.imageSrc} href={data.url} />

          <Parts.Prices
            price={data.price}
            oldPrice={data.oldPrice}
            currencyGrapheme={data.currencyGrapheme}
          />

          <Parts.Title href={data.url}>{data.name}</Parts.Title>

          <Parts.Footer>
            <Parts.CartControl>
              <Button>В корзину</Button>
            </Parts.CartControl>
          </Parts.Footer>
        </ProductInfo>
      </ProductCard>,
    );

    expect(queryByTestId('product-card:hover-card')).toBe(null);
    expect(queryByTestId('product-info:footer')).toBe(null);

    fireEvent.mouseEnter(getByTestId('product-card:info'));

    expect(container).toMatchSnapshot();
    expect(queryByTestId('product-card:hover-card')).not.toBe(null);
    expect(queryByTestId('product-info:footer')).not.toBe(null);

    fireEvent.mouseLeave(getByTestId('product-card:hover-card'));

    expect(queryByTestId('product-card:hover-card')).toBe(null);
    expect(queryByTestId('product-info:footer')).toBe(null);
  });
});
