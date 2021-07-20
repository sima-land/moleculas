import React, { useLayoutEffect, useRef, useState } from 'react';
import { getOriginCorrection } from '@sima-land/ui-nucleons/with-tooltip/utils';
import { ProductCard, ProductCardProps } from './product-card';
import classnames from 'classnames/bind';
import styles from './hover-card.module.scss';
import { CarouselItem } from './types';

export interface HoverCardProps extends Omit<ProductCardProps, 'onChange' | 'inCartControl' | 'productInfo'> {
  info: CarouselItem
  targetRef: React.RefObject<HTMLElement | null>
  onAdd?: (info: CarouselItem) => void
  onChange?: (info: CarouselItem, newQty: number) => void
  onMouseLeave?: () => void
  onQuickViewClick?: (info: CarouselItem) => void
  onSubtract?: (info: CarouselItem) => void
}

const cx = classnames.bind(styles);

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const HoverCard = ({
  info,
  targetRef,
  onAdd,
  onChange,
  onMouseLeave,
  onQuickViewClick,
  onSubtract,
  ...restProps
}: HoverCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (info && targetRef.current && ref.current) {
      const element = ref.current;
      const rect = targetRef.current.getBoundingClientRect();
      const correction = getOriginCorrection(ref.current);

      element.style.left = `${correction.x + rect.left - 16}px`;
      element.style.top = `${correction.y + rect.top - 16}px`;
      element.style.width = `${rect.width + 32}px`;

      setReady(true);
    }
  }, [info]);

  // eslint-disable-next-line require-jsdoc
  const bindInfo = (fn: any) => () => fn && fn(info);

  return (
    <ProductCard
      {...restProps}
      ref={ref}
      className={cx('card', !ready && 'hidden')}
      onMouseLeave={() => {
        setReady(false);
        onMouseLeave && onMouseLeave();
      }}
      inCartControl={{
        ...info.cart,
        onAdd: bindInfo(onAdd),
        onChange: (newQty: any) => onChange && onChange(info, newQty),
        onSubtract: bindInfo(onSubtract),
      } as any}
      productInfo={{
        ...info.product,
        onQuickViewClick: bindInfo(onQuickViewClick),
      } as any}
    />
  );
};
