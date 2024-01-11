import type { CSSProperties, ReactNode, RefObject } from 'react';
import type { ProductCardProps } from '../product-card';

export interface ItemSize {
  xs?: 2 | 3 | 4;
  s?: 2 | 3 | 4;
  m?: 2 | 3 | 4;
  l?: 2 | 3 | 4;
  xl?: 2 | 3 | 4;
}

export interface ProductCarouselProps
  extends Pick<ProductCardProps, 'reduceBaseInfo' | 'reduceHoverInfo'> {
  /** CSS-класс для корневого элемента. */
  className?: string;

  /** Элементы карусели. */
  children?: ReactNode;

  /** Настройки размера элемента карусели. */
  itemSize?: ItemSize | 'unset';

  /** Сработает при попадании карусели во viewport. */
  onInViewport?: () => void;

  /** Сработает при попадании карусели в область достаточно близкую к viewport'у. */
  onNeedRequest?: () => void;

  /** Нужно ли показывать всплывающую карточку при наведении на элемент карусели. */
  withHoverCard?: boolean;

  /** Предоставит свойства для элемента карусели. */
  itemProps?: { style?: CSSProperties; className?: string };
}

export interface HoverCardProps {
  targetRef: RefObject<HTMLElement | null>;
  onMouseLeave?: () => void;
  children?: ReactNode;
}
