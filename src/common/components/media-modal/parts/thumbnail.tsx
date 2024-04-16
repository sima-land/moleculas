import { createContext, useContext, MouseEventHandler } from 'react';
import { ImageOverlay } from '../../../../desktop/components/gallery-modal/components/image-overlay';
import PlaySVG from '@sima-land/ui-quarks/icons/24x24/Filled/Play';
import AllRoundSVG from '@sima-land/ui-quarks/icons/40x40/Filled/Viewing360Perspective';
import { Price } from '@sima-land/ui-nucleons/price';
import { useImageStub } from '../../../hooks';
import classNames from 'classnames/bind';
import styles from './thumbnail.module.scss';
import { ImgStub } from '../../img-stub';

export type ThumbnailSize = 's' | 'l';

export interface ThumbnailProps {
  size?: ThumbnailSize;
  type: 'icon-360' | 'icon-video' | 'preview-image' | 'preview-video';
  src?: string;
  alt?: string;
  checked?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
  loading?: boolean;
  title?: string;
  price?: number;
  currency?: string;
}

export const ThumbnailContext = createContext<Pick<ThumbnailProps, 'size'>>({});

const cx = classNames.bind(styles);

/**
 * Компонент превью медиа.
 * @param props Свойства.
 * @return Элемент.
 */
export function Thumbnail({
  size: sizeFromProps,
  type,
  src,
  alt,
  checked,
  onClick,
  className,
  loading,
  title,
  price,
  currency,
}: ThumbnailProps) {
  const { size: sizeFromContext } = useContext(ThumbnailContext);
  const { failed, handleError } = useImageStub(src);

  const size = sizeFromProps ?? sizeFromContext ?? 'l';

  const rootClassName = cx(
    'root',
    `size-${size}`,
    type?.startsWith('icon-') && 'iconic',
    checked && 'checked',
    loading && 'loading',
    className,
  );

  if (loading) {
    return (
      <button className={rootClassName} onClick={onClick} data-testid='thumbnail'>
        <span className={cx('content')} />
        {type === 'preview-video' && <span className={cx('info')} />}
      </button>
    );
  }

  return (
    <button className={rootClassName} onClick={onClick} data-testid='thumbnail'>
      <span className={cx('content')}>
        {type?.startsWith('preview-') && (
          <ImageOverlay className={cx('image')}>
            {failed && <ImgStub className={cx('stub')} />}
            {!failed && <img src={src} alt={alt} onError={handleError} />}
          </ImageOverlay>
        )}

        {!failed && type === 'preview-video' && <span className={cx('play')}></span>}

        {type === 'icon-360' && <AllRoundSVG fill='currentColor' />}

        {type === 'icon-video' && <PlaySVG width={32} height={32} fill='currentColor' />}
      </span>

      {(title || price) && (
        <span className={cx('info')}>
          {title && <span className={cx('title')}>{title}</span>}

          {price && <Price className={cx('price')} value={price} currencyGrapheme={currency} />}
        </span>
      )}
    </button>
  );
}
