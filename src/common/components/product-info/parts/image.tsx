import { ProductInfoImageProps } from '../types';
import { useContext } from 'react';
import { ProductImage } from '../../product-image';
import { HoverSlider, HoverSliderItem } from '../../hover-slider';
import { ProductInfoContext } from '../utils';
import { ProductInfoMedia } from './media';
import classNames from 'classnames';
import styles from './image.m.scss';

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

  const rootClassName = classNames(
    styles.link,
    restriction && !adult && styles.unavailable,
    anchorProps?.className,
  );

  return (
    <ProductInfoMedia {...restProps}>
      <a
        {...anchorProps}
        data-testid='product-image-link'
        href={adult ? undefined : href}
        className={rootClassName}
      >
        {Array.isArray(src) ? (
          <HoverSlider className={styles.slider}>
            {src.map((item, index) => (
              <HoverSliderItem key={index}>
                <ProductImage src={item} className={styles.image} />
              </HoverSliderItem>
            ))}
          </HoverSlider>
        ) : (
          <ProductImage src={src} className={styles.image} />
        )}
      </a>

      {/* ВАЖНО: выводим children за пределами ссылки чтобы клики по кнопкам не вызывали переход по ссылке */}
      {!adult && <>{children}</>}
    </ProductInfoMedia>
  );
}
