import React from 'react';
import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import { ProductCard } from '..';
import { ProductData } from '../../../../common/components/product-info';

describe('ProductCard', () => {
  const product: ProductData = {
    name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nulla.',
    url: 'https://sima-land.ru',
    price: 1200,
    oldPrice: 1450,
    currencyGrapheme: '₽',
    imageSrc: 'https://picsum.photos/240',
    badges: [
      { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
      { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
      { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
      { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
    ],
  };

  it('should renders correctly', () => {
    const { container } = render(
      <ProductCard
        style={{ width: '240px' }}
        data={product}
        className='test-class'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle slots in children', () => {
    const { container } = render(
      <ProductCard data={product}>
        <ProductCard.CartControl stepText='hello' markupText='world'>
          <button>Add to cart</button>
        </ProductCard.CartControl>
      </ProductCard>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render cart control loading state', async () => {
    const { baseElement } = render(
      <ProductCard data={product}>
        <ProductCard.CartControl loading stepText='hello' markupText='world'>
          <button>Add to cart</button>
        </ProductCard.CartControl>
      </ProductCard>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should handle "onLinkClick" prop', async () => {
    const spy = jest.fn();

    const { findByTestId } = render(
      <ProductCard
        data={product}
        onLinkClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    Simulate.click(await findByTestId('product-info:image-link'));

    expect(spy).toBeCalledTimes(1);

    Simulate.click(await findByTestId('product-info:name-link'));

    expect(spy).toBeCalledTimes(2);
  });

  it('should handle image button click callbacks', () => {
    const spy = jest.fn();

    const { container } = render(
      <ProductCard
        data={product}
        onQuickViewClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    Simulate.click(container.querySelector('[data-testid="quick-view-button"]') as any);

    expect(spy).toBeCalledTimes(1);
  });

  it('should show/hide hint for quick view button', async () => {
    const { baseElement, findByTestId } = render(
      <ProductCard data={product} />
    );

    expect(baseElement.querySelectorAll('[data-testid="hint"]')).toHaveLength(0);

    Simulate.mouseEnter(await findByTestId('quick-view-button'));

    expect(baseElement.querySelectorAll('[data-testid="hint"]')).toHaveLength(1);

    Simulate.mouseLeave(await findByTestId('quick-view-button'));

    expect(baseElement.querySelectorAll('[data-testid="hint"]')).toHaveLength(0);
  });
});
