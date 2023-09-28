import { ReactNode } from 'react';
import { BadgeList } from '..';
import { Badge, BadgeProps } from '../../badge';
import { render } from '@testing-library/react';

const badges: BadgeProps[] = [
  { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
  { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
  { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
  { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
];

describe('BadgeList', () => {
  it('renders correctly', () => {
    const { container, getAllByTestId } = render(
      <BadgeList className='test'>
        {badges.map((item, index) => (
          <Badge key={index} {...item} />
        ))}
      </BadgeList>,
    );

    expect(container).toMatchSnapshot();
    expect(getAllByTestId('badge')).toHaveLength(4);
  });

  it('should ignore non Badge/BadgeList.Slot children', () => {
    function SomeWrapper({ children }: { children: ReactNode }) {
      return <>{children}</>;
    }

    const { queryAllByTestId } = render(
      <BadgeList className='test'>
        {badges.map((item, index) => (
          <BadgeList.Slot key={index}>
            <SomeWrapper>
              <Badge {...item} />
            </SomeWrapper>
          </BadgeList.Slot>
        ))}
        <div data-testid='invalid-child'>Hello</div>
      </BadgeList>,
    );

    expect(queryAllByTestId('badge')).toHaveLength(4);
    expect(queryAllByTestId('invalid-child')).toHaveLength(0);
  });
});
