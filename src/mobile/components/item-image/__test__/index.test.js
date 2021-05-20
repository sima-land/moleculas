import React, { Component } from 'react';
import { mount } from 'enzyme';
import ItemImage from '../index';
import { act } from 'react-dom/test-utils';

describe('<ItemImage />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemImage />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render wish', () => {
    const wrapper = mount(<ItemImage wishProps={{}} hasWishButton />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render wish, no props', () => {
    const wrapper = mount(<ItemImage wishProps={undefined} hasWishButton />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with withBlur prop', () => {
    const wrapper = mount(<ItemImage withBlur />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render badges', () => {
    const wrapper = mount(
      <ItemImage badges={[
        {
          bgColor: '#b52ea8',
          fields: [
            {
              type: 'text',
              value: '-36%',
            },
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
});
