import React from 'react';
import { mount } from 'enzyme';
import { PersonModal } from '..';
import { colorKey } from '@sima-land/ui-nucleons/avatar/user';
import { Clean } from '@sima-land/ui-nucleons/clean-buttons';
import { Modal } from '@sima-land/ui-nucleons/modal';

describe('<PersonModal />', () => {
  beforeEach(() => {
    window[colorKey] = 'additional-deep-red';
  });

  afterEach(() => {
    delete window[colorKey];
  });

  it('should renders properly with minimal props', () => {
    const wrapper = mount(
      <PersonModal name='Марина Михайловская' appointment='Дворник' social='bad value' />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass scroll disable props to Modal', () => {
    const wrapper = mount(
      <PersonModal
        name='Марина Михайловская'
        appointment='Дворник'
        social='bad value'
        withScrollDisable
        scrollDisableOptions={{ reserveScrollBarGap: true }}
      />,
    );

    expect(wrapper.find(Modal).props().withScrollDisable).toBe(true);
    expect(wrapper.find(Modal).props().scrollDisableOptions).toEqual({ reserveScrollBarGap: true });
  });

  it('should renders properly with all props', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <PersonModal
        name='Марина Михайловская'
        appointment='Менеджер по игрушке'
        email='example@email.com'
        skype='example@skype.com'
        social={[
          {
            children: 'vk.com/oks2art',
            href: 'https://example.com',
          },
          {
            children: 'twitter.com/oks2art',
            href: 'https://example.com',
          },
          {
            children: 'odnoklassniki.ru/oks2art',
            href: 'https://example.com',
          },
        ]}
        phoneHref='tel:88000000000;postd=8823'
        phoneText='88000000000 доб. 8823'
        secondPhoneHref='tel:+7900000000'
        secondPhoneText='+7 (900) 000 000'
        arbitraryLinkProps={{
          href: '/test',
          children: 'test',
        }}
        onClose={onClose}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(onClose).not.toHaveBeenCalled();
    wrapper.find(Clean.Button).at(0).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
