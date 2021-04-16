import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HoverCard } from '../hover-card';
import { ProductInfo } from '../product-info';
import { Link } from '@dev-dep/ui-nucleons/link';
import { ProductCard } from '../product-card';

describe('<HoverCard />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <HoverCard
        controlRef={createRef()}
        onQuickViewClick={jest.fn()}
        onFavoriteClick={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle image button click callbacks', () => {
    const Spy = {
      onQuickViewClick: jest.fn(),
      onFavoriteClick: jest.fn(),
    };

    const wrapper = mount(
      <HoverCard
        controlRef={createRef()}
        {...Spy}
      />
    );

    // quick view
    expect(Spy.onQuickViewClick).toBeCalledTimes(0);
    act(() => {
      wrapper.find('[data-testid="quick-view-button"]').simulate('click');
    });
    expect(Spy.onQuickViewClick).toBeCalledTimes(1);

    // favorite
    expect(Spy.onFavoriteClick).toBeCalledTimes(0);
    act(() => {
      wrapper.find('[data-testid="favorite-button"]').simulate('click');
    });
    expect(Spy.onFavoriteClick).toBeCalledTimes(1);
  });

  it('should set control to ref', () => {
    const controlRef = createRef();

    const itemInfo = {
      url: 'https://www.sima-land.ru/123456',
      name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
      imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
      price: 225,
      oldPrice: 250,
      favorite: false,
      currencyGrapheme: '₽',
      withImageButtons: true,
      onQuickViewClick: jest.fn(),
      onFavoriteClick: jest.fn(),
      markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
    };

    const wrapper = mount(
      <HoverCard
        controlRef={controlRef}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ProductCard).getDOMNode().classList.contains('hidden')).toBe(true);

    act(() => {
      const fakeEvent = {
        currentTarget: document.createElement('div'),
      };
      controlRef.current.show(itemInfo, fakeEvent);
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ProductInfo).find(Link).text()).toBe(itemInfo.name);
    expect(wrapper.find(ProductCard).getDOMNode().classList.contains('hidden')).toBe(false);

    act(() => {
      wrapper.find(ProductCard).simulate('mouseleave');
    });
    wrapper.update();

    expect(wrapper.find(ProductCard).getDOMNode().classList.contains('hidden')).toBe(true);
  });
});
