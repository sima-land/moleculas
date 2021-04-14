import React from 'react';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Price } from '@dev-dep/ui-nucleons/price';
import QuickViewSVG from '../../../common/icons/quick-view.svg';
import classnames from 'classnames/bind';
import styles from './item.scss';

const cx = classnames.bind(styles);

/**
 * Компонент элемента карусели рекомендаций.
 * @param {Object} props Свойства компонента.
 * @param {string} props.url Ссылка на товар.
 * @param {string} props.name Название товара.
 * @param {string} props.imageSrc Ссылка на картинку.
 * @param {number} props.price Цена товара.
 * @param {number} props.oldPrice Ссылка на картинку.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {Function} props.onClick Обработчик клика по товару.
 * @param {Object} props.quickViewButtonProps Свойства кнопки быстрого просмотра.
 * @return {ReactElement} Элемент.
 */
export const RecommendedItem = ({
  url,
  name,
  imageSrc,
  price,
  oldPrice,
  currencyGrapheme,
  onClick,
  quickViewButtonProps,
  size = {},
}) => (
  <div
    className={cx('root', [
      `size-xs-${size.xs || 4}`,
      `size-s-${size.s || 3}`,
      `size-m-${size.m || 2}`,
      `size-l-${size.l || 2}`,
      `size-xl-${size.xl || 2}`,
    ])}
  >
    {Boolean(imageSrc) && (
      <div className={cx('image-wrapper')}>
        <img
          className={cx('image')}
          alt={name}
          src={imageSrc}
        />
        <div
          {...quickViewButtonProps}
          data-testid='reco-item:quick-view'
          className={cx('quick-view-button')}
          role='button'
        >
          <QuickViewSVG
            className={cx('svg')}
            width={24}
            height={24}
          />
        </div>
      </div>
    )}
    {Boolean(price) && (
      <div className={cx('prices-wrapper')}>
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
    <Link
      onClick={onClick}
      className={cx('link')}
      href={url}
      children={name}
      color='black'
    />
  </div>
);
