import React, { useLayoutEffect, useRef, useState } from 'react';
import { getOriginCorrection } from '@sima-land/ui-nucleons/with-tooltip/utils';
import { ProductInfo, ProductData, ProductInfoProps } from '../../../common/components/product-info';
import classnames from 'classnames/bind';
import styles from './hover-card.module.scss';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';
import { QuickViewButton } from '../../../common/components/quick-view-button';
import withPrevent from '@sima-land/ui-nucleons/helpers/with-prevent';
import { SmallRounds } from '@sima-land/ui-nucleons/styling/shapes';
import { BoxShadow } from '@sima-land/ui-nucleons/styling/shadows';

export interface HoverCardProps extends ProductInfoProps {
  targetRef: React.RefObject<HTMLElement | null>
  onMouseLeave?: () => void
  onQuickViewClick?: (info: ProductData) => void
  renderCartControl?: (Slot: typeof CartControlSlot) => React.ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Компонент-слот для вывода контрола товара в корзине.
 * @param props Свойства.
 * @return Элемент.
 */
const CartControlSlot = ({
  children,
  stepText,
  markupText,
}: {
  children: React.ReactNode;
  stepText?: string;
  markupText?: string;
}) => (
  <div className={cx('control-wrapper')}>
    <div className={cx('control')}>
      {children}
    </div>

    {stepText && (
      <div className={cx('unit-text')}>
        {stepText}
      </div>
    )}

    {markupText && (
      <div className={cx('bottom-text')}>
        {markupText}
      </div>
    )}
  </div>
);

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
  renderCartControl,
  ...restProps
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
    <div
      ref={rootRef}
      data-testid='product-carousel:hover-card'
      className={cx('root', !ready && 'hidden', SmallRounds.all, BoxShadow.z4)}
      onMouseLeave={() => {
        setReady(false);
        onMouseLeave && onMouseLeave();
      }}
    >
      <ProductInfo {...restProps} data={data}>
        <ProductInfo.OnImage>
          <WithHint hint='Быстрый просмотр' direction='left'>
            {(ref, toggle) => (
              <QuickViewButton
                ref={ref as any}
                onMouseEnter={() => toggle(true)}
                onMouseLeave={() => toggle(false)}
                className={cx('quick-view-button')}
                onClick={withPrevent(() => onQuickViewClick?.(data))}
              />
            )}
          </WithHint>
        </ProductInfo.OnImage>
      </ProductInfo>

      {renderCartControl?.(CartControlSlot)}
    </div>
  );
};
