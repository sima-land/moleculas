import { act, fireEvent, render } from '@testing-library/react';
import { ProductCarousel } from '../product-carousel';
import { items } from './test-items';
import { MatchMediaContext } from '@sima-land/ui-nucleons/context';
import { Parts, ProductInfo } from '../../../../common/components/product-info';
import { LayerProvider } from '@sima-land/ui-nucleons/helpers';
import { IntersectionMock } from '@sima-land/ui-nucleons/hooks/use-intersection/test-utils';

function setBoundingClientRect(
  element: Element,
  { x = 0, y = 0, width = 0, height = 0 }: DOMRectInit,
) {
  const rect: DOMRect = {
    x,
    y,
    width,
    height,
    get top() {
      return y;
    },
    get right() {
      return x + width;
    },
    get bottom() {
      return y + height;
    },
    get left() {
      return x;
    },
    toJSON() {
      return JSON.stringify(rect);
    },
  };

  jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => rect);
}

describe('ProductCarousel', () => {
  it('should renders correctly', () => {
    const spies = {
      imageClick: jest.fn(),
      favoriteClick: jest.fn(),
      quickViewClick: jest.fn(),
      badgeClick: jest.fn(),
      titleClick: jest.fn(),
      trademarkClick: jest.fn(),
    };

    const { container } = render(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image
              images={[{ src: item.imageSrc }]}
              href={item.url}
              onClick={spies.imageClick}
            />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url} onClick={spies.titleClick}>
              {item.name}
            </Parts.Title>
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should ignore non "valid element" children of ProductInfo', () => {
    const { getAllByTestId } = render(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            {false}
            {null}
            some string here
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    expect(getAllByTestId('product-carousel:item').at(0)?.textContent).toBe('');
  });

  it('should renders correctly with only one item', () => {
    const spies = {
      imageClick: jest.fn(),
      favoriteClick: jest.fn(),
      quickViewClick: jest.fn(),
      badgeClick: jest.fn(),
      titleClick: jest.fn(),
      trademarkClick: jest.fn(),
    };

    const { container } = render(
      <ProductCarousel>
        <ProductInfo>
          <Parts.Image
            images={[{ src: items[0].imageSrc }]}
            href={items[0].url}
            onClick={spies.imageClick}
          />

          <Parts.Prices
            price={items[0].price}
            oldPrice={items[0].oldPrice}
            currencyGrapheme={items[0].currencyGrapheme}
          />

          <Parts.Title href={items[0].url} onClick={spies.titleClick}>
            {items[0].name}
          </Parts.Title>
        </ProductInfo>
      </ProductCarousel>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should renders correctly without children', () => {
    const { container } = render(<ProductCarousel />);

    expect(container).toMatchSnapshot();
  });

  it('should set size depend on media query', () => {
    let matches = false;

    const fakeMql = {
      get matches() {
        return matches;
      },
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    } as unknown as MediaQueryList;

    const fakeMatchMedia = () => fakeMql;

    const { container, rerender } = render(
      <MatchMediaContext.Provider value={{ matchMedia: fakeMatchMedia }}>
        <ProductCarousel>
          {items.map((item, index) => (
            <ProductInfo key={index}>
              <Parts.Image images={[{ src: item.imageSrc }]} href={item.url} />

              <Parts.Prices
                price={item.price}
                oldPrice={item.oldPrice}
                currencyGrapheme={item.currencyGrapheme}
              />

              <Parts.Title href={item.url}>{item.name}</Parts.Title>
            </ProductInfo>
          ))}
        </ProductCarousel>
      </MatchMediaContext.Provider>,
    );

    expect(container).toMatchSnapshot();

    act(() => {
      matches = true;
      (fakeMql.addEventListener as jest.Mock).mock.calls[0][1]({ type: 'change', matches: true });
    });

    rerender(
      <MatchMediaContext.Provider value={{ matchMedia: fakeMatchMedia }}>
        <ProductCarousel>
          {items.map((item, index) => (
            <ProductInfo key={index}>
              <Parts.Image images={[{ src: item.imageSrc }]} href={item.url} />

              <Parts.Prices
                price={item.price}
                oldPrice={item.oldPrice}
                currencyGrapheme={item.currencyGrapheme}
              />

              <Parts.Title href={item.url}>{item.name}</Parts.Title>
            </ProductInfo>
          ))}
        </ProductCarousel>
      </MatchMediaContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle layer', () => {
    const { rerender, container, getAllByTestId, queryAllByTestId } = render(
      <LayerProvider value={20}>
        <ProductCarousel itemSize={{ xs: 3 }}>
          {items.map((item, index) => (
            <ProductInfo key={index}>
              <Parts.Image images={[{ src: item.imageSrc }]} href={item.url} />

              <Parts.Prices
                price={item.price}
                oldPrice={item.oldPrice}
                currencyGrapheme={item.currencyGrapheme}
              />

              <Parts.Title href={item.url}>{item.name}</Parts.Title>
            </ProductInfo>
          ))}
        </ProductCarousel>
      </LayerProvider>,
    );

    setBoundingClientRect(container.querySelector('.draggable-container') as any, {
      width: 100,
      height: 20,
    });
    [...container.querySelectorAll('.carousel-items-container > *')].forEach((item, index) => {
      setBoundingClientRect(item, {
        x: index * 30,
        y: 0,
        width: 30,
        height: 20,
      });
    });
    rerender(
      <LayerProvider value={20}>
        <ProductCarousel itemSize={{ xs: 3 }}>
          {items.map((item, index) => (
            <ProductInfo key={index}>
              <Parts.Image images={[{ src: item.imageSrc }]} href={item.url} />

              <Parts.Prices
                price={item.price}
                oldPrice={item.oldPrice}
                currencyGrapheme={item.currencyGrapheme}
              />

              <Parts.Title href={item.url}>{item.name}</Parts.Title>
            </ProductInfo>
          ))}
        </ProductCarousel>
      </LayerProvider>,
    );

    fireEvent.resize(window);

    expect(queryAllByTestId('arrow-button')).toHaveLength(2);

    getAllByTestId('arrow-button').forEach(button => {
      expect(button.style.zIndex).toBe('22');
    });
  });

  it('should handle empty object as itemSize and get default size', () => {
    const { container } = render(
      <ProductCarousel itemSize={{}}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Footer>Some text of footer</Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    container.querySelectorAll<HTMLElement>('.item').forEach(el => {
      expect(el.classList).toContain('size-xs-4');
      expect(el.classList).toContain('size-s-3');
      expect(el.classList).toContain('size-m-2');
      expect(el.classList).toContain('size-l-2');
      expect(el.classList).toContain('size-xl-2');
    });
  });

  it('should handle unset as itemSize prop value', () => {
    const { container } = render(
      <ProductCarousel itemSize='unset'>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Footer>Some text of footer</Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    expect(container.querySelectorAll('.item')).toHaveLength(10);

    container.querySelectorAll<HTMLElement>('.item').forEach(el => {
      expect(el.className).not.toContain('.size-xs-');
      expect(el.className).not.toContain('.size-s-');
      expect(el.className).not.toContain('.size-m-');
      expect(el.className).not.toContain('.size-l-');
      expect(el.className).not.toContain('.size-xl-');
    });
  });

  it('should ignore not valid children', () => {
    const { container } = render(
      <ProductCarousel itemSize='unset'>
        <ProductInfo>
          <Parts.Footer>Some text of footer</Parts.Footer>
        </ProductInfo>
        <p>Hello</p>
        <div>World</div>
        FooBar
      </ProductCarousel>,
    );

    expect(container.querySelectorAll('.item')).toHaveLength(1);
    expect(container.textContent).not.toContain('Hello');
    expect(container.textContent).not.toContain('World');
    expect(container.textContent).not.toContain('FooBar');
  });
});

describe('intersections', () => {
  const intersectionMock = new IntersectionMock();

  beforeAll(() => {
    intersectionMock.apply();
  });

  afterAll(() => {
    intersectionMock.restore();
  });

  it('should call "onNeedRequest" prop', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ProductCarousel onNeedRequest={spy}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image images={[{ src: item.imageSrc }]} href={item.url} />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    intersectionMock.changeElementState({
      target: getByTestId('product-carousel:root'),
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call "onInViewport" prop', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ProductCarousel onInViewport={spy}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image images={[{ src: item.imageSrc }]} href={item.url} />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    intersectionMock.changeElementState({
      target: getByTestId('product-carousel:root'),
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
