import { render } from '@testing-library/react';
import { PersonInfo } from '..';

describe('PersonInfo', () => {
  it('should renders correctly', () => {
    const person = {
      name: 'Иванов Денис Геннадьевич',
      appointment: 'Менеджер по игрушке',
      email: 'example@email.com',
      skype: 'example@skype.com',
      phoneHref: 'tel:88000000000;postd=8823',
      phoneText: '89998887766',
      secondPhoneHref: 'tel:+7900000000',
      secondPhoneText: '81112223344',
      arbitraryLinkProps: {
        href: 'test',
        children: 'Профиль организатора',
      },
    };

    const { queryAllByTestId, container } = render(<PersonInfo {...person} />);

    expect(queryAllByTestId('avatar')).toHaveLength(2);
    expect(container.textContent).toContain('Иванов Денис Геннадьевич');
    expect(container.textContent).toContain('Менеджер по игрушке');
    expect(container.textContent).toContain('Профиль организатора');
    expect(container.textContent).toContain('example@email.com');
    expect(container.textContent).toContain('example@skype.com');
    expect(container.textContent).toContain('89998887766Рабочий');
    expect(container.textContent).toContain('81112223344Сотовый');
  });
});
