import React, { useRef, useEffect, useState } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Price } from '@sima-land/ui-nucleons/price';
import classes from './recommended-item.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

/**
 * Компонент элемента карусели рекомендаций.
 * @param props Свойства компонента.
 * @param props.url Ссылка на товар.
 * @param props.name Название товара.
 * @param props.imageSrc Ссылка на картинку.
 * @param props.imageAlt Альтернативный текст картинки.
 * @param props.price Цена товара.
 * @param props.oldPrice Старая цена товара.
 * @param props.currencyGrapheme Графема валюты.
 * @param props.onItemClick Обработчик клика по товару.
 * @param props.addGlobalListener Функция подписки на глобальные события.
 * @param props.canLoadImage Можно ли отрисовать изображение.
 * @param props.needLoadImage Нужно ли отрисовать изображение.
 * @return Элемент.
 */
const RecommendedItem = ({
  url,
  name,
  imageSrc,
  imageAlt,
  price,
  oldPrice,
  currencyGrapheme,
  onItemClick,
  canLoadImage = true,
  needLoadImage = true,
}: {
  url: string
  name?: string
  imageSrc?: string
  imageAlt?: string
  price: number
  oldPrice?: number
  currencyGrapheme?: string
  onItemClick: () => void
  canLoadImage: boolean
  needLoadImage: boolean
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    itemRef.current && defineVisibility(itemRef.current);
  }, []);

  /**
   * Определяет находиться ли элемент в зоне видимости по ширине экрана.
   * @param {HTMLElement} element Элемент.
   */
  const defineVisibility = (element: HTMLElement) => {
    const { left } = element.getBoundingClientRect() || {};
    setIsVisible(document.body.clientWidth + 200 > left);
  };

  return (
    <div className={cx('item')} ref={itemRef}>
      {Boolean(imageSrc) && (
        <div className={cx('image-wrapper')}>
          {(needLoadImage || (canLoadImage && isVisible)) && (
            <img
              className={cx('image')}
              alt={imageAlt}
              src={imageSrc}
            />
          )}
        </div>
      )}
      {Boolean(price) && (
        <div className={cx('price-wrapper')}>
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
      <Link
        onClick={onItemClick}
        className={cx('link')}
        href={url}
        children={name}
        color='gray87'
      />
    </div>
  );
};

export default RecommendedItem;
