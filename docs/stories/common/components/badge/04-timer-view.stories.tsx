import { Badge } from '@sima-land/moleculas/common/components/badge';
import { addDays } from 'date-fns';

export const meta = {
  category: 'common/Badge',
  title: 'Таймер',
  parameters: {
    layout: 'padded',
  },
};

export default function TimerView() {
  return (
    <Badge
      color='#b52ea8'
      href='https://sima-land.ru'
      fields={[{ type: 'timer', value: addDays(new Date(), 7).toISOString() }]}
    />
  );
}
