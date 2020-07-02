import Link from '@dev-dep/ui-nucleons/link';
import Price from '@dev-dep/ui-nucleons/price';
import React, { useRef, useEffect } from 'react';
import classes from './recommended-item.scss';
import classnames from 'classnames/bind';
import { cutTextContent } from '../../../common/helpers/dom';
import isFunction from 'lodash/isFunction';
import debounce from 'lodash/debounce';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';
import ItemQuickViewButton from '../../../common/components/item-quick-view-button';

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
 * @param {number} props.price Цена товара.
 * @param {number} props.oldPrice Ссылка на картинку.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {Function} props.onItemClick Обработчик клика по товару.
 * @param {Function} props.onQuickViewClick Обработчик клика по кнопке быстрого просмотра.
 * @param {Function} props.addGlobalListener Функция подписки на глобальные события.
 * @return {ReactElement} Компонент элемента карусели рекомендаций.
 */
const RecommendedItem = ({
  url,
  name,
  imageSrc,
  price,
  oldPrice,
  currencyGrapheme,
  onItemClick,
  onQuickViewClick,
  addGlobalListener,
}) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const { current: element } = linkRef;
    element && cutItemLink(element);

    const cutItemText = debounce(() => {
      element.textContent = name;
      cutItemLink(element);
    }, 500);

    return addGlobalListener('resize', cutItemText);
  }, [name]);

  return (
    <div className={cx('item')}>
      {Boolean(imageSrc) && (
        <div className={cx('image-wrapper')}>
          <img
            className={cx('image')}
            alt={name}
            src={imageSrc}
          />
          <ItemQuickViewButton
            onClick={onQuickViewClick}
            additionalClassName={cx('quick-view-button')}
          />
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
