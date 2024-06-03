import { type ProductImageProps } from './types';
import { ProductImageContext } from './utils';
import { useContext } from 'react';
import { useImageStub } from '../../../common/hooks';
import { ImgStub } from '../img-stub';
import EighteenPlusSVG from '@sima-land/ui-quarks/icons/64x64/Stroked/EighteenPlus';
import classNames from 'classnames';
import styles from './product-image.m.scss';

const defaultAdultContent = <EighteenPlusSVG className={styles['adult-icon']} />;

const defaultStubContent = <ImgStub className={styles['broken-stub']} />;

/**
 * Изображение товара.
 * Добавляет наложение поверх по гайдам.
 * Размывает изображения для взрослых при указании атрибута adult.
 * Выводит заглушку для не загрузившихся изображений.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductImage({
  src,
  alt = '',
  style,
  className,
  rootRef,
  imageRef,
  imageProps,
  adult: adultFromProps,
  adultContent = defaultAdultContent,
  stubContent = defaultStubContent,
  'data-testid': testId = 'product-image',
  ...restProps
}: ProductImageProps) {
  const { adult: adultFromContext } = useContext(ProductImageContext);
  const { failed, handleError } = useImageStub(src, imageProps?.onError);

  const adult = adultFromProps ?? adultFromContext;

  return (
    <div
      {...restProps}
      ref={rootRef}
      style={style}
      className={classNames(styles.root, !failed && styles.overlay, className)}
      data-testid={testId}
    >
      <img
        {...imageProps}
        ref={imageRef}
        src={imageProps?.src ?? src}
        alt={imageProps?.alt ?? alt}
        onError={handleError}
        className={classNames(styles.image, adult && styles.adult, imageProps?.className)}
      />

      {adult && adultContent}

      {failed && stubContent}
    </div>
  );
}
