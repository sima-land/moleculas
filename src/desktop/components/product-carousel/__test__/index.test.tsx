import { fireEvent, render } from '@testing-library/react';
import { ProductCarousel } from '..';
import { items } from './test-items';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { Parts, ProductInfo } from '../../../../common/components/product-info';
import { LayerProvider } from '@sima-land/ui-nucleons/helpers/layer';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { IntersectionMock } from '@sima-land/ui-nucleons/hooks/intersection/test-utils';

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

jest.mock('@sima-land/ui-nucleons/hooks/media', () => {
  const original = jest.requireActual('@sima-land/ui-nucleons/hooks/media');

  const fakeUseMedia = (): boolean => Boolean((fakeUseMedia as any).__flag);

  return {
    ...original,
    __esModule: true,
    useMedia: fakeUseMedia,
  };
});

describe('<ProductCarousel />', () => {
  const hoverCardItemNameSelector =
    '[data-testid="product-card:hover-card"] [data-testid="product-info:name-link"]';
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
            <Parts.Image src={item.imageSrc} href={item.url} onClick={spies.imageClick} />

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

  it('should render footer of carousel item only when hover card disabled', () => {
    const { getAllByTestId } = render(
      <ProductCarousel withHoverCard={false}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Footer>Some text of footer</Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>,
    );

    expect(getAllByTestId('product-carousel:item').at(0)?.textContent).toBe('Some text of footer');
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
          <Parts.Image src={items[0].imageSrc} href={items[0].url} onClick={spies.imageClick} />

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

  it('should renders correctly withhout children', () => {
    const { container } = render(<ProductCarousel />);

    expect(container).toMatchSnapshot();
  });

  it('should set size depend on media query', () => {
    const { container, rerender } = render(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

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

    expect(container).toMatchSnapshot();

    (useMedia as any).__flag = true;

    rerender(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

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

    expect(container).toMatchSnapshot();
  });

  it('should handle item mouseenter event', () => {
    const { container, getAllByTestId } = render(
      <ProductCarousel itemSize={{ xs: 3 }} className='additional-class' withHoverCard>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

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

    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);

    expect(container.querySelector(hoverCardItemNameSelector)?.textContent).toBe(items[0].name);
  });

  it('should handle hover card mouseleave', () => {
    const { container, getByTestId, getAllByTestId, queryAllByTestId } = render(
      <ProductCarousel itemSize={{ xs: 3 }} className='additional-class' withHoverCard>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

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

    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);

    expect(container.querySelector(hoverCardItemNameSelector)?.textContent).toBe(items[0].name);

    fireEvent.mouseLeave(getByTestId('product-card:hover-card'));

    expect(queryAllByTestId('product-card:hover-card')).toHaveLength(0);
  });

  it('should handle carousel slide', () => {
    jest.useFakeTimers();

    const { container, rerender, queryAllByTestId, getAllByTestId } = render(
      <ProductCarousel itemSize={{ xs: 3 }} withHoverCard>
        {items.slice(0, 5).map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

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
      <ProductCarousel itemSize={{ xs: 3 }} withHoverCard>
        {items.slice(0, 5).map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

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

    fireEvent.click(getAllByTestId('arrow-button')[1]);

    expect(queryAllByTestId('product-card:hover-card')).toHaveLength(0);

    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);

    expect(queryAllByTestId('product-card:hover-card')).toHaveLength(0);

    jest.advanceTimersByTime(400);

    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);

    expect(container.querySelector(hoverCardItemNameSelector)?.textContent).toBe(items[0].name);
  });

  it('should handle layer', () => {
    const { container, getByTestId, getAllByTestId } = render(
      <LayerProvider value={20}>
        <ProductCarousel itemSize={{ xs: 3 }} withHoverCard>
          {items.map((item, index) => (
            <ProductInfo key={index}>
              <Parts.Image src={item.imageSrc} href={item.url} />

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

    const viewportEl = container.querySelector('.draggable-container.full-size') as HTMLElement;
    const itemsEls = getAllByTestId('product-carousel:item');

    jest.spyOn(viewportEl, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      left: 0,
      bottom: 0,
      right: 400,
      x: 0,
      y: 0,
      width: 400,
      height: 0,
      toJSON() {
        return '';
      },
    });
    jest.spyOn(itemsEls[itemsEls.length - 1], 'getBoundingClientRect').mockReturnValue({
      top: 0,
      left: 0,
      bottom: 0,
      right: 500,
      x: 0,
      y: 0,
      width: 500,
      height: 0,
      toJSON() {
        return '';
      },
    });

    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);
    fireEvent.resize(window);

    expect(getByTestId('product-card:hover-card').style.zIndex).toBe('21');
    getAllByTestId('arrow-button').forEach(button => {
      expect(button.style.zIndex).toBe('22');
    });
  });

  it('should handle removing content when hover card is shown', () => {
    const TestComponent = ({ withContent }: { withContent?: boolean }) => (
      <ProductCarousel withHoverCard>
        {(withContent ? items : []).map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.CartControl stepText='По 5 шт'>
                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
              </Parts.CartControl>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    );

    const { queryAllByTestId, getAllByTestId, rerender } = render(<TestComponent withContent />);

    expect(queryAllByTestId('product-card:hover-card')).toHaveLength(0);
    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);
    expect(queryAllByTestId('product-card:hover-card')).toHaveLength(1);

    expect(() => {
      rerender(<TestComponent withContent={false} />);
    }).not.toThrow();
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
            <Parts.Image src={item.imageSrc} href={item.url} />

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
            <Parts.Image src={item.imageSrc} href={item.url} />

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
