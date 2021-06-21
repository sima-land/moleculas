import React from 'react';
import { Badge } from '..';
import { addDays, addMonths } from 'date-fns';

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
    fields={[
      { type: 'text', value: 'Товар партнёра' },
    ]}
  />
);

Primary.storyName = 'Использование';

export const TextView = () => (
  <Badge
    color='#00b8d4'
    href='https://sima-land.ru'
    fields={[
      { type: 'text', value: 'Система скидок' },
    ]}
  />
);

TextView.storyName = 'Текст';
TextView.parameters = {
  docs: {
    description: {
      story: 'Вариант, содержащий только текст',
    },
  },
};

export const IconView = () => (
  <Badge
    color='#ff7200'
    href='https://sima-land.ru'
    fields={[
      { type: 'svg-url', value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg' },
    ]}
  />
);

IconView.storyName = 'Иконка';
IconView.parameters = {
  docs: {
    description: {
      story: 'Вариант, содержащий только конку',
    },
  },
};

export const TimerView = () => (
  <Badge
    color='#b52ea8'
    href='https://sima-land.ru'
    fields={[
      { type: 'timer', value: addDays(new Date(), 7).toISOString() },
    ]}
  />
);

TimerView.storyName = 'Таймер';
TimerView.parameters = {
  docs: {
    description: {
      story: 'Вариант, содержащий только таймер',
    },
  },
};

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
TimerTextView.parameters = {
  docs: {
    description: {
      story: 'Вариант, содержащий таймер и текст',
    },
  },
};

export const OverflowView = () => (
  <div style={{ maxWidth: 240 }}>
    <Badge
      color='#b52ea8'
      href='https://sima-land.ru'
      fields={[
        { type: 'text', value: '-56% — Специальные цены на товары для росписи' },
      ]}
    />
  </div>
);

OverflowView.storyName = 'Переполнение';
OverflowView.parameters = {
  docs: {
    description: {
      story: 'Вариант с ограничением ширины контейнера',
    },
  },
};

export const NoInteractiveView = () => (
  <Badge
    color='#607d8b'
    fields={[
      { type: 'text', value: 'Уценённый товар' },
    ]}
  />
);

NoInteractiveView.storyName = 'Без ссылки и hover';
NoInteractiveView.parameters = {
  docs: {
    description: {
      story: 'Вариант без ссылки: отключается эффект при наведении',
    },
  },
};
