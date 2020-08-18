import React, { useRef, useEffect, useState } from 'react';
import Link from '@dev-dep/ui-nucleons/link';
import Price from '@dev-dep/ui-nucleons/price';
import classes from './recommended-item.scss';
import classnames from 'classnames/bind';
import cutTextContent from '@dev-dep/ui-nucleons/helpers/cut-text-content';
import isFunction from 'lodash/isFunction';
import debounce from 'lodash/debounce';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';

const cx = classnames.bind(classes);

/**
 * @type {number} Максимальная высота текста-ссылки в попапе товара.
 */
const linkMaxHeight = 40;

/**
 * Обрезает текст ссылки товара до нужной высоты.
 * @param {HTMLElement} element Элемент ссылки товара.
 */
export const cutItemLink = element => {
  cutTextContent(element, linkMaxHeight);
};

/**
 * Компонент элемента карусели рекомендаций.
 * @param {Object} props Свойства компонента.
 * @param {string} props.url Ссылка на товар.
 * @param {string} props.name Название товара.
 * @param {string} props.imageSrc Ссылка на картинку.
 * @param {string} props.imageAlt Альтернативный текст картинки.
 * @param {number} props.price Цена товара.
 * @param {number} props.oldPrice Старая цена товара.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {Function} props.onItemClick Обработчик клика по товару.
 * @param {Function} props.addGlobalListener Функция подписки на глобальные события.
 * @param {boolean} [props.canLoadImage=true] Можно ли отрисовать изображение.
 * @param {boolean} [props.needLoadImage=true] Нужно ли отрисовать изображение.
 * @return {ReactElement} Компонент элемента карусели рекомендаций.
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
  addGlobalListener,
  canLoadImage = true,
  needLoadImage = true,
}) => {
  const linkRef = useRef(null);
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const { current: element } = linkRef;
    element && cutItemLink(element);

    const cutItemText = debounce(() => {
      element.textContent = name;
      cutItemLink(element);
    }, 250);

    return addGlobalListener('resize', cutItemText);
  }, [name]);

  useEffect(() => {
    itemRef.current instanceof HTMLElement && defineVisibility(itemRef.current);
  }, [itemRef.current]);

  /**
   * Определяет находиться ли элемент в зоне видимости по ширине экрана.
   * @param {HTMLElement} element Элемент.
   */
  const defineVisibility = element => {
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
            fractionalInSuper
          />
          {Boolean(oldPrice) && (
            <Price
              value={oldPrice}
              currencyGrapheme={currencyGrapheme}
              className={cx('old-price')}
              fractionalInSuper
              old
            />
          )}
        </div>
      )}
      <Link
        onClick={isFunction(onItemClick) ? onItemClick : null}
        className={cx('link')}
        disableHoverEffect
        ref={linkRef}
        href={url}
        children={name}
        color='black'
      />
    </div>
  );
};

export default withGlobalListeners(RecommendedItem);
