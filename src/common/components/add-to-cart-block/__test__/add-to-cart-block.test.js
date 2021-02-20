import React from 'react';
import { shallow, mount } from 'enzyme';
import AddToCartBlock from '../index';
import classes from '../add-to-cart-block.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

describe('<AddToCartBlock />', () => {
  it('should match snapshot without props', () => {
    const wrap = shallow(<AddToCartBlock />);
    expect(wrap).toMatchSnapshot();
  });
  it('should match snapshot with props', () => {
    const wrap = shallow(
      <AddToCartBlock
        onAdd={jest.fn()}
        onSubtract={jest.fn()}
        onAmountChange={jest.fn()}
        withPlus
        withMinus
        withCross
      />
    );
    expect(wrap).toMatchSnapshot();
  });
  it('should match snapshot with asTile prop', () => {
    const wrap = shallow(
      <AddToCartBlock
        onAdd={jest.fn()}
        onSubtract={jest.fn()}
        onAmountChange={jest.fn()}
        additionStepText='от 1 шт'
        asTile
        withPlus
        withMinus
        withCross
      />
    );
    expect(wrap).toMatchSnapshot();
  });
  it('correct handlers invokes', () => {
    const addMock = jest.fn();
    const subtractMock = jest.fn();
    const onAmountChangeMock = jest.fn();
    const wrap = mount(
      <AddToCartBlock
        quantity={0}
        qty={0}
        onAdd={addMock}
        onSubtract={subtractMock}
        onChange={onAmountChangeMock}
      />
    );
    wrap.instance().onChangeQty = jest.fn();

    expect(wrap.find('button.cart-button')).toHaveLength(0);
    wrap.setState({ currentQuantity: 1 });

    wrap.find('input').simulate('keyDown');
    expect(wrap.instance().onChangeQty).toHaveBeenCalledTimes(0);

    wrap.setState({ currentQuantity: 100 });
    wrap.find('input').simulate('keyDown', { keyCode: 13 });
    expect(wrap.instance().onChangeQty).toHaveBeenCalledTimes(1);
    wrap.find('input').simulate('blur');
    expect(wrap.instance().onChangeQty).toHaveBeenCalledTimes(2);
  });
  it('should render preloader when button fetching', () => {
    const wrap = mount(
      <AddToCartBlock
        isFetching
      />
    );
    expect(wrap.find('button.cart-button')).toHaveLength(1);
    expect(wrap.find('button.cart-button').find('svg')).toHaveLength(1);
  });

  it('should render additionStepText', () => {
    const component = shallow(
      <AddToCartBlock
        additionStepText='от 1 шт'
      />
    );
    const minText = component.find(`.${cx('min-quantity')}`);

    expect(minText.text()).toEqual('от 1 шт');
  });
});

describe('componentDidUpdate', () => {
  const testProp = {
    quantity: 13,
  };

  it('should update state when quantity was changed', () => {
    const wrapper = shallow(<AddToCartBlock quantity={14} />);
    wrapper.setProps(testProp);
    expect(wrapper.state('currentQuantity')).toEqual(13);
  });

  it('should clear the state', () => {
    const wrapper = shallow(<AddToCartBlock quantity={null} />);
    wrapper.instance().componentDidUpdate(testProp);
    expect(wrapper.state('currentQuantity')).toEqual('');
  });

  it('should update state when "needUpdateCurrentQuantity" is true', () => {
    const wrapper = shallow(<AddToCartBlock quantity={13} isFetching />);
    const instance = wrapper.instance();
    const setState = jest.spyOn(instance, 'setState');

    expect(setState).toBeCalledTimes(0);

    instance.needUpdateCurrentQuantity = true;
    instance.componentDidUpdate(testProp);
    expect(setState).toBeCalledTimes(0);

    wrapper.setProps({ quantity: 13, isFetching: false });
    expect(setState).toBeCalledTimes(1);
  });
});

describe('method "onChangeQty"', () => {
  const testEvent = {
    target: {
      value: '1',
    },
  };

  it('should remove extra characters and update state', () => {
    const wrapper = mount(<AddToCartBlock />);
    wrapper.instance().onChange(testEvent);
    expect(wrapper.state('currentQuantity')).toEqual('1');
  });

  it('shouldn`t change state if quantity wasn`t changed', () => {
    const wrapper = mount(<AddToCartBlock quantity={323} />);
    wrapper.instance().onChangeQty(testEvent);
    expect(wrapper.state('currentQuantity')).toEqual('323');
  });

  it('should clear the state', () => {
    const wrapper = mount(<AddToCartBlock quantity={323} />);
    wrapper.instance().onChange({ target: { value: null } });
    expect(wrapper.state('currentQuantity')).toEqual('');
  });

  it('should initiate a state change', () => {
    const onAmountChange = jest.fn();
    const wrapper = shallow(
      <AddToCartBlock
        quantity={null}
        onChange={onAmountChange}
      />
    );
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onChange');

    expect(instance.needUpdateCurrentQuantity).toBe(false);

    instance.onChangeQty({
      target: {
        value: '5',
      },
    }, true);
    expect(onAmountChange).toBeCalledWith('5');
    expect(instance.needUpdateCurrentQuantity).toBe(true);
  });

  it('shouldn`t do anything on input blur with same value as on focus', () => {
    const onAmountChange = jest.fn();
    const wrapper = shallow(
      <AddToCartBlock
        quantity={2}
        onChange={onAmountChange}
      />
    );
    const instance = wrapper.instance();
    wrapper.setState({ currentQuantity: '2' });

    jest.spyOn(instance, 'setState');

    instance.onChangeQty({
      type: 'blur',
      target: {
        value: '2',
      },
    }, true);

    expect(instance.setState).toBeCalledTimes(0);
    expect(onAmountChange).toBeCalledTimes(0);
  });

  it('should call onChange handler on input blur with changed value', () => {
    const onAmountChange = jest.fn();
    const wrapper = shallow(
      <AddToCartBlock
        quantity={0}
        onChange={onAmountChange}
      />
    );
    const instance = wrapper.instance();
    wrapper.setState({ currentQuantity: '2' });

    jest.spyOn(instance, 'setState');

    instance.onChangeQty({
      type: 'blur',
      target: {
        value: '3',
      },
    }, true);

    expect(onAmountChange).toBeCalledWith('3');
  });

  it('should setState 0 if value is empty string', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <AddToCartBlock
        quantity={1}
        onChange={onChange}
      />
    );
    const instance = wrapper.instance();
    jest.spyOn(instance, 'setState');

    instance.onChangeQty({ target: { value: '' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    wrapper.setProps({ quantity: 0 });

    expect(instance.setState).toHaveBeenCalledTimes(1);
    expect(instance.setState).toHaveBeenCalledWith({
      currentQuantity: 0,
    });

    instance.onChangeQty({ target: { value: '' } });
    expect(instance.setState).toHaveBeenCalledTimes(2);
    const secondCallArgs = instance.setState.mock.calls[1][0];
    expect(secondCallArgs).toEqual({ currentQuantity: 0 });
  });
});
