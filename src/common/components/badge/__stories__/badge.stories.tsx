import React from 'react';
import { Badge } from '..';
import { addDays, addMonths } from 'date-fns';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент шильдика',
      },
    },
  },
};

export const Primary = () => (
  <Badge
    href='https://sima-land.ru'
    color='#002b41'
    fields={[{ type: 'text', value: 'Товар партнёра' }]}
  />
);

Primary.storyName = 'Простой пример';

export const TextView = () => (
  <Badge
    color='#00b8d4'
    href='https://sima-land.ru'
    fields={[{ type: 'text', value: 'Система скидок' }]}
  />
);

TextView.storyName = 'Текст';

export const IconView = () => (
  <Badge
    color='#ff7200'
    href='https://sima-land.ru'
    fields={[
      {
        type: 'svg-url',
        value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg',
      },
    ]}
  />
);

IconView.storyName = 'Иконка';

export const TimerView = () => (
  <Badge
    color='#b52ea8'
    href='https://sima-land.ru'
    fields={[{ type: 'timer', value: addDays(new Date(), 7).toISOString() }]}
  />
);

TimerView.storyName = 'Таймер';

export const TimerTextView = () => (
  <>
    <Badge
      color='#b52ea8'
      href='https://sima-land.ru'
      fields={[
        { type: 'timer', value: addMonths(new Date(), 3).toISOString() },
        { type: 'text', value: ' — Специальные цены на музыкальные инструменты' },
      ]}
    />
    <div style={{ height: 8 }} />
    <Badge
      color='#b52ea8'
      href='https://sima-land.ru'
      fields={[
        { type: 'text', value: '-45%' },
        { type: 'timer', value: addMonths(new Date(), 3).toISOString() },
      ]}
    />
  </>
);

TimerTextView.storyName = 'Таймер + текст';

export const OverflowView = () => (
  <div style={{ maxWidth: 240 }}>
    <Badge
      color='#b52ea8'
      href='https://sima-land.ru'
      fields={[{ type: 'text', value: '-56% — Специальные цены на товары для росписи' }]}
    />
  </div>
);

OverflowView.storyName = 'Переполнение';

export const NoInteractiveView = () => (
  <Badge color='#607d8b' fields={[{ type: 'text', value: 'Уценённый товар' }]} />
);

NoInteractiveView.storyName = 'Без ссылки и hover';

export const Hints = () => (
  <div style={{ padding: '48px', display: 'flex', justifyContent: 'center' }}>
    <WithHint hint='Привет, это очень простой хинт'>
      {(ref, toggle) => (
        <Badge
          ref={ref as any}
          color='#607d8b'
          href='https://sima-land.ru'
          fields={[{ type: 'text', value: 'Уценённый товар' }]}
          onMouseOver={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        />
      )}
    </WithHint>
  </div>
);

Hints.storyName = 'С хинтом';
