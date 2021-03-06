import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { ProductCarousel } from '..';
import { items } from './test-items';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { HoverCard } from '../hover-card';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { Parts, ProductInfo } from '../../../../common/components/product-info';
import { LayerProvider } from '@sima-land/ui-nucleons/helpers/layer';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { IntersectionMock } from '@sima-land/ui-nucleons/hooks/intersection/test-utils';

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

  const Find = {
    hoverCard: (wrapper: ReactWrapper) =>
      wrapper.find('div[data-testid="product-card:hover-card"]'),
    hoverCardItemName: (wrapper: ReactWrapper) =>
      wrapper
        .find(HoverCard)
        .find(HoverCard)
        .find(ProductInfo)
        .find('a[data-testid="product-info:name-link"]')
        .text(),
    item: (wrapper: ReactWrapper) => wrapper.find('[data-testid="product-carousel:item"]'),
  };

  it('should set size depend on media query', () => {
    const wrapper = mount(
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

    expect(wrapper).toMatchSnapshot();

    act(() => {
      (useMedia as any).__flag = true;
      wrapper.setProps({ title: 'Hello!' });
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle item mouseenter event', () => {
    const wrapper = mount(
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

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);
  });

  it('should handle hover card mouseleave', () => {
    const wrapper = mount(
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

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);

    act(() => {
      (Find.hoverCard(wrapper).prop('onMouseLeave') as any)();
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(0);
  });

  it('should handle carousel slide', () => {
    jest.useFakeTimers();

    const wrapper = mount(
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
      </ProductCarousel>,
    );

    act(() => {
      (wrapper.find(Carousel).prop('onChangeTargetIndex') as any)();
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(0);

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(0);

    jest.advanceTimersByTime(400);

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);
  });

  it('should handle layer', () => {
    const { getByTestId, getAllByTestId } = render(
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

    fireEvent.mouseEnter(getAllByTestId('product-carousel:item')[0]);

    const carouselItems = getAllByTestId('product-carousel:item');
    jest.spyOn(carouselItems[carouselItems.length - 1], 'getBoundingClientRect').mockReturnValue({
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
              <Parts.CartControl stepText='???? 5 ????'>
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

    expect(spy).toBeCalledTimes(0);

    intersectionMock.changeElementState({
      target: getByTestId('product-carousel:root'),
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy).toBeCalledTimes(1);
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

    expect(spy).toBeCalledTimes(0);

    intersectionMock.changeElementState({
      target: getByTestId('product-carousel:root'),
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy).toBeCalledTimes(1);
  });
});
