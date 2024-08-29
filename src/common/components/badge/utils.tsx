import type { ReactNode } from 'react';
import type { BadgeField } from './types';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { GRADIENTS } from '@sima-land/ui-nucleons/gradients';
import { Timer } from '@sima-land/ui-nucleons/timer';
import styles from './badge.m.scss';

/**
 * Если переданное значение является токеном цвета/градиента, вернёт CSS-значение с соответствующей CSS-переменной.
 * Иначе вернет само значение.
 * @param value Значение.
 * @return Значение или undefined.
 */
export function tokenToCustomProperty(value: string | undefined): string | undefined {
  if (typeof value !== 'string') {
    return value;
  }

  if (value.startsWith('color/')) {
    const colorName = value.replace('color/', '');

    if (!COLORS.has(colorName as any)) {
      return value;
    }

    return `var(--color-${colorName})`;
  }

  if (value.startsWith('gradient/')) {
    const gradientName = value.replace('gradient/', '');

    if (!GRADIENTS.has(gradientName as any)) {
      return value;
    }

    return `var(--gradient-${gradientName})`;
  }

  return value;
}

/**
 * Сформирует содержимое шильдика на основе списка полей.
 * Текстовые поля (type === text | timer) идущие подряд, будут объединены в один span.
 * Между текстовыми полями в span будет вставлен 1 пробел.
 * @param fields Поля.
 * @return СОдержимое шильдика.
 */
export function renderFields(fields: BadgeField[]): ReactNode[] {
  const result: ReactNode[] = [];

  let item: null | Array<ReactNode> = null;

  for (const field of fields) {
    if (!item) {
      switch (field.type) {
        case 'text': {
          item = [field.value];
          break;
        }

        case 'timer': {
          item = [<Timer key={0} date={field.value} timeout={1000 * 60} format={formatDistance} />];
          break;
        }

        case 'svg-url': {
          result.push(<img key={result.length} className={styles.icon} src={field.value} alt='' />);
          break;
        }
      }
    } else {
      switch (field.type) {
        case 'text': {
          item.push(' ');
          item.push(field.value);
          break;
        }

        case 'timer': {
          item.push(' ');
          item.push(
            <Timer
              key={item.length}
              date={field.value}
              timeout={1000 * 60}
              format={formatDistance}
            />,
          );
          break;
        }

        case 'svg-url': {
          // вложенный span нужен для того чтобы объединить `display: inline-flex` и `text-overflow: ellipsis`
          result.push(
            <span key={result.length} className={styles.content}>
              {item}
            </span>,
          );
          item = null;
          result.push(<img key={result.length} className={styles.icon} src={field.value} alt='' />);
          break;
        }
      }
    }
  }

  if (item) {
    result.push(
      <span key={result.length} className={styles.content}>
        {item}
      </span>,
    );
    item = null;
  }

  return result;
}

/**
 * Форматирует оставшееся время.
 * @param distance Оставшееся время.
 * @return Отформатированное время.
 */
export function formatDistance({
  days,
  hours,
  minutes,
}: {
  days: number;
  hours: number;
  minutes: number;
}) {
  return `${toTimePart(days)}:${toTimePart(hours % 24)}:${toTimePart(minutes % 60)}`;
}

/**
 * Форматирует число добавляя нули при необходимости.
 * @param n Число.
 * @return Отформатированное число.
 */
export function toTimePart(n: number) {
  return `${n}`.padStart(2, '0');
}
