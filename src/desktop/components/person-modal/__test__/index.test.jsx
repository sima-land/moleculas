import React from 'react';
import { mount } from 'enzyme';
import { PersonModal } from '..';
import { colorKey } from '@dev-dep/ui-nucleons/avatar/user';

describe('<PersonModal />', () => {
  beforeEach(() => {
    window[colorKey] = 'additional-deep-red';
  });

  afterEach(() => {
    delete window[colorKey];
  });

  it('should renders properly with minimal props', () => {
    const wrapper = mount(
      <PersonModal
        name='Марина Михайловская'
        appointment='Дворник'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders properly with all props', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <PersonModal
        name='Марина Михайловская'
        appointment='Менеджер по игрушке'
        email='example@email.com'
        skype='example@skype.com'
        social='https://vk.com/oks2art https://vk.com/oks2art'
        phoneHref='tel:88000000000;postd=8823'
        phoneText='88000000000 доб. 8823'
        secondPhoneHref='tel:+7900000000'
        secondPhoneText='+7 (900) 000 000'
        arbitraryLinkProps={{
          href: '/test',
          children: 'test',
        }}
        onClose={onClose}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(onClose).not.toHaveBeenCalled();
    wrapper.find('button.clean-button').at(0).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
