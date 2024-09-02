import type { CSSProperties, ReactNode, RefObject } from 'react';
import type { CarouselProps } from '@sima-land/ui-nucleons/carousel';

export interface ItemSize {
  xs?: 2 | 3 | 4;
  s?: 2 | 3 | 4;
  m?: 2 | 3 | 4;
  l?: 2 | 3 | 4;
  xl?: 2 | 3 | 4;
}

export interface ProductCarouselProps {
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

  /** Опции области, которая вызовет onNeedRequest. */
  needRequestOptions?: IntersectionObserverInit;

  /** Предоставит свойства для элемента карусели. */
  itemProps?: { style?: CSSProperties; className?: string };

  /** Активирует "бесконечную" прокрутку карусели. */
  infinite?: boolean;

  /** Свойства стрелок. */
  controlProps?: CarouselProps['controlProps'];

  /** Отношение высоты картинки товара к ее ширине. Нужно для позиционирования стрелок. */
  itemImageRatio?: number;
}

export interface HoverCardProps {
  targetRef: RefObject<HTMLElement | null>;
  onMouseLeave?: () => void;
  children?: ReactNode;
}
