import { mount } from 'enzyme';
import { Thumbnail } from '../thumbnail';
import { act } from 'react-dom/test-utils';

describe('Thumbnail', () => {
  it('should render 360 icon', () => {
    const spy = jest.fn();

    const wrapper = mount(<Thumbnail type='360' onClick={spy} />);

    expect(wrapper).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render video icon', () => {
    const spy = jest.fn();

    const wrapper = mount(<Thumbnail type='video' onClick={spy} />);

    expect(wrapper).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render image', () => {
    const spy = jest.fn();

    const wrapper = mount(<Thumbnail type='image' src='https://image.com/1' onClick={spy} />);

    expect(wrapper).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render 360 checked icon', () => {
    const spy = jest.fn();

    const wrapper = mount(<Thumbnail checked type='360' onClick={spy} />);

    expect(wrapper).toMatchSnapshot();
  });
});
