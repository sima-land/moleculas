import React from 'react';
import { mount } from 'enzyme';
import { ImageOverlay } from '../image-overlay';
import { act } from 'react-dom/test-utils';

describe('ImageOverlay', () => {
  it('should renders correctly', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <ImageOverlay className='test-class' id='test-id' onClick={spy}>
        <img src='https://images.com/2' />
      </ImageOverlay>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('div#test-id').simulate('click');
    });

    expect(spy).toBeCalledTimes(1);
  });
});
