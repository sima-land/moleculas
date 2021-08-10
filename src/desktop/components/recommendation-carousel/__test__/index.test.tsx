import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { RecommendationCarousel } from '..';
import { items } from './test-items';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { HoverCard } from '../hover-card';
import { ProductCard } from '../product-card';
import { ProductInfo } from '../product-info';
import { Link } from '@sima-land/ui-nucleons/link';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { Stepper } from '@sima-land/ui-nucleons/stepper';

jest.mock('@sima-land/ui-nucleons/hooks/media', () => {
  const original = jest.requireActual('@sima-land/ui-nucleons/hooks/media');

  const fakeUseMedia = (): boolean => Boolean((fakeUseMedia as any).__flag);

  return {
    ...original,
    __esModule: true,
    useMedia: fakeUseMedia,
  };
});

describe('<RecommendationCarousel />', () => {
  const Find = {
    hoverCard: (wrapper: ReactWrapper) => wrapper.find(HoverCard),
    hoverCardItemName: (wrapper: ReactWrapper) => wrapper.find(HoverCard)
      .find(ProductCard)
      .find(ProductInfo)
      .find(Link)
      .text(),
    item: (wrapper: ReactWrapper) => wrapper.find('[data-testid="reco-item"]'),
  };

  it('should renders correctly', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onItemLinkClick" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <RecommendationCarousel
        items={items}
        onItemLinkClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('a[data-testid="product-info:image-link"]').at(1).simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);

    act(() => {
      wrapper.find('a[data-testid="product-info:name-link"]').at(2).simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(2);
  });

  it('should handle "onItemLinkClick" prop missing', () => {
    const wrapper = mount(
      <RecommendationCarousel
        items={items}
      />
    );

    act(() => {
      wrapper.find('a[data-testid="product-info:image-link"]').at(1).simulate('click');
    });
    wrapper.update();

    act(() => {
      wrapper.find('a[data-testid="product-info:name-link"]').at(2).simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "titleTag" prop', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleTag='h1'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty ref', () => {
    const wrapper = mount(
      <RecommendationCarousel items={[]} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should set size depend on media query', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        items={items}
      />
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
      <RecommendationCarousel
        title='Hello, world!'
        titleTag='h1'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
        withHoverCard
      />
    );

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].product.name);
  });

  it('should handle hover card link clicks', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <RecommendationCarousel
        items={items}
        withHoverCard
        onItemLinkClick={spy}
      />
    );

    act(() => {
      Find.item(wrapper).at(1).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(1);

    act(() => {
      Find.hoverCard(wrapper).find('a[data-testid="product-info:image-link"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);

    act(() => {
      Find.hoverCard(wrapper).find('a[data-testid="product-info:name-link"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(2);
  });

  it('should handle hover card link clicks without "onItemLinkClick" prop', () => {
    const wrapper = mount(
      <RecommendationCarousel
        items={items}
        withHoverCard
      />
    );

    act(() => {
      Find.item(wrapper).at(1).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(1);

    act(() => {
      Find.hoverCard(wrapper).find('a[data-testid="product-info:image-link"]').simulate('click');
    });
    wrapper.update();

    act(() => {
      Find.hoverCard(wrapper).find('a[data-testid="product-info:name-link"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle hover card mouseleave', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleTag='h1'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
        withHoverCard
      />
    );

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].product.name);

    act(() => {
      (Find.hoverCard(wrapper).prop('onMouseLeave') as any)();
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(0);
  });

  it('should handle carousel slide', () => {
    jest.useFakeTimers();

    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleTag='h1'
        items={items}
        itemSize={{ xs: 3 }}
        withHoverCard
      />
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

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].product.name);
  });

  it('should handle cart data/control props', () => {
    const Spy = {
      onItemAdd: jest.fn(),
      onItemChange: jest.fn(),
      onItemSubtract: jest.fn(),
    };

    const wrapper = mount(
      <RecommendationCarousel
        withHoverCard
        items={[
          {
            product: {
              name: 'Test Product',
              imageSrc: 'http://image.com/test',
              url: 'https://www.sima-land.ru/123',
              price: 100,
              currencyGrapheme: '$',
              oldPrice: 200,
            },
            cart: {
              stepText: 'по 1 шт',
              markupText: 'Комплектация + 50$ при покупке до 20 шт',
              qty: 12,
              inCart: true,
            },
          },
        ]}
        onItemAdd={Spy.onItemAdd}
        onItemChange={Spy.onItemChange}
        onItemSubtract={Spy.onItemSubtract}
      />
    );

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper.find(HoverCard).find(Stepper).find('[data-testid="stepper:input"]').prop('value')).toBe('12');

    Object.values(Spy).forEach(fn => {
      expect(fn).toBeCalledTimes(0);
    });

    // add
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('svg[data-testid="stepper:plus"]').simulate('click');
    });
    wrapper.update();

    expect(Spy.onItemAdd).toBeCalledTimes(1);

    // subtract
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('svg[data-testid="stepper:minus"]').simulate('click');
    });
    wrapper.update();

    expect(Spy.onItemSubtract).toBeCalledTimes(1);

    // change
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('[data-testid="stepper:input"]').simulate('change', {
        target: { value: '15' },
      });
    });
    wrapper.update();
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('[data-testid="stepper:input"]').simulate('blur');
    });
    wrapper.update();

    expect(Spy.onItemChange).toBeCalledTimes(1);
  });
});
