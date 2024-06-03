import { AnchorHTMLAttributes, useContext } from 'react';
import { ProductImage } from '../../product-image';
import { HoverSlider, HoverSliderItem } from '../../hover-slider';
import { ProductInfoContext } from '../utils';
import { ProductInfoMedia, ProductInfoMediaProps } from './media';
import classNames from 'classnames';
import styles from './image.m.scss';

export interface ProductInfoImageProps extends ProductInfoMediaProps {
  /** Ссылка на картинку или список ссылок для вывода слайдера. */
  src?: string | string[];

  /** Ссылка на товар. */
  href?: string;

  /** Прочие атрибуты элемента-ссылки. */
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * Картинки товара.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoImage({
  src,
  href,
  children,
  anchorProps,
  ...restProps
}: ProductInfoImageProps) {
  const { restriction } = useContext(ProductInfoContext);

  const adult = restriction === 'adult';

  // @todo сделать не через inline style
  const opacity = restriction && !adult ? 0.4 : undefined;

  return (
    <ProductInfoMedia {...restProps}>
      <a
        {...anchorProps}
        data-testid='product-image-link'
        href={adult ? undefined : href}
        className={classNames(styles.link, anchorProps?.className)}
      >
        {Array.isArray(src) ? (
          <HoverSlider className={styles.slider}>
            {src.map((item, index) => (
              <HoverSliderItem key={index}>
                <ProductImage src={item} style={{ opacity }} />
              </HoverSliderItem>
            ))}
          </HoverSlider>
        ) : (
          <ProductImage src={src} className={styles.image} style={{ opacity }} />
        )}
      </a>

      {/* ВАЖНО: выводим children за пределами ссылки чтобы клики по кнопкам не вызывали переход по ссылке */}
      {!adult && <>{children}</>}
    </ProductInfoMedia>
  );
}
