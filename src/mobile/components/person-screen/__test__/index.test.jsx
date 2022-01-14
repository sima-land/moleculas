import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { PersonScreen } from '..';
import { colorKey } from '@sima-land/ui-nucleons/avatar/user';

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
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <PersonScreen
        onClose={spy}
        name='Марина Михайловская'
        appointment='Менеджер по игрушке'
        email='example@email.com'
        skype='example@skype.com'
        phoneHref='tel:88000000000;postd=8823'
        phoneText='88000000000 доб. 8823'
        secondPhoneHref='tel:+7900000000'
        secondPhoneText='+7 (900) 000 000'
        arbitraryLinkProps={{
          href: '/test',
          children: 'test',
        }}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('button[data-testid="screen:close"]').simulate('click');
    });

    expect(spy).toBeCalledTimes(1);
  });
});
