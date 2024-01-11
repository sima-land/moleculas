import { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { HoverCard } from '../hover-card';
import { Parts, ProductInfo } from '../../../../common/components/product-info';

describe('HoverCard', () => {
  it('should renders hidden', () => {
    const { container, getByTestId } = render(<HoverCard targetRef={createRef()} />);

    expect(container).toMatchSnapshot();
    expect(getByTestId('product-card:hover-card').classList.contains('hidden')).toBe(true);
  });

  it('should renders with positioning', () => {
    const targetRef = createRef<HTMLDivElement>();

    const itemInfo = {
      url: 'https://www.sima-land.ru/123456',
      name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
      imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
      price: 225,
      oldPrice: 250,
      favorite: false,
      currencyGrapheme: '₽',
      withImageButtons: true,
      markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
    };

    const { container, getByTestId } = render(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard targetRef={targetRef}>
          <ProductInfo>
            <Parts.Title href='https://foo.bar'>{itemInfo.name}</Parts.Title>
          </ProductInfo>
        </HoverCard>
      </>,
    );

    expect(container).toMatchSnapshot();
    expect(getByTestId('product-info:name-link').textContent).toBe(itemInfo.name);
    expect(getByTestId('product-card:hover-card').classList.contains('hidden')).toBe(false);
  });

  it('should handle mouseleave', () => {
    const spy = jest.fn();

    const targetRef = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard targetRef={targetRef} onMouseLeave={spy} />
      </>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.mouseLeave(getByTestId('product-card:hover-card'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
