import React from 'react';
import { mount, shallow } from 'enzyme';
import CabinetMenu from '..';
import { cabinetMenuItems } from '../../../../common/__fixtures__/cabinet-menu';
import { colorKey } from '@dev-dep/ui-nucleons/avatar/user';

describe('<CabinetMenu />', () => {
  beforeEach(() => {
    window[colorKey] = 'additional-deep-red';
  });

  afterEach(() => {
    delete window[colorKey];
  });

  it('should renders properly with user name', () => {
    const wrapper = mount(
      <CabinetMenu
        avatar='http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg'
        userName='test name'
        items={cabinetMenuItems}
        settingsLink='/'
        onReportClick={jest.fn()}
        superEllipseId='header-image-clip-path'
      />
    );

    expect(wrapper.find('.dot')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
  it('should renders properly w/o user name', () => {
    const wrapper = mount(
      <CabinetMenu
        avatar='http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg'
        items={cabinetMenuItems}
        settingsLink='/'
        onReportClick={jest.fn()}
        superEllipseId='header-image-clip-path'
      />
    );

    expect(wrapper.find('.dot')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
  it('should call actions corrrectly', () => {
    const fakeItemClick = jest.fn();
    const wrapper = shallow(
      <CabinetMenu
        avatar='http://themoviescore.com/wp-content/uploads/2013/08/ff072a39a2709e4fec2cd05e3763d68d.jpg'
        userName='test name'
        items={cabinetMenuItems}
        settingsLink='/'
        onReportClick={fakeItemClick}
        superEllipseId='header-image-clip-path'
      />
    );

    expect(fakeItemClick).not.toHaveBeenCalled();

    const menuItems = wrapper.find('.item');
    menuItems.forEach(i => i.simulate('click'));

    expect(fakeItemClick).toBeCalled();
    expect(fakeItemClick).toBeCalledTimes(1);
  });
});