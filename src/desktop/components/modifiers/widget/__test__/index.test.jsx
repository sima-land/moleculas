import React from 'react';
import { mount, shallow } from 'enzyme';
import { ModifiersWidget } from '..';
import { ModifiersGroup } from '../../group';
import { Link } from '@dev-dep/ui-nucleons/link';
import { act } from 'react-dom/test-utils';

describe('<ModifiersWidget />', () => {
  it('should renders correctly without props', () => {
    const modifiersWidget = shallow(<ModifiersWidget />);

    expect(modifiersWidget).toMatchSnapshot();
  });

  it('should renders correctly with prop', () => {
    const onSelectItem = jest.fn();
    const wrapper = mount(
      <ModifiersWidget
        title='test'
        items={['test']}
        sizesTableUrl='sima-land.ru'
        onSelectItem={onSelectItem}
      />
    );

    expect(wrapper.find('h3').prop('className')).toEqual('modifiers-title');
    expect(wrapper.find(Link).prop('className')).toEqual('modifiers-link');
    expect(wrapper.find(ModifiersGroup).prop('items')).toEqual(['test']);
    expect(wrapper).toMatchSnapshot();

    expect(onSelectItem).toBeCalledTimes(0);
    act(() => {
      wrapper.find(ModifiersGroup).prop('onSelectItem')('test', true);
    });
    expect(onSelectItem).toBeCalledTimes(1);
  });
});
