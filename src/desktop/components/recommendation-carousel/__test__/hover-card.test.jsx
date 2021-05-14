import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HoverCard } from '../hover-card';
import { ProductInfo } from '../product-info';
import { Link } from '@dev-dep/ui-nucleons/link';
import { ProductCard } from '../product-card';
import { Stepper } from '@dev-dep/ui-nucleons/stepper';

describe('<HoverCard />', () => {
  it('should renders hidden', () => {
    const wrapper = mount(
      <HoverCard
        info={{
          url: 'https://www.sima-land.ru/123456',
          name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
          imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
          price: 225,
          oldPrice: 250,
          favorite: false,
          currencyGrapheme: '₽',
          withImageButtons: true,
          markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
        }}
        targetRef={createRef()}
        onQuickViewClick={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ProductCard).hasClass('hidden')).toBe(true);
  });

  it('should renders with positioning', () => {
    const spy = jest.fn();

    const targetRef = createRef();

    const itemInfo = {
      url: 'https://www.sima-land.ru/123456',
      name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
      imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
      price: 225,
      oldPrice: 250,
      favorite: false,
      currencyGrapheme: '₽',
      withImageButtons: true,
      markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard
          info={itemInfo}
          targetRef={targetRef}
          onQuickViewClick={spy}
        />
      </>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ProductInfo).find(Link).text()).toBe(itemInfo.name);
    expect(wrapper.find(ProductCard).hasClass('hidden')).toBe(false);
  });

  it('should handle mouseleave', () => {
    const spy = jest.fn();

    const targetRef = createRef();

    const itemInfo = {
      url: 'https://www.sima-land.ru/123456',
      name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
      imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
      price: 225,
      oldPrice: 250,
      favorite: false,
      currencyGrapheme: '₽',
      withImageButtons: true,
      markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard
          info={itemInfo}
          targetRef={targetRef}
          onMouseLeave={spy}
        />
      </>
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find(ProductCard).simulate('mouseleave');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle image button click callbacks', () => {
    const spy = jest.fn();

    const targetRef = createRef();

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard
          info={{
            url: 'https://www.sima-land.ru/123456',
            name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
            imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
            price: 225,
            oldPrice: 250,
            favorite: false,
            currencyGrapheme: '₽',
            withImageButtons: true,
            markupText: 'Комплектация + 50 ₽ при покупке до 20 шт',
          }}
          targetRef={targetRef}
          onQuickViewClick={spy}
        />
      </>
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('svg[data-testid="quick-view-button"]').simulate('click');
    });

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle cart data/control props', () => {
    const Spy = {
      onAdd: jest.fn(),
      onChange: jest.fn(),
      onSubtract: jest.fn(),
    };

    const targetRef = createRef();

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
      inCart: true,
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>
        <HoverCard
          info={productInfo}
          targetRef={targetRef}
          onAdd={Spy.onAdd}
          onChange={Spy.onChange}
          onSubtract={Spy.onSubtract}
        />
      </>
    );

    expect(wrapper.find(HoverCard).find(Stepper).find('[data-testid="stepper:input"]').prop('value')).toBe('5');

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

    expect(Spy.onChange).toBeCalledTimes(1);
  });
});
