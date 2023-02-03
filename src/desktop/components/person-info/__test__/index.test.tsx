import React from 'react';
import { render } from '@testing-library/react';
import { PersonInfo } from '..';

describe('PersonInfo', () => {
  it('should renders correctly', () => {
    const { queryAllByTestId, container } = render(
      <PersonInfo
        name='Марина Михайловская'
        appointment='Менеджер по игрушке'
        arbitraryLinkProps={{
          children: 'Профиль организатора',
          href: 'https://www.test.com',
        }}
        email='example@email.com'
        skype='example@skype.com'
        phoneText='88000000000 доб. 8823'
        secondPhoneText='+7 (900) 000 000'
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
      />,
    );

    expect(queryAllByTestId('avatar')).toHaveLength(1);
    expect(container.textContent).toContain('Марина Михайловская');
    expect(container.textContent).toContain('Менеджер по игрушке');
    expect(container.textContent).toContain('Профиль организатора');
    expect(container.textContent).toContain('Skype: example@skype.com');
    expect(container.textContent).toContain('88000000000 доб. 8823');
    expect(container.textContent).toContain('+7 (900) 000 000');

    // social
    expect(container.textContent).toContain('vk.com/oks2art');
    expect(container.textContent).toContain('twitter.com/oks2art');
    expect(container.textContent).toContain('odnoklassniki.ru/oks2art');
  });
});
