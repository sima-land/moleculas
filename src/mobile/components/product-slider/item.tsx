import React, { useContext } from 'react';
import classnames from 'classnames/bind';
import { WishButton } from '../../../common/components/wish-button';
import { SliderContext } from './utils';
import { ProductInfo, ProductInfoProps } from '../../../common/components/product-info';
import styles from './item.module.scss';

export interface ProductSliderItemProps extends ProductInfoProps {

  /** Обработчик клика по товару. */
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>

  /** Сработает при клике на сердечко. */
  onFavoriteClick?: React.MouseEventHandler<SVGSVGElement>

  /** Должна вернуть содержимое для футера. */
  footer?: React.ReactNode;

  /** Нужно ли отображать кнопку-сердечко как нажатую. */
  favorite?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Компонент элемента карусели рекомендаций.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const ProductSliderItem = ({
  data,
  favorite,
  footer,
  onFavoriteClick,
  ...restProps
}: ProductSliderItemProps) => {
  const { needLoadImages } = useContext(SliderContext);

  return (
    <div className={cx('root')}>
      <ProductInfo
        {...restProps}
        data={{ ...data, imageSrc: needLoadImages ? data.imageSrc : undefined }}
      >
        <ProductInfo.OnImage>
          <WishButton
            checked={favorite}
            onClick={onFavoriteClick}
            className={cx('favorite-button')}
          />
        </ProductInfo.OnImage>
      </ProductInfo>

      {footer && (
        <div className={cx('footer')}>{footer}</div>
      )}
    </div>
  );
};
