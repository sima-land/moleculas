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
    const wrapper = mount(
      <Card
        header={<h2>Заголовок</h2>}
        withCloseButton
        onClick={onClick}
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
  });
});
