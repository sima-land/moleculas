import React, { useLayoutEffect, useRef, useState } from 'react';
import { getOriginCorrection } from '@sima-land/ui-nucleons/with-tooltip/utils';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import classnames from 'classnames/bind';
import styles from './hover-card.module.scss';
import { SmallRounds } from '@sima-land/ui-nucleons/styling/shapes';
import { BoxShadow } from '@sima-land/ui-nucleons/styling/shadows';
import { HoverCard as BaseHoverCard } from '../product-card';

export interface HoverCardProps extends ProductInfoProps {
  targetRef: React.RefObject<HTMLElement | null>;
  onMouseLeave?: () => void;
}

const cx = classnames.bind(styles);

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const HoverCard = ({ targetRef, onMouseLeave, ...productInfoProps }: HoverCardProps) => {
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
  });

  return (
    <BaseHoverCard
      ref={rootRef}
      style={{ padding: '16px 16px 24px 16px' }}
      className={cx('root', !ready && 'hidden', SmallRounds.all, BoxShadow.z4)}
      onMouseLeave={() => {
        setReady(false);
        onMouseLeave && onMouseLeave();
      }}
    >
      <ProductInfo {...productInfoProps} />
    </BaseHoverCard>
  );
};
