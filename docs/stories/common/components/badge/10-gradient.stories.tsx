import { Badge } from '@sima-land/moleculas/common/components/badge';
import styles from './gradient.m.scss';

export const meta = {
  category: 'common/Badge',
  title: 'Заливка градиентом',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentStates() {
  return (
    // ВАЖНО: для использования градиентов необходимо наличие соответствующих css-переменных выше в DOM
    <div className={styles.container}>
      <Badge
        shape='round'
        coloring='fill'
        color='gradient/gold'
        fields={[
          {
            type: 'svg-url',
            value: 'public/images/logo_white.svg',
          },
          {
            type: 'text',
            value: 'Сделано в Сима-ленд',
          },
        ]}
      />
    </div>
  );
}
