import React from 'react';
import { mount } from 'enzyme';
import { PersonScreen } from '..';
import { SUPER_ELLIPSE_STYLE } from '../../../../common/constants';
import { colorKey } from '@dev-dep/ui-nucleons/avatar/user';

describe('<PersonScreen />', () => {
  beforeEach(() => {
    window[colorKey] = 'additional-deep-red';
  });

  afterEach(() => {
    delete window[colorKey];
  });

  it('should render with name', () => {
    const wrapper = mount(
      <PersonScreen
        name='Марина Михайловская'
        phoneText='88000000000 доб. 8823'
        secondPhoneText='+7 (900) 000 000'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <PersonScreen
        name='Марина Михайловская'
        appointment='Менеджер по игрушке'
        email='example@email.com'
        skype='example@skype.com'
        phoneHref='tel:88000000000;postd=8823'
        phoneText='88000000000 доб. 8823'
        secondPhoneHref='tel:+7900000000'
        secondPhoneText='+7 (900) 000 000'
        superEllipseStyle={SUPER_ELLIPSE_STYLE}
        arbitraryLinkProps={{
          href: '/test',
          children: 'test',
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
