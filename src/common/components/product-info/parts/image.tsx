import { ReactNode, useContext, useEffect, useState, MouseEventHandler } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import { ProductInfoContext } from '../utils';
import { ImgStub } from '../../img-stub';
import EighteenPlusSVG from '@sima-land/ui-quarks/icons/64x64/Stroked/EighteenPlus';
import classNames from 'classnames/bind';
import styles from './image.m.scss';

const cx = classNames.bind(styles);

export interface ImageProps {
  src?: string;
  alt?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
  opacity?: number;
}

/**
 * Слот - изображение товара.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductImage({ src, alt, href, onClick, children, opacity }: ImageProps) {
  const { restriction } = useContext(ProductInfoContext);
  const defaultOpacity = restriction ? 0.4 : undefined;
  const [broken, setBroken] = useState(false);

  useEffect(() => setBroken(false), [src]);

  return (
    <ImageOverlay className={cx('image-overlay')}>
      {restriction === 'adult' ? (
        <>
          <img
            onError={() => setBroken(true)}
            alt={alt}
            src={src}
            className={cx('image', 'adult', { broken })}
            data-testid='product-info:adult-image'
          />
          <EighteenPlusSVG className={cx('adult-icon')} />
        </>
      ) : (
        <>
          <a
            href={href}
            className={cx('image-link')}
            onClick={onClick}
            data-testid='product-info:image-link'
          >
            <img
              onError={() => setBroken(true)}
              alt={alt}
              src={src}
              className={cx('image', { broken })}
              style={{ opacity: typeof opacity === 'number' ? opacity : defaultOpacity }}
              data-testid='product-info:image'
            />
            {broken && <ImgStub className={cx('broken-icon')} />}
          </a>

          {children && <div className={cx('image-buttons')}>{children}</div>}
        </>
      )}
    </ImageOverlay>
  );
}
