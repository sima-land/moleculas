import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HoverCard } from '../hover-card';
import { Parts } from '../../../../common/components/product-info';

describe('<HoverCard />', () => {
  it('should renders hidden', () => {
    const wrapper = mount(<HoverCard targetRef={createRef()} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div[data-testid="product-card:hover-card"]').hasClass('hidden')).toBe(
      true,
    );
  });

  it('should renders with positioning', () => {
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

        <HoverCard targetRef={targetRef}>
          <Parts.Title href='https://foo.bar'>{itemInfo.name}</Parts.Title>
        </HoverCard>
      </>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a[data-testid="product-info:name-link"]').text()).toBe(itemInfo.name);
    expect(wrapper.find('div[data-testid="product-card:hover-card"]').hasClass('hidden')).toBe(
      false,
    );
  });

  it('should handle mouseleave', () => {
    const spy = jest.fn();

    const targetRef = createRef<HTMLDivElement>();

    const wrapper = mount(
      <>
        <div ref={targetRef}>Target</div>

        <HoverCard targetRef={targetRef} onMouseLeave={spy} />
      </>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('div[data-testid="product-card:hover-card"]').simulate('mouseleave');
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
