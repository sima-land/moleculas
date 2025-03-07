import type { AnchorHTMLAttributes } from 'react';

export interface TextContent {
  type: 'text';
  text: string;
}

export interface ColorContent {
  type: 'color';
  color: string;
}

export interface ImageContent {
  type: 'image';
  src: string;
}

export type ModifierContent = TextContent | ColorContent | ImageContent;

export interface ModifierProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'content'> {
  /** Вывести выбранным. */
  active?: boolean;

  /** Вывести отключенным. */
  disabled?: boolean;

  /** Вывести зачеркнутым. */
  crossedOut?: boolean;

  /** Вывести несуществующим. */
  nonExistent?: boolean;

  /** Содержимое. */
  content: ModifierContent;

  /** Высота по дизайн-гайдам. */
  size?: 'xs' | 's' | 'm';

  /** Кол-во. */
  count?: number;

  /** Выводить ли ярлык уценки. */
  markdown?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export type MoreButtonProps = Omit<ModifierProps, 'content' | 'crossedOut' | 'active' | 'count'> & {
  count: number;
};
