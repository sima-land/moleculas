import { Badge } from '@sima-land/moleculas/common/components/badge';
import { addDays } from 'date-fns';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

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
