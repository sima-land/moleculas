import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import Icon from '@dev-dep/ui-nucleons/icon';
import ItemImage from '../index';

describe('<ItemImage />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemImage />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render wish', () => {
    const wrapper = mount(<ItemImage wishProps={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ wishProps: { isWished: true } });
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with withBlur prop', () => {
    const wrapper = mount(<ItemImage withBlur />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render fake divs', () => {
    const wrapper = mount(<ItemImage photos={['photo1', 'photo2']} src='test src' withBlur />);
    wrapper.setProps({ withBlur: false });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.image').props().src).toEqual('test src');
    wrapper.find('.fake-hover').at(1).simulate('mouseover');
    expect(wrapper.find('.image').props().src).toEqual('photo2');

    wrapper.find('.wrapper').simulate('mouseleave');
    expect(wrapper.find('.image').props().src).toEqual('test src');
  });
  it('should render badges', () => {
    const wrapper = mount(
      <ItemImage badges={[
        {
          bgColor: '#b52ea8',
          definitions: {
            label: {
              type: 'text',
              value: '-36%',
            },
          },
          fields: [
            'label',
          ],
          link: '/percent/',
          strokeColor: null,
          textColor: '#f2f2f2',
          title: null,
        },
      ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should onLoadImage() calls', () => {
    const origHTMLImageElementDescriptors = Object.getOwnPropertyDescriptors(HTMLImageElement);
    Object.defineProperty(HTMLImageElement.prototype, 'complete', {
      writable: true,
      value: true,
    });
    // eslint-disable-next-line require-jsdoc
    class Wrp extends Component {
      // eslint-disable-next-line require-jsdoc
      render () { return (
        <div>{this.props.children}</div>
      );}
    }
    const spy = jest.fn();
    const wrapper = mount(
      <Wrp><ItemImage onLoadImage={spy} src='https://via.placeholder.com/350x150' /></Wrp>
    );
    act(() => {
      document.querySelector('.image')?.load();
      wrapper.mount();
    });
    expect(spy).toHaveBeenCalled();
    Object.defineProperties(HTMLImageElement, origHTMLImageElementDescriptors);
  });
  it('should render with trash cart button', () => {
    const wrapper = shallow(
      <ItemImage
        trashButtonProps={{
          className: 'test-trash-button',
          onClick: jest.fn(),
        }}
        hasTrashButton
      />
    );
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ selectionProps: { isSelected: true } });
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
