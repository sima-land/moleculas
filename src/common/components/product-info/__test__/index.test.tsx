import React from 'react';
import { render } from '@testing-library/react';
import { ProductInfo, ProductInfoProps } from '..';

const exampleData: ProductInfoProps['data'] = {
  name: 'Some product',
  imageSrc: 'https://www.images.com/some-product/1',
  url: 'https://www.products.com/some-product',
  price: 23476.23,
  currencyGrapheme: '$',
  oldPrice: 25000,
  badges: [
    { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
    { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
    { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
    { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
  ],
};

describe('ProductInfo', () => {
  it('should renders correctly', () => {
    const { baseElement } = render(
      <ProductInfo data={exampleData}>
        <ProductInfo.OnImage>
          <div className='image-button'>Do something</div>
        </ProductInfo.OnImage>
      </ProductInfo>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should renders correctly with trademark', () => {
    const { container } = render(
      <ProductInfo data={{ ...exampleData, trademark: { name: 'Hello', url: 'www.hello.com' } }} />,
    );

    expect(container).toMatchSnapshot();
  });
});
