import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { Price } from '@sima-land/ui-nucleons/price';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import { useImageStub } from '../../../hooks';
import classNames from 'classnames/bind';
import BrokenSVG from '../../../icons/image-broken.svg';
import styles from './product-brief.module.scss';

export interface ProductBriefProps extends HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'l';
  title?: string;
  price?: string | number;
  currency?: string;
  footer?: ReactNode;
  href?: string;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
  imageSrc?: string;
  loading?: boolean;
}

const cx = classNames.bind(styles);

/**
 * Блок товара-рекомендации.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductBrief({
  size: sizeProp,
  imageSrc,
  title,
  price,
  currency,
  footer,
  className,
  href,
  onLinkClick,
  loading,
  ...restProps
}: ProductBriefProps) {
  const desktop = useBreakpoint('xs+');
  const { failed, handleError } = useImageStub(imageSrc);
  const size = sizeProp ?? desktop ? 'l' : 's';

  if (loading) {
    return <ProductBriefSkeleton size={size} />;
  }

  return (
    <div className={cx('root', `size-${size}`, className)} {...restProps}>
      <a className={styles.image} href={href} onClick={onLinkClick}>
        <ImageOverlay className={styles.overlay}>
          {failed && <BrokenSVG />}
          {!failed && <img src={imageSrc} onError={handleError} />}
        </ImageOverlay>
      </a>

      <div className={styles.info}>
        <a className={styles.title} href={href} onClick={onLinkClick}>
          {title}
        </a>
        {price && <Price className={styles.price} value={price} currencyGrapheme={currency} />}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

/**
 * Заглушка блока товара-рекомендации.
 * @param props Свойства.
 * @return Элемент.
 */
function ProductBriefSkeleton({ size }: any) {
  return (
    <div className={cx('skeleton', size)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
