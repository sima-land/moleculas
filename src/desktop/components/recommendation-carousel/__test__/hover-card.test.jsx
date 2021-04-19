import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HoverCard } from '../hover-card';
import { ProductInfo } from '../product-info';
import { Link } from '@dev-dep/ui-nucleons/link';
import { ProductCard } from '../product-card';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';

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
      const fakeTarget = document.createElement('div');
      controlRef.current.show(itemInfo, fakeTarget);
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

  it('should handle cart data/control props', () => {
    const controlRef = createRef();

    const Spy = {
      onAdd: jest.fn(),
      onChange: jest.fn(),
      onSubtract: jest.fn(),
    };

    const productInfo = {
      name: 'Test Product',
      imageSrc: 'http://image.com/test',
      imageAlt: 'Alternative text for test image',
      url: 'https://www.sima-land.ru/123',
      price: 100,
      currencyGrapheme: '$',
      oldPrice: 200,
      stepText: 'по 1 шт',
      markupText: 'Комплектация + 50$ при покупке до 20 шт',
      qty: 5,
    };

    const wrapper = mount(
      <HoverCard
        controlRef={controlRef}
        onAdd={Spy.onAdd}
        onChange={Spy.onChange}
        onSubtract={Spy.onSubtract}
      />
    );

    act(() => {
      const fakeTarget = document.createElement('div');
      controlRef.current.show(productInfo, fakeTarget);
    });
    wrapper.update();

    expect(wrapper.find(HoverCard).find(Stepper).find('[data-testid="stepper:input"]').prop('value')).toBe(5);

    Object.values(Spy).forEach(fn => {
      expect(fn).toBeCalledTimes(0);
    });

    // add
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('svg[data-testid="stepper:plus"]').simulate('click');
    });
    wrapper.update();

    expect(Spy.onAdd).toBeCalledTimes(1);

    // subtract
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('svg[data-testid="stepper:minus"]').simulate('click');
    });
    wrapper.update();

    expect(Spy.onSubtract).toBeCalledTimes(1);

    // subtract
    act(() => {
      wrapper.find(HoverCard).find(Stepper).find('[data-testid="stepper:input"]').simulate('blur', {
        target: {
          value: 15,
        },
      });
    });
    wrapper.update();

    expect(Spy.onChange).toBeCalledTimes(1);
  });
});
