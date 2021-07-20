import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { ModifiersWidget } from '..';
import { Link } from '@sima-land/ui-nucleons/link';

describe('<ModifiersWidget />', () => {
  it('should renders correctly with prop', () => {
    const onSelectItem = jest.fn();
    const wrapper = mount(
      <ModifiersWidget
        title='test'
        items={[
          { content: 'Foo', selected: true },
          { content: 'Bar', selected: false },
          { content: 'Baz', selected: false },
        ]}
        sizesTableUrl='sima-land.ru'
        onSelectItem={onSelectItem}
      />
    );

    expect(wrapper.find('h3').prop('className')).toEqual('modifiers-title');
    expect(wrapper.find(Link).prop('className')).toEqual('modifiers-link');
    expect(wrapper).toMatchSnapshot();

    expect(onSelectItem).toBeCalledTimes(0);

    act(() => {
      wrapper.find('[data-testid="modifier-button"]').at(0).simulate('click');
    });
    wrapper.update();

    expect(onSelectItem).toBeCalledTimes(0);

    act(() => {
      wrapper.find('[data-testid="modifier-button"]').at(1).simulate('click');
    });
    wrapper.update();

    expect(onSelectItem).toBeCalledTimes(1);

    act(() => {
      wrapper.find('[data-testid="modifier-button"]').at(2).simulate('click');
    });
    wrapper.update();

    expect(onSelectItem).toBeCalledTimes(2);
  });
});
