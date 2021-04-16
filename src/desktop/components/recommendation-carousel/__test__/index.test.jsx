import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { RecommendationCarousel } from '..';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';
import { useMedia } from '../utils';
import { HoverCard } from '../hover-card';
import { ProductCard } from '../product-card';
import { ProductInfo } from '../product-info';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Carousel } from '@dev-dep/ui-nucleons/carousel';

jest.mock('../utils', () => {
  const original = jest.requireActual('../utils');

  const fakeUseMedia = () => Boolean(fakeUseMedia.__flag);

  return {
    ...original,
    __esModule: true,
    useMedia: fakeUseMedia,
  };
});

describe('<RecommendationCarousel />', () => {
  const Find = {
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

    expect(Find.hoverCardItemName(wrapper)).toBe('');

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe('');

    jest.advanceTimersByTime(400);

    act(() => {
      Find.item(wrapper).at(0).simulate('mouseenter');
    });
    wrapper.update();

    expect(Find.hoverCardItemName(wrapper)).toBe(items[0].name);
  });
});
