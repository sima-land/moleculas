import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { Price } from '@sima-land/ui-nucleons/price';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { useImageStub } from '../../../hooks';
import classNames from 'classnames/bind';
import styles from './product-brief.module.scss';
import { ImgStub } from '../../img-stub';

export interface ProductBriefProps extends HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'l';
  title?: string;
  price?: string | number;
  priceReplacer?: ReactNode;
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
  priceReplacer,
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
  const priceDefined = typeof price === 'number' || typeof price === 'string';

  if (loading) {
    return <ProductBriefSkeleton size={size} />;
  }

  return (
    <div className={cx('root', `size-${size}`, className)} {...restProps}>
      <a className={styles.image} href={href} onClick={onLinkClick}>
        <ImageOverlay className={styles.overlay}>
          {failed && <ImgStub className={styles.stub} />}
          {!failed && <img src={imageSrc} onError={handleError} />}
        </ImageOverlay>
      </a>

      <div className={styles.info}>
        <a className={styles.title} href={href} onClick={onLinkClick}>
          {title}
        </a>
        {(priceDefined || priceReplacer) && (
          <div className={styles.price}>
            {priceDefined ? <Price value={price} currencyGrapheme={currency} /> : priceReplacer}
          </div>
        )}
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
