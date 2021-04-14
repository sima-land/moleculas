import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { RecommendationCarousel } from '..';
import { items } from '../../../../common/__fixtures__/recommendation-carousel';
import { useMedia } from '../utils';
import { RecommendedItem } from '../item';
import { Link } from '@dev-dep/ui-nucleons/link';

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

  it('should handle "onItemClick" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        items={items}
        onItemClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find(RecommendedItem).at(0).find(Link).simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "onQuickViewClick" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <RecommendationCarousel
        title='Hello, world!'
        items={items}
        onQuickViewClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find(RecommendedItem).at(0).find('[data-testid="reco-item:quick-view"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });
});
