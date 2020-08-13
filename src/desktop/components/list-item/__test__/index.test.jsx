import React from 'react';
import { shallow, mount } from 'enzyme';
import { ListItem } from '../index';
import AddToCartBlock from '../../../../common/components/add-to-cart-block';
import { act } from 'react-dom/test-utils';

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
        inStockText='in stock 300'
        isPriceFixed
        hasAddToCartBlock
        hasAnaloguesButton
        hasTrashButton
        trashButtonProps={{
          onClick: jest.fn(),
          className: 'trash-cart-button',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ asTile: true });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ badges: [], asTile: false });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ asTile: true });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ shouldHideAdultContent: true });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ hasQuickPreview: true, hasWishButton: true });
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with shouldHideAdultContent prop', () => {
    const wrapper = shallow(<ListItem shouldHideAdultContent />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ asTile: true });
    expect(wrapper).toMatchSnapshot();
  });
  it('should addToCart handles correctly', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <ListItem
        addToCartHandler={spy}
        hasAddToCartBlock
      />
    );
    wrapper.find(AddToCartBlock).instance().props.onAdd();
    wrapper.find(AddToCartBlock).instance().props.onSubtract();
    wrapper.find(AddToCartBlock).instance().props.onChange();
    expect(spy).toHaveBeenCalledTimes(3);
  });
  it('should call getItemWidth', () => {
    jest.useFakeTimers();
    const getItemWidth = jest.fn();
    const addGlobalListener = jest.fn();
    const intersectionObserverMock = {
      /**
       * Функция подписки на Intersection Observer.
       * @param {Function} fn Функция, которая будет вызвана,
       * когда элемент окажется в зоне видимости.
       */
      addObserve (fn) {
        this.fn = fn;
      },

      /**
       * Иммитирует появление элемента в зоне видимости.
       */
      trigger () {
        this.fn();
      },
    };
    mount(
      <ListItem
        getItemWidth={getItemWidth}
        addObserveWithMargin={(el, fn) => intersectionObserverMock.addObserve(fn)}
        addGlobalListener={addGlobalListener}
        updateItemViewed={() => {}}
      />
    );
    act(() => {
      intersectionObserverMock.trigger();
      window.dispatchEvent(new Event('resize'));
    });
    jest.runAllTimers();
    expect(getItemWidth).toHaveBeenCalledTimes(1);
  });
  it('should call getItemWidth by global resize event', () => {
    jest.useFakeTimers();
    const getItemWidth = jest.fn();
    mount(
      <ListItem
        getItemWidth={getItemWidth}
        addGlobalListener={window.addEventListener}
        updateItemViewed={() => {}}
      />
    );
    expect(getItemWidth).toHaveBeenCalledTimes(1);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    jest.runAllTimers();
    expect(getItemWidth).toHaveBeenCalledTimes(2);
  });

  it('should call updateItemViewed whole component when intersectionObserver triggers event', () => {
    const spy = jest.fn();
    const intersectionObserverMock = {
      /**
       * Функция подписки на Intersection Observer.
       * @param {Function} fn Функция, которая будет вызвана,
       * когда элемент окажется в зоне видимости.
       */
      addObserve (fn) {
        this.fn = fn;
      },

      /**
       * Иммитирует появление элемента в зоне видимости.
       */
      trigger () {
        this.fn();
      },
    };

    mount(
      <ListItem
        shouldLoadLazy
        addObserveWithMargin={(el, fn) => intersectionObserverMock.addObserve(fn)}
        updateItemViewed={spy}
        getItemWidth={() => {}}
        addGlobalListener={() => {}}
      />
    );
    expect(spy).not.toHaveBeenCalled();
    act(() => {
      intersectionObserverMock.trigger();
    });
    expect(spy).toHaveBeenCalled();
  });
});
