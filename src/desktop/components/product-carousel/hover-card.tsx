import React, { useLayoutEffect, useRef, useState } from 'react';
import { getOriginCorrection } from '@sima-land/ui-nucleons/with-tooltip/utils';
import { ProductInfoProps } from '../../../common/components/product-info';
import classnames from 'classnames/bind';
import styles from './hover-card.module.scss';
import { SmallRounds } from '@sima-land/ui-nucleons/styling/shapes';
import { BoxShadow } from '@sima-land/ui-nucleons/styling/shadows';
import { ProductCard } from '../product-card';

export interface HoverCardProps extends ProductInfoProps {
  targetRef: React.RefObject<HTMLElement | null>;
  onMouseLeave?: () => void;
  onQuickViewClick?: () => void;
  renderCartControl?: (Slot: typeof ProductCard.CartControl) => React.ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const HoverCard = ({
  data,
  targetRef,
  onMouseLeave,
  onQuickViewClick,
  onLinkClick,
  renderCartControl,
}: HoverCardProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (targetRef.current && rootRef.current) {
      const element = rootRef.current;
      const rect = targetRef.current.getBoundingClientRect();
      const correction = getOriginCorrection(rootRef.current);

      element.style.left = `${correction.x + rect.left - 16}px`;
      element.style.top = `${correction.y + rect.top - 16}px`;
      element.style.width = `${rect.width + 32}px`;

      setReady(true);
    }
  }, [data]);

  return (
    <ProductCard
      data={data}
      onLinkClick={onLinkClick}
      onQuickViewClick={onQuickViewClick}
      // div props
      ref={rootRef}
      data-testid='product-carousel:hover-card'
      className={cx('root', !ready && 'hidden', SmallRounds.all, BoxShadow.z4)}
      onMouseLeave={() => {
        setReady(false);
        onMouseLeave && onMouseLeave();
      }}
    >
      {renderCartControl?.(ProductCard.CartControl)}
    </ProductCard>
  );
};
