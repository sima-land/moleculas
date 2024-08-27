import type { AnchorHTMLAttributes, CSSProperties } from 'react';

export interface BadgeField {
  type: 'text' | 'timer' | 'svg-url';
  value: string;
}

export interface BadgeStyle extends CSSProperties {
  '--badge-color'?: string;
  '--badge-text-color'?: string;
  '--badge-border-color'?: string;
}

export interface BadgeProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  /** Основной цвет, используется как цвет обводки, иконок и текста. */
  color?: string;

  /** Как применится цвет. */
  coloring?: 'fill' | 'outline' | 'unset';

  /** Содержимое шильдика. */
  fields?: Array<BadgeField>;

  /** Форма скруглений. */
  shape?: 'round' | 'pill' | 'unset';

  /** Нужен ли эффект при наведении. */
  withHoverEffect?: boolean;

  /** Стили. */
  style?: BadgeStyle;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
