import React from 'react';
import { mount } from 'enzyme';
import Card from '../index';

describe('<Card />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <Card />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Card
        title='Заголовок'
        withCloseButton
        onClose={onClose}
        footer='Foo Bar'
        childrenProps={{ className: 'test-class' }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Card>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.card-header')).toHaveLength(1);
    wrapper.find('.card-close').at(0).simulate('click');
    expect(onClose).toBeCalledTimes(1);
  });
});
