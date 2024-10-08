import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'common/Badge',
  title: 'Различные состояния',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentStates() {
  const [shape, setShape] = useState<BadgeProps['shape']>('unset');
  const [color, setColor] = useState<string>(COLORS.get('additional-cyan') ?? '#000');
  const [coloring, setColoring] = useState<BadgeProps['coloring']>('outline');
  const [content, setContent] = useState('text');
  const [tag, setTag] = useState('a');

  let fields: BadgeProps['fields'];

  switch (content) {
    case 'text': {
      fields = [
        {
          type: 'text',
          value: 'Товар партнёра',
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
    case 'icon': {
      fields = [
        {
          type: 'svg-url',
          value: 'public/images/placeholder_black.svg',
        },
      ];
      break;
    }
    case 'icon+text': {
      fields = [
        {
          type: 'svg-url',
          value: 'public/images/placeholder_black.svg',
        },
        {
          type: 'text',
          value: 'Товар партнёра',
        },
      ];
      break;
    }
    case 'text+icon': {
      fields = [
        {
          type: 'text',
          value: 'Товар партнёра',
        },
        {
          type: 'svg-url',
          value: 'public/images/placeholder_black.svg',
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
            {
              displayName: 'Иконка + текст',
              value: 'icon+text',
            },
            {
              displayName: 'Текст + иконка',
              value: 'text+icon',
            },
          ],
          bind: [content, setContent],
        },
        {
          label: 'Ссылка',
          type: 'select',
          options: [
            {
              displayName: 'Anchor',
              value: 'a',
            },
            {
              displayName: 'Button',
              value: 'button',
            },
            {
              displayName: 'Span',
              value: 'span',
            },
            {
              displayName: 'Div',
              value: 'div',
            },
          ],
          bind: [tag, setTag],
        },
      ]}
    >
      <div style={{ maxWidth: '240px' }}>
        {tag === 'a' && (
          <Badge
            as='anchor'
            href='https://sima-land.ru'
            target='_blank'
            shape={shape}
            color={color}
            coloring={coloring}
            fields={fields}
          />
        )}

        {tag === 'button' && (
          <Badge as='button' shape={shape} color={color} coloring={coloring} fields={fields} />
        )}

        {tag === 'span' && (
          <Badge as='span' shape={shape} color={color} coloring={coloring} fields={fields} />
        )}

        {tag === 'div' && (
          <Badge as='div' shape={shape} color={color} coloring={coloring} fields={fields} />
        )}
      </div>
    </Sandbox>
  );
}
