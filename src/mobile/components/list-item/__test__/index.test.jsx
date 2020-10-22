import React from 'react';
import { shallow, mount } from 'enzyme';
import { ListItem } from '../index';
import { act } from 'react-dom/test-utils';
import Button from '@dev-dep/ui-nucleons/button';

describe('<ListItem />', () => {
  it('should render without props', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with all props', () => {
    const wrapper = shallow(
      <ListItem
        sid={10000}
        name='Foo'
        itemUrl='#'
        price={4999}
        priceOld={5000}
        currencyGrapheme='$'
        unit='pcs'
        markupData={{
          count: 10,
          cost: 50,
          qtyRule: 'Опт от 10 шт',
        }}
        qty={5}
        additionStepText='for 2 pcs'
        badges={[
          {
            bgColor: '#66cb2f',
            definitions: {
              label: {
                type: 'text',
                value: 'Новинка',
              },
            },
            fields: [
              'label',
            ],
            link: '/new/',
            strokeColor: null,
            textColor: '#f2f2f2',
            title: null,
          },
        ]}
        rating={4.8}
        reviewsCount={55}
        image='cdn-url'
        properties={[
          {
            value: 'China',
            href: '#',
          },
        ]}
        deliveryInfo='Доставим 11 августа'
        modifierProps={{
          title: 'foo',
          count: 55,
          name: 'baz',
        }}
        wholesaleProps={{
          price: 1000,
          description: 'foo',
        }}
        isWished
        wrapperClassName='test-wrapper-class'
        isPriceFixed
        asTile
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ asTile: false });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ isCartFetching: true });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ isCartFetching: false, displayedQuantity: 2 });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ inStockProps: { text: 'test' } });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ inStockProps: { text: 'test', isGray: true } });
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with shouldHideAdultContent prop', () => {
    const wrapper = shallow(<ListItem shouldHideAdultContent />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ asTile: true });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle cart button click when item is not in cart', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ListItem
        onCartButtonClick={spy}
      />
    );
    act(() => {
      wrapper.find(Button).at(0).prop('onClick')();
    });
    expect(spy).toHaveBeenCalled();
  });
  it('should handle cart button click when item is in cart', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ListItem
        onCartInputClick={spy}
        displayedQuantity={22}
      />
    );
    act(() => {
      wrapper.find('.in-cart-input-wrapper').prop('onClick')();
    });
    expect(spy).toHaveBeenCalled();
  });
});