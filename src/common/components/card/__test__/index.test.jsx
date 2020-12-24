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
    const onClick = jest.fn();
    const onClose = jest.fn();
    const wrapper = mount(
      <Card
        title='Заголовок'
        withCloseButton
        onClick={onClick}
        onClose={onClose}
        footer='Foo Bar'
        contentProps={{ className: 'test-class' }}
        data-testid='component:card'
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Card>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.test-class')).toHaveLength(1);
    expect(wrapper.find('.card-header')).toHaveLength(1);
    wrapper.find('.card').at(0).simulate('click');
    expect(onClick).toBeCalledTimes(1);
    wrapper.find('.card-close').at(0).simulate('click');
    expect(onClose).toBeCalledTimes(1);
  });
});
