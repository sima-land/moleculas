import { Sandbox } from '#docs-utils';
import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { useState } from 'react';

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
