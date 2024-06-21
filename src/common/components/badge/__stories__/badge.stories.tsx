import { useState } from 'react';
import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { addDays, addMonths } from 'date-fns';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import { Sandbox } from '#docs-utils';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <Badge
      href='https://sima-land.ru'
      color='#002b41'
      fields={[{ type: 'text', value: 'Товар партнёра' }]}
    />
  );
}

Primary.storyName = 'Простой пример';

export function TextView() {
  return (
    <Badge
      color='#00b8d4'
      href='https://sima-land.ru'
      fields={[{ type: 'text', value: 'Система скидок' }]}
    />
  );
}

TextView.storyName = 'Текст';

export function IconView() {
  return (
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
}

IconView.storyName = 'Иконка';

export function TimerView() {
  return (
    <Badge
      color='#b52ea8'
      href='https://sima-land.ru'
      fields={[{ type: 'timer', value: addDays(new Date(), 7).toISOString() }]}
    />
  );
}

TimerView.storyName = 'Таймер';

export function TimerTextView() {
  return (
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
}

TimerTextView.storyName = 'Таймер + текст';

export function OverflowView() {
  return (
    <div style={{ maxWidth: 240 }}>
      <Badge
        color='#b52ea8'
        href='https://sima-land.ru'
        fields={[{ type: 'text', value: '-56% — Специальные цены на товары для росписи' }]}
      />
    </div>
  );
}

OverflowView.storyName = 'Переполнение';

export function NoHoverEffectView() {
  return <Badge color='#607d8b' fields={[{ type: 'text', value: 'Уценённый товар' }]} />;
}

NoHoverEffectView.storyName = 'Без ссылки и hover';

export function HintsView() {
  const [open, setOpen] = useState(false);
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
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
    </>
  );
}

HintsView.storyName = 'С хинтом';

export function DifferentStates() {
  const [shape, setShape] = useState<BadgeProps['shape']>('unset');
  const [color, setColor] = useState<string>(COLORS.get('additional-cyan') ?? '#000');
  const [coloring, setColoring] = useState<BadgeProps['coloring']>('outline');
  const [content, setContent] = useState('text');
  const [anchor, setAnchor] = useState(true);

  let fields: BadgeProps['fields'];

  switch (content) {
    case 'icon': {
      fields = [
        {
          type: 'svg-url',
          value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg',
        },
      ];
      break;
    }
    case 'text-overflow': {
      fields = [
        {
          type: 'text',
          value: '-56% — Специальные цены на товары для росписи',
        },
      ];
      break;
    }
    case 'text':
    default: {
      fields = [
        {
          type: 'text',
          value: 'Товар партнёра',
        },
      ];
      break;
    }
  }

  return (
    <Sandbox
      controls={[
        {
          label: 'Цвет',
          type: 'select',
          options: [...COLORS.entries()].map(([displayName, value]) => ({
            displayName,
            value,
          })),
          bind: [color, setColor],
        },
        {
          label: 'Заливка',
          type: 'select',
          options: ['outline', 'fill'],
          bind: [coloring as string, setColoring],
        },
        {
          label: 'Форма',
          type: 'select',
          options: ['unset', 'round', 'pill'],
          bind: [shape as string, setShape],
        },
        {
          label: 'Содержимое',
          type: 'select',
          options: [
            {
              displayName: 'Текст',
              value: 'text',
            },
            {
              displayName: 'Текст с переполнением',
              value: 'text-overflow',
            },
            {
              displayName: 'Иконка',
              value: 'icon',
            },
          ],
          bind: [content, setContent],
        },
        {
          label: 'Ссылка',
          type: 'toggle',
          bind: [anchor, setAnchor],
        },
      ]}
    >
      <div style={{ maxWidth: '240px' }}>
        <Badge
          shape={shape}
          color={color}
          coloring={coloring}
          href={anchor ? 'https://sima-land.ru' : undefined}
          fields={fields}
        />
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';
