import { useLayoutEffect, useRef, useState } from 'react';
import { HoverCardProps } from './types';
import { SmallRounds, BoxShadow } from '@sima-land/ui-nucleons/styling';
import { HoverCard as BaseHoverCard } from '../product-card';
import classnames from 'classnames/bind';
import styles from './hover-card.m.scss';
import { getPositionedParentOffset } from '@sima-land/ui-nucleons/helpers';

const cx = classnames.bind(styles);

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export function HoverCard({ targetRef, onMouseLeave, children }: HoverCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (targetRef.current && rootRef.current) {
      const element = rootRef.current;
      const rect = targetRef.current.getBoundingClientRect();
      const correction = getPositionedParentOffset(rootRef.current);

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
      {children}
    </BaseHoverCard>
  );
}
