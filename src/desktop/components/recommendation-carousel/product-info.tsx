import React from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Price } from '@sima-land/ui-nucleons/price';
import { Image } from '../../../common/components/image';
import { Badge } from '../../../common/components/badge';
import classnames from 'classnames/bind';
import styles from './product-info.module.scss';
import { QuickViewButton } from '../../../common/components/quick-view-button';
import withPrevent from '@sima-land/ui-nucleons/helpers/with-prevent';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';
import { Product, WithLinkClickHandle } from './types';

export interface ProductInfoProps extends Product, WithLinkClickHandle {
  onQuickViewClick?: React.MouseEventHandler<SVGSVGElement>
  withQuickView?: boolean
}

const cx = classnames.bind(styles);

/**
 * Компонент базовой информации о товаре.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const ProductInfo = ({
  badges,
  currencyGrapheme,
  imageSrc,
  name,
  oldPrice,
  onQuickViewClick,
  onLinkClick,
  price,
  url,
  withQuickView,
}: ProductInfoProps) => (
  <>
    <a className={cx('row', 'image-row')} href={url} onClick={onLinkClick} data-testid='product-info:image-link'>
      <Image
        className={cx('image')}
        alt={name}
        src={imageSrc}
      />
      {withQuickView && (
        <WithHint hint='Быстрый просмотр' direction='left'>
          {(ref, toggle) => (
            <QuickViewButton
              ref={ref as any}
              onMouseEnter={() => toggle(true)}
              onMouseLeave={() => toggle(false)}
              className={cx('quick-view-btn')}
              onClick={withPrevent(onQuickViewClick)}
            />
          )}
        </WithHint>
      )}
    </a>

    {Boolean(price) && (
      <div className={cx('row', 'prices-row')}>
        <Price
          value={price}
          currencyGrapheme={currencyGrapheme}
          className={cx('price')}
        />

        {oldPrice && (
          <Price
            value={oldPrice}
            currencyGrapheme={currencyGrapheme}
            className={cx('old-price')}
            crossedOut
          />
        )}
      </div>
    )}

    {Array.isArray(badges) && badges.length > 0 && (
      <div className={cx('row', 'badges-row')}>
        {badges.map((badge, index) => (
          <Badge
            {...badge}
            key={index}
            className={cx('badge')}
          />
        ))}
      </div>
    )}

    <Link
      className={cx('row', 'link')}
      href={url}
      children={name}
      color='gray87'
      onClick={onLinkClick}
      data-testid='product-info:name-link'
    />
  </>
);
