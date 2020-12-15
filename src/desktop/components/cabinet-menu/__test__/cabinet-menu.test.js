import React from 'react';
import { mount, shallow } from 'enzyme';
import CabinetMenu from '..';
import { cabinetMenuItems } from '../../../../common/__fixtures__/cabinet-menu';
import { map } from 'lodash';

describe('<CabinetMenu />', () => {
  it('should renders properly', () => {
    const wrapper = mount(
      <CabinetMenu
        avatar='http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg'
        name='test name'
        items={cabinetMenuItems}
        settingsLink='/'
        onItemClick={jest.fn()}
        superEllipseId='header-image-clip-path'
      />
    );

    expect(wrapper.find('.dot')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
  it('should call actions corrrectly', () => {
    const fakeItemClick = jest.fn();
    const actionableCabinetMenuItems = map(cabinetMenuItems, item => ({ ...item, onClick: fakeItemClick }));
    const wrapper = shallow(
      <CabinetMenu
        avatar='http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg'
        name='test name'
        items={actionableCabinetMenuItems}
        settingsLink='/'
        onItemClick={fakeItemClick}
        superEllipseId='header-image-clip-path'
      />
    );

    expect(fakeItemClick).not.toHaveBeenCalled();

    const menuItems = wrapper.find('.item');
    menuItems.forEach(i => i.simulate('click'));

    expect(fakeItemClick).toBeCalled();
    expect(fakeItemClick).toBeCalledTimes(menuItems.length);
  });
});
