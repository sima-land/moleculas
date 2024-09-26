import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  Ref,
} from 'react';

export interface BadgeField {
  type: 'text' | 'timer' | 'svg-url';
  value: string;
}

export interface BadgeStyle extends CSSProperties {
  '--badge-color'?: string;
  '--badge-text-color'?: string;
  '--badge-border-color'?: string;
}

export interface BadgeSpecificProps {
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

  rootRef?: Ref<HTMLElement>;
}

export interface BadgeAsAnchorProps
  extends BadgeSpecificProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color' | 'style'> {
  as?: 'anchor';
}

export interface BadgeAsButtonProps
  extends BadgeSpecificProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'style'> {
  as: 'button';
}

export interface BadgeAsDivProps
  extends BadgeSpecificProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'style'> {
  as: 'div';
}

export interface BadgeAsSpanProps
  extends BadgeSpecificProps,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color' | 'style'> {
  as: 'span';
}

export type BadgeProps =
  | BadgeAsAnchorProps
  | BadgeAsButtonProps
  | BadgeAsDivProps
  | BadgeAsSpanProps;
