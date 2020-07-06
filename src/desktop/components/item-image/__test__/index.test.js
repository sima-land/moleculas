import React, { Component } from 'react';
import { renderIntoDocument, findRenderedDOMComponentWithTag, Simulate } from 'react-dom/test-utils';
import { mount } from 'enzyme';
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
    // eslint-disable-next-line require-jsdoc
    class Wrp extends Component {
      // eslint-disable-next-line require-jsdoc
      render () { return (
        <div>{this.props.children}</div>
      );}
    }
    const spy = jest.fn();
    const wrapper = renderIntoDocument(
      <Wrp><ItemImage onLoadImage={spy} src='https://via.placeholder.com/350x150' /></Wrp>
    );
    const image = findRenderedDOMComponentWithTag(wrapper, 'img');
    Simulate.load(image);
    expect(spy).toHaveBeenCalled();
  });
});
