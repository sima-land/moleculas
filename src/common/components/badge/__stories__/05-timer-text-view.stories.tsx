import { Badge } from '@sima-land/moleculas/common/components/badge';
import { addMonths } from 'date-fns';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

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
