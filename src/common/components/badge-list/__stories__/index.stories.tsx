import React from 'react';
import { BadgeList } from '..';
import { Badge, BadgeProps } from '../../badge';
import { addMonths } from 'date-fns';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';

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

export default {
  title: 'common/BadgeList',
  component: BadgeList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент списка шильдиков',
      },
    },
  },
};

const DemoBlock = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ border: '20px solid #ddd', marginBottom: '16px' }}>
      <div style={{ maxWidth: '196px' }}>{children}</div>
    </div>
  </div>
);

export const Primary = () => (
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

Primary.storyName = 'Простой пример';

export function Hints() {
  return (
    <DemoBlock>
      <BadgeList lineLimit={3}>
        {items.map((item, index) => (
          <BadgeList.Slot key={index}>
            <WithHint hint='Тестовый хинт для шильика!' direction='right'>
              {(ref, toggle) => (
                <Badge
                  {...item}
                  ref={ref as any}
                  onMouseOver={() => toggle(true)}
                  onMouseLeave={() => toggle(false)}
                />
              )}
            </WithHint>
          </BadgeList.Slot>
        ))}
      </BadgeList>
    </DemoBlock>
  );
}

Hints.storyName = 'С хинтами';
