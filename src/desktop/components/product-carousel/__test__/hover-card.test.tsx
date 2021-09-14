import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HoverCard } from '../hover-card';

describe('<HoverCard />', () => {
  it('should renders hidden', () => {
    const wrapper = mount(
      <HoverCard
        data={{
          url: 'https://www.sima-land.ru/123456',
          name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
          imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
          price: 225,
          oldPrice: 250,
          currencyGrapheme: '₽',
        }}
        targetRef={createRef()}
        onQuickViewClick={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('[data-testid="product-carousel:hover-card"]').hasClass('hidden')).toBe(true);
  });

  it('should handle "onLinkClick" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <HoverCard
        data={{
          url: 'https://www.sima-land.ru/123456',
          name: 'Ножницы портновские, 10, 26 см, цвет чёрный',
          imageSrc: 'https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v: 1617955476',
          price: 225,
          oldPrice: 250,
          currencyGrapheme: '₽',
        }}
        targetRef={createRef()}
        onLinkClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('a[data-testid="product-info:image-link"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);

    act(() => {
      wrapper.find('a[data-testid="product-info:name-link"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(2);
  });

  it('should renders with positioning', () => {
    const spy = jest.fn();

    const targetRef = createRef<HTMLDivElement>();

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
          data={itemInfo}
          targetRef={targetRef}
          onQuickViewClick={spy}
        />
      </>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a[data-testid="product-info:name-link"]').text()).toBe(itemInfo.name);
    expect(wrapper.find('[data-testid="product-carousel:hover-card"]').hasClass('hidden')).toBe(false);
  });

  it('should handle mouseleave', () => {
    const spy = jest.fn();

    const targetRef = createRef<HTMLDivElement>();

    const productInfo = {
      name: 'Test Product',
      imageSrc: 'http://image.com/test',
      url: 'https://www.sima-land.ru/123',
      price: 100,
      currencyGrapheme: '$',
      oldPrice: 200,
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard
          data={productInfo}
          targetRef={targetRef}
          onMouseLeave={spy}
        />
      </>
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('[data-testid="product-carousel:hover-card"]').simulate('mouseleave');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle image button click callbacks', () => {
    const spy = jest.fn();

    const targetRef = createRef<HTMLDivElement>();

    const productInfo = {
      name: 'Test Product',
      imageSrc: 'http://image.com/test',
      url: 'https://www.sima-land.ru/123',
      price: 100,
      currencyGrapheme: '$',
      oldPrice: 200,
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard
          data={productInfo}
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

  it('should handle "renderCartControl" prop', () => {
    const targetRef = createRef<HTMLDivElement>();

    const productInfo = {
      name: 'Test Product',
      imageSrc: 'http://image.com/test',
      url: 'https://www.sima-land.ru/123',
      price: 100,
      currencyGrapheme: '$',
      oldPrice: 200,
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>
        <HoverCard
          data={productInfo}
          targetRef={targetRef}
          renderCartControl={Slot => (
            <Slot stepText='Foo' markupText='Bar'>
              <button>В корзину</button>
            </Slot>
          )}
        />
      </>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show/hide hint for quick view button', () => {
    const targetRef = createRef<HTMLDivElement>();

    const productInfo = {
      name: 'Test Product',
      imageSrc: 'http://image.com/test',
      url: 'https://www.sima-land.ru/123',
      price: 100,
      currencyGrapheme: '$',
      oldPrice: 200,
    };

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>
        <HoverCard
          data={productInfo}
          targetRef={targetRef}
        />
      </>
    );

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(0);

    act(() => {
      wrapper.find('svg[data-testid="quick-view-button"]').simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(1);

    act(() => {
      wrapper.find('svg[data-testid="quick-view-button"]').simulate('mouseleave');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(0);
  });
});
