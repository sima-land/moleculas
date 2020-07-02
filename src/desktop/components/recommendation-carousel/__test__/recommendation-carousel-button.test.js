import React from 'react';
import CarouselButton from '../recommendation-carousel-button';
import { shallow } from 'enzyme';

describe('<CarouselButton />', () => {
  it('renders correct without props', () => {
    const button = shallow(<CarouselButton />);
    expect(button).toMatchSnapshot();
  });
  it('renders correct with backward type', () => {
    const button = shallow(<CarouselButton type='backward' />);
    expect(button).toMatchSnapshot();
  });
  it('calls onUse properly', () => {
    const onUseFn = jest.fn();
    const button = shallow(<CarouselButton onUse={onUseFn} />);
    expect(onUseFn).not.toHaveBeenCalled();
    button.simulate('click');
    expect(onUseFn).toHaveBeenCalledTimes(1);
  });
});
