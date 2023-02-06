import React, { useState } from 'react';
import { Badge } from '..';
import { addDays, addMonths } from 'date-fns';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
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

export function Hints() {
  const [open, setOpen] = useState(false);
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <div style={{ padding: '48px', display: 'flex', justifyContent: 'center' }}>
      <Badge
        ref={refs.setReference}
        color='#607d8b'
        href='https://sima-land.ru'
        fields={[{ type: 'text', value: 'Уценённый товар' }]}
        {...getReferenceProps()}
      />
      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} {...getFloatingProps()}>
        Привет, это очень простой хинт
      </Hint>
    </div>
  );
}

Hints.storyName = 'С хинтом';
