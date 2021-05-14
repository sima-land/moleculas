import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { RecommendationCarousel } from '..';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';
import { useMedia } from '@dev-dep/ui-nucleons/hooks/media';
import { HoverCard } from '../hover-card';
import { ProductCard } from '../product-card';
import { ProductInfo } from '../product-info';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Carousel } from '@dev-dep/ui-nucleons/carousel';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';

jest.mock('@dev-dep/ui-nucleons/hooks/media', () => {
  const original = jest.requireActual('@dev-dep/ui-nucleons/hooks/media');

  const fakeUseMedia = () => Boolean(fakeUseMedia.__flag);

  return {
    ...original,
    __esModule: true,
    useMedia: fakeUseMedia,
  };
});

describe('<RecommendationCarousel />', () => {
  const Find = {
    hoverCard: wrapper => wrapper.find(HoverCard),
    hoverCardItemName: wrapper => wrapper.find(HoverCard)
      .find(ProductCard)
      .find(ProductInfo)
      .find(Link)
      .text(),
    item: wrapper => wrapper.find('[data-testid="reco-item"]'),
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

  it('should handle "titleContainer" prop', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleContainer='h1'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty ref', () => {
    const wrapper = mount(
      <RecommendationCarousel items={undefined} />
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
      useMedia.__flag = true;
      wrapper.setProps({ title: 'Hello!' });
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle item mouseenter event', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleContainer='h1'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
      />
    );

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);
  });

  it('should handle hover card mouseleave', () => {
    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleContainer='h1'
        items={items}
        itemSize={{ xs: 3 }}
        className='additional-class'
      />
    );

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);

    act(() => {
      Find.hoverCard(wrapper).prop('onMouseLeave')();
    });
    wrapper.update();

    expect(Find.hoverCard(wrapper)).toHaveLength(0);
  });

  it('should handle carousel slide', () => {
    jest.useFakeTimers();

    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        titleContainer='h1'
        items={items}
        itemSize={{ xs: 3 }}
      />
    );

    act(() => {
      wrapper.find(Carousel).prop('onChangeTargetIndex')();
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

  it('should handle cart data/control props', () => {
    const Spy = {
      onItemAdd: jest.fn(),
      onItemChange: jest.fn(),
      onItemSubtract: jest.fn(),
    };

    const wrapper = mount(
      <RecommendationCarousel
        items={[
          {
            name: 'Test Product',
            imageSrc: 'http://image.com/test',
            imageAlt: 'Alternative text for test image',
            url: 'https://www.sima-land.ru/123',
            price: 100,
            currencyGrapheme: '$',
            oldPrice: 200,
            stepText: 'по 1 шт',
            markupText: 'Комплектация + 50$ при покупке до 20 шт',
            qty: 12,
            inCart: true,
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
