import React from 'react';
import { render } from '@testing-library/react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { ProductCarousel } from '..';
import { items } from './test-items';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { HoverCard } from '../hover-card';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { Parts, ProductInfo } from '../../../../common/components/product-info';

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
});
