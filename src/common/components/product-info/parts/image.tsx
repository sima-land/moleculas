import { ProductInfoImageProps } from '../types';
import { useContext } from 'react';
import { ProductImage, ProductImageProps } from '../../product-image';
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
  images = [],
  href,
  children,
  anchorProps,
  sliderProps,
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
        {images.length > 1 && !adult ? (
          <HoverSlider
            withNav={!adult}
            {...sliderProps}
            className={classNames(styles.slider, sliderProps?.className)}
          >
            {images.map((imageProps, index) => (
              <HoverSliderItem key={index}>{renderImage(imageProps)}</HoverSliderItem>
            ))}
          </HoverSlider>
        ) : (
          images.slice(0, 1).map(renderImage)
        )}
      </a>

      {/* ВАЖНО: выводим children за пределами ссылки чтобы клики по кнопкам не вызывали переход по ссылке */}
      {!adult && <>{children}</>}
    </ProductInfoMedia>
  );
}

/** @inheritdoc */
function renderImage(props: ProductImageProps, key?: string | number | null | undefined) {
  return (
    <ProductImage key={key} {...props} className={classNames(styles.image, props.className)} />
  );
}
