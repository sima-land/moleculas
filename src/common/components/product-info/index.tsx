import React from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Price } from '@sima-land/ui-nucleons/price';
import { defineSlots } from '@sima-land/ui-nucleons/helpers/define-slots';
import { ImageOverlay } from '../../../desktop/components/gallery-modal/components/image-overlay';
import { BadgeList } from '../badge-list';
import { BadgeProps } from '../badge';
import classnames from 'classnames/bind';
import styles from './product-card.module.scss';

export interface ProductData {

  /** Ссылка на товар. */
  url: string;

  /** Название товара. */
  name?: string;

  /** Ссылка на картинку. */
  imageSrc?: string;

  /** Альтернативный текст картинки. */
  imageAlt?: string;

  /** Цена товара. */
  price: number;

  /** Старая цена товара. */
  oldPrice?: number;

  /** Графема валюты. */
  currencyGrapheme?: string;

  /** Список шильдиков. */
  badges?: BadgeProps[];
}

export interface ProductInfoProps {

  /** Данные товара. */
  data: ProductData;

  /** Содержимое. */
  children?: React.ReactNode;

  /** Обработчик клика по ссылке на товар. */
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export interface ProductInfoComponent {
  (props: ProductInfoProps): JSX.Element
  OnImage: typeof OnImage;
}

const cx = classnames.bind(styles);

/**
 * Компонент-слот для вывода контента над изображением.
 * @param props Свойства.
 * @return Элемент.
 */
export const OnImage: React.FC = ({ children }) => <>{children}</>;

/**
 * Компонент элемента карусели рекомендаций.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const ProductInfo: ProductInfoComponent = ({
  data,
  onLinkClick,
  children,
}) => {
  const { onImage } = defineSlots(children, {
    onImage: OnImage,
  });

  return (
    <>
      {Boolean(data.imageSrc) && (
        <ImageOverlay className={cx('image-overlay')}>
          <a
            href={data.url}
            className={cx('image-link')}
            onClick={onLinkClick}
            data-testid='product-info:image-link'
          >
            <img
              className={cx('image')}
              alt={data.imageAlt}
              src={data.imageSrc}
            />
          </a>

          {onImage && (
            <div className={cx('on-image')}>
              {onImage}
            </div>
          )}
        </ImageOverlay>
      )}

      {data.badges && data.badges.length > 0 && (
        <BadgeList
          items={data.badges}
          lineLimit={1}
          className={cx('badges')}
        />
      )}

      {Boolean(data.price) && (
        <div className={cx('prices')}>
          <Price
            value={data.price}
            currencyGrapheme={data.currencyGrapheme}
            className={cx('price')}
          />
          {data.oldPrice && (
            <Price
              value={data.oldPrice}
              currencyGrapheme={data.currencyGrapheme}
              className={cx('old-price')}
              crossedOut
            />
          )}
        </div>
      )}

      <Link
        onClick={onLinkClick}
        className={cx('link')}
        href={data.url}
        children={data.name}
        color='gray87'
        data-testid='product-info:name-link'
      />
    </>
  );
};

ProductInfo.OnImage = OnImage;
