import { BadgeList } from '@sima-land/moleculas/common/components/badge-list';
import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { ReactNode } from 'react';
import { addMonths } from 'date-fns';

export default {
  title: 'common/BadgeList',
  component: BadgeList,
  parameters: {
    layout: 'padded',
  },
};

const items: BadgeProps[] = [
  {
    href: 'https://sima-land.ru',
    color: '#002b41',
    fields: [{ type: 'text', value: 'Товар партнёра' }],
  },
  {
    color: '#00b8d4',
    href: 'https://sima-land.ru',
    fields: [{ type: 'text', value: 'Система скидок' }],
  },
  {
    color: '#b52ea8',
    href: 'https://sima-land.ru',
    fields: [
      { type: 'timer', value: addMonths(new Date(), 3).toISOString() },
      { type: 'text', value: ' — Специальные цены на музыкальные инструменты' },
    ],
  },
];

const DemoBlock = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ border: '20px solid #ddd', marginBottom: '16px' }}>
      <div style={{ maxWidth: '196px' }}>{children}</div>
    </div>
  </div>
);

export function Primary() {
  return (
    <>
      <DemoBlock>
        <BadgeList lineLimit={3}>
          {items.map((item, index) => (
            <Badge key={index} {...item} />
          ))}
        </BadgeList>
      </DemoBlock>

      <DemoBlock>
        <BadgeList lineLimit={2}>
          {items.map((item, index) => (
            <Badge key={index} {...item} />
          ))}
        </BadgeList>
      </DemoBlock>

      <DemoBlock>
        <BadgeList lineLimit={1}>
          {items.map((item, index) => (
            <Badge key={index} {...item} />
          ))}
        </BadgeList>
      </DemoBlock>
    </>
  );
}

Primary.storyName = 'Простой пример';
