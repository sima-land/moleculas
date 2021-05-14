import React from 'react';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Price } from '@dev-dep/ui-nucleons/price';
import { Image } from '../../../common/components/image';
import { isNonEmptyArray } from '../../../common/helpers/is-non-empty';
import { Badge } from '../../../common/components/badge';
import classnames from 'classnames/bind';
import styles from './product-info.scss';
import { QuickViewButton } from '../../../common/components/quick-view-button';
import withPrevent from '@dev-dep/ui-nucleons/helpers/with-prevent';
import { WithHint } from '@dev-dep/ui-nucleons/with-hint';

const cx = classnames.bind(styles);

/**
 * Компонент базовой информации о товаре.
 * @param {Object} props Свойства компонента.
 * @return {ReactElement} Элемент.
 */
export const ProductInfo = ({
  badges,
  currencyGrapheme,
  imageSrc,
  name,
  oldPrice,
  onQuickViewClick,
  price,
  url,
  withQuickView,
}) => (
  <>
    <a className={cx('row', 'image-row')} href={url}>
      <Image
        className={cx('image')}
        alt={name}
        src={imageSrc}
      />
      {withQuickView && (
        <WithHint hint='Быстрый просмотр' direction='left'>
          {(ref, toggle) => (
            <QuickViewButton
              ref={ref}
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
        {Boolean(oldPrice) && (
          <Price
            value={oldPrice}
            currencyGrapheme={currencyGrapheme}
            className={cx('old-price')}
            crossedOut
          />
        )}
      </div>
    )}

    {isNonEmptyArray(badges) && (
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
    />
  </>
);
