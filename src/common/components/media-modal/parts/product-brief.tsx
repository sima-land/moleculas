import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { Price } from '@sima-land/ui-nucleons/price';
import classNames from 'classnames';
import styles from './product-brief.module.scss';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';

export interface ProductBriefProps extends HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'l';
  title?: string;
  price?: string | number;
  currency?: string;
  footer?: ReactNode;
  href?: string;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
  imageSrc?: string;
}

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
  ...restProps
}: ProductBriefProps) {
  const desktop = useBreakpoint('xs+');
  const size = sizeProp ?? desktop ? 'l' : 's';

  return (
    <div className={classNames(styles.root, styles[`size-${size}`], className)} {...restProps}>
      <a className={styles.image} href={href} onClick={onLinkClick}>
        <ImageOverlay className={styles.overlay}>
          <img src={imageSrc} />
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
