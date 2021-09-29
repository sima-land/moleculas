import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { ProductCarousel } from '..';
import { items } from './test-items';
import { useMedia } from '@sima-land/ui-nucleons/hooks/media';
import { HoverCard } from '../hover-card';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { ProductInfo } from '../../../../common/components/product-info';

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
  const Find = {
    hoverCard: (wrapper: ReactWrapper) => wrapper.find(HoverCard),
    hoverCardItemName: (wrapper: ReactWrapper) => wrapper.find(HoverCard)
      .find(HoverCard)
      .find(ProductInfo)
      .find('a[data-testid="product-info:name-link"]')
      .text(),
    item: (wrapper: ReactWrapper) => wrapper.find('[data-testid="product-carousel:item"]'),
  };

  it('ProductCarousel.Item should return null', () => {
    expect(ProductCarousel.Item({ data: items[0] })).toBe(null);
  });

  it('should renders correctly', () => {
    const wrapper = mount(
      <ProductCarousel itemSize={{ xs: 3 }} className='additional-class'>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} />
        ))}
      </ProductCarousel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle item "onLinkClick" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} onLinkClick={spy} />
        ))}
      </ProductCarousel>
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

  it('should handle item "onLinkClick" prop missing', () => {
    const wrapper = mount(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} onLinkClick={undefined} />
        ))}
      </ProductCarousel>
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

  it('should render empty ref', () => {
    const wrapper = mount(
      <ProductCarousel />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should set size depend on media query', () => {
    const wrapper = mount(
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} />
        ))}
      </ProductCarousel>
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
          <ProductCarousel.Item key={index} data={item} />
        ))}
      </ProductCarousel>
    );

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);
  });

  it('should handle hover card link clicks', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <ProductCarousel withHoverCard>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} onLinkClick={spy} />
        ))}
      </ProductCarousel>
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

  it('should handle hover card link clicks without item "onLinkClick" prop', () => {
    const wrapper = mount(
      <ProductCarousel withHoverCard>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} />
        ))}
      </ProductCarousel>
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
      <ProductCarousel itemSize={{ xs: 3 }} className='additional-class' withHoverCard>
        {items.map((item, index) => (
          <ProductCarousel.Item key={index} data={item} />
        ))}
      </ProductCarousel>
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
          <ProductCarousel.Item key={index} data={item} />
        ))}
      </ProductCarousel>
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