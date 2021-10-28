import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import ItemImage from '..';
import { WishButton } from '../../../../common/components/wish-button';
import { QuickViewButton } from '../../../../common/components/quick-view-button';

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
      <ItemImage
        badges={[
          {
            bgColor: '#b52ea8',
            definitions: {
              label: {
                type: 'text',
                value: '-36%',
              },
            },
            fields: ['label'],
            link: '/percent/',
            strokeColor: null,
            textColor: '#f2f2f2',
            title: null,
          },
        ]}
      />,
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
      render() {
        return <div>{this.props.children}</div>;
      }
    }
    const spy = jest.fn();
    const wrapper = mount(
      <Wrp>
        <ItemImage onLoadImage={spy} src='https://via.placeholder.com/350x150' />
      </Wrp>,
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
      />,
    );
    expect(wrapper.find('[data-testid="item-image:remove-button"]')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with wish button', () => {
    const wrapper = shallow(
      <ItemImage
        wishProps={{
          className: 'test-wish-button',
          onClick: jest.fn(),
        }}
        hasWishButton
      />,
    );
    expect(wrapper.find(WishButton)).toHaveLength(1);
    expect(wrapper.find(WishButton).prop('className')).toEqual('icon left test-wish-button');
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ hasTrashButton: true, trashButtonProps: {} });
    expect(wrapper.find(WishButton).prop('className')).toEqual(
      'icon left as-second test-wish-button',
    );
  });
  it('should render with quick preview button', () => {
    const wrapper = shallow(
      <ItemImage
        quickViewBtnProps={{
          className: 'test-quick-view-button',
          onClick: jest.fn(),
        }}
        hasQuickPreview
      />,
    );
    expect(wrapper.find(QuickViewButton)).toHaveLength(1);
    expect(wrapper.find(QuickViewButton).prop('className')).toEqual(
      'icon left test-quick-view-button',
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ hasTrashButton: true, trashButtonProps: {} });
    expect(wrapper.find(QuickViewButton).prop('className')).toEqual(
      'icon left as-second test-quick-view-button',
    );

    wrapper.setProps({ hasWishButton: true, wishProps: {} });
    expect(wrapper.find(QuickViewButton).prop('className')).toEqual(
      'icon left as-second as-third test-quick-view-button',
    );
  });
  it('should render with selection button', () => {
    const wrapper = shallow(
      <ItemImage
        selectionProps={{
          isSelected: true,
          onSelect: jest.fn(),
        }}
        hasSelectionButton
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
