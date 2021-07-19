import React from 'react';
import { mount } from 'enzyme';
import { ReviewInfo } from '../review-info';
import { act } from 'react-dom/test-utils';

describe('ReviewInfo', () => {
  it('should renders correctly', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <ReviewInfo author='John Doe' rating={2.1} onGoToReview={spy} />
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('a[data-testid="gallery-modal:go-to-review-link"]').simulate('click');
    });

    expect(spy).toBeCalledTimes(1);
  });
});
