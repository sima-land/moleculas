import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { ProductInfo } from '../product-info';
import { QuickViewButton } from '../../../../common/components/quick-view-button';

describe('<ProductInfo />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <ProductInfo
        url='https://www.sima-land.ru/123456'
        name='Ножницы портновские, 10, 26 см, цвет чёрный'
        imageSrc='https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v=1617955476'
        price={225}
        oldPrice={250}
        favorite
        currencyGrapheme='₽'
        withQuickView
        onQuickViewClick={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onLinkClick" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <ProductInfo
        url='https://www.sima-land.ru/123456'
        name='Ножницы портновские, 10, 26 см, цвет чёрный'
        imageSrc='https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v=1617955476'
        price={225}
        currencyGrapheme='₽'
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

  it('should renders hints properly', () => {
    const wrapper = mount(
      <ProductInfo
        url='https://www.sima-land.ru/123456'
        name='Ножницы портновские, 10, 26 см, цвет чёрный'
        imageSrc='https://cdn3.static1-sima-land.com/items/29455/0/1600.jpg?v=1617955476'
        price={225}
        oldPrice={250}
        favorite
        currencyGrapheme='₽'
        withQuickView
        onQuickViewClick={jest.fn()}
      />
    );

    act(() => {
      wrapper.find(QuickViewButton).simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(1);

    act(() => {
      wrapper.find(QuickViewButton).simulate('mouseleave');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(0);
  });
});
